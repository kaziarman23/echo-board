import { defineField, defineType } from "sanity";

export const startup = defineType({
  name: "startup",
  title: "Startup",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "category",
      type: "text",
      validation: (rule) =>
        rule.required().min(1).max(20).error("Please Enter a category"),
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (rule) => rule.required().error("Please Enter a image url"),
    }),
    defineField({
      name: "pitch",
      type: "markdown",
    }),
  ],
});
