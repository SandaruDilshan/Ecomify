import { defineField, defineType } from "sanity";

export const promotionCampain = defineType({
    name: "promotionCampain",
    title: "Promotion Campain",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "code",
            title: "Code",
            type: "reference",
            to:[{ type: "promotionCode"}],
        }),
    ]
})