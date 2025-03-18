React js
Next js
Tailwind
Vercel for deployement
PostgreSQL
Stripe for handling payments
Sanity CMS - including new live content API feature (npm install sanity -G / npm install sanity -G --legacy-peer-deps)
saniti init
create sanity types (schemas)
sanity deploy

zustand - lightweight state manegement library
(npm instal zustand --legacy-peer-deps)

zod - schema definition(is a TypeScript-first library for schema declaration and validation, designed to make it easy to define and validate data structures. npm i zod)

Prisma - CLI tool used for managing schema, migrations, and generating the Prisma Client. Prisma is a next-generation ORM (Object-Relational Mapper) for Node.js and TypeScript applications. It simplifies database access by providing an intuitive API to interact with databases like PostgreSQL, MySQL, SQLite, MongoDB, and SQL Server.
(npm i prisma -D <-- save as a development dependency using -D)

prisma/client -The actual database client used in your code to perform database queries. it is auto genarated database. client that allows you to interact with your database using JavaScript or TypeScript. It provides a type-safe API to perform CRUD operations without writing raw SQL. (npm i @prisma/client)

create prisma folder - (npx prisma init)

npx prisma db push - syncs your prisma/schema.prisma file with the database without creating migrations. (can get result as -> Your database is now in sync with your Prisma schema)

npx prisma studio -> Open prisma GUI database

Lucia - Lucia is an authentication library for JavaScript and TypeScript applications.(
✅ Session-based authentication (not just JWT)
✅ Secure and flexible (supports database-backed sessions)
✅ Works with various databases (PostgreSQL, MySQL, SQLite, etc.)
✅ Compatible with frameworks like Next.js, SvelteKit, and Express)
