"use client";
import React from 'react'
import { useState, useEffect } from 'react';
// import {Link } from "react-scroll"; 
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Link from 'next/link';
import { User } from '@prisma/client';
import { logoutUser } from '@/actions/auth';
import { useRouter } from 'next/navigation';



const Announcement = () => {
    return (
        <div className="w-full bg-black py-2">
            <div className="container mx-auto flex items-center justify-center px-8">
                <span className="text-center text-sm font-medium tracking-wide text-white">
                    Free shipping on all orders over $50 and free returns
                </span>
            </div>
        </div>
    )
}

type HeaderProps = { 
    user: Omit<User, "passwordHash"> | null;
}

function Header({user}: HeaderProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [prevScrollY, setPrevScrollY] = useState<number>(0);
    const router = useRouter();

   
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrolledUp = prevScrollY < currentScrollY;

            if (scrolledUp) {
                setIsOpen(true);
            } else if (currentScrollY > 100) {
                setIsOpen(false);
            }

            setPrevScrollY(currentScrollY);
        }

        setPrevScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[prevScrollY])

    return (
        <header className='w-full sticky top-0 z-50'>
            <div
                className={`w-full transform transistion-transform duration-300 ease-in-out 
                ${!isOpen ? 'translate-y-0' : '-translate-y-full'} `}>
                <Announcement />
                <div className="w-full flex justify-between items-center py-3 sm:py-4 bg-white/80 shadow-sm border-b border-gray-100 backdrop-blur-sm">
                    <div className="flex justify-between items-center container mx-auto px-8">
                        <div className="flex flex-1 justify-start items-center gap-4 sm:gap-6">
                            <button className='text-gray-700 hover:text-gray-900 md:hidden'>
                                <IoMenu className='w-6 h-6' />
                            </button>
                            <nav className="hidden md:flex gap-4 lg:gap-6 text-sm font-medium">
                                <Link href='#'>Shop</Link>
                                <Link href='#'>New Arrivals</Link>
                                <Link href='#'>Sales</Link>
                            </nav>
                        </div>
                        <Link href='#' className='absolute left-1/2 translate-x-1/2'>
                            <span className=' sm:text-2xl font-bold tracking-tight'>DEAL</span>
                        </Link>
                        <div className='flex flex-1 justify-end items-center gap-2 sm:gap-4'>
                            <button className='text-gray-700 hover:text-gray-900 hidden sm:block'>
                                <FaSearch className='w-6 h-6' />
                            </button>

                            {user ? (
                                <div className='flex items-center gap-2 sm:gap-4'>
                                    <span className="text-sm text-gray-700 hidden md:block">{user.email}</span>
                                    <Link href="#"
                                        className='text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900'
                                        onClick={ async (e) => {
                                            e.preventDefault();
                                            await logoutUser();
                                            router.refresh();
                                        }}
                                    >Sign Out</Link>
                                </div>
                            ): (
                                <>
                                    <Link href="/auth/sign-in" className='text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900'>Sign In</Link>
                                    <Link href="/auth/sign-up" className='text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900'>Sign Up</Link>
                                </>
                            )}


                            <button className='text-gray-700 hover:text-gray-900 relative'>
                                <FiShoppingCart className='w-7 h-6' />
                                <span className='absolute -top-3.5 bg-black text-white text-[12px] sm:text-xs w-3.5 h-3.5 sm:h-4 sm:w-4 rounded-full'>0</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
