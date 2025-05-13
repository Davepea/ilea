import { FiUser } from "react-icons/fi";
import { defineField, defineType } from "sanity";

export const user = defineType({
  name: "user",
  title: "User",
  type: "document",
  icon: FiUser,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: Rule => Rule.required().max(50),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: Rule => Rule.required().email(),
    }),
 
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true, // Allows for smart cropping
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text (for SEO)",
        },
      ],
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      validation: Rule => Rule.max(300),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: [
          { title: "Admin", value: "admin" },
          { title: "User", value: "user" },
          { title: "Guest", value: "guest" },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Active User?",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "email",
      media: "profileImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle || "No email provided",
        media,
      };
    },
  },
});
