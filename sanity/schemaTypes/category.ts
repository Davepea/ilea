import { BiCategory } from "react-icons/bi";
import { defineField, defineType } from "sanity";

export const category = defineType({
    name: "category",
    type: "document",
    icon: BiCategory,
    fields: [
        defineField({
            name: 'title',
            title: 'Category Name',
            type: 'string',
            validation: Rule => Rule.required().max(60),
            description: 'E.g., "Men\'s T-Shirts", "Women\'s Dresses"'
          }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
              slugify: input => input
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]+/g, '')
            },
            validation: Rule => Rule.required()
          }),
        defineField( {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alt Text',
                description: 'For accessibility and SEO'
              }
            ]
          }),
        defineField({
            name: 'parentCategory',
            title: 'Parent Category',
            type: 'reference',
            to: [{ type: 'category' }],
            description: 'Leave empty for top-level categories'
          }),
        defineField({
            name: 'genderTarget',
            title: 'Gender Target',
            type: 'string',
            options: {
              list: [
                { title: 'Men', value: 'men' },
                { title: 'Women', value: 'women' },
                { title: 'Unisex', value: 'unisex' },
                { title: 'Kids', value: 'kids' }
              ],
              layout: 'radio'
            }
          }),
        defineField({
            name: 'description',
            title: 'Category Description',
            type: 'text',
            rows: 3,
            description: 'Brief intro for SEO and category pages'
          }),
        defineField({
            name: 'seo',
            title: 'SEO Settings',
            type: 'object',
            fields: [
              {
                name: 'metaTitle',
                title: 'Meta Title',
                type: 'string',
                description: 'Title for search engines (60 chars max)',
                validation: Rule => Rule.max(60)
              },
              {
                name: 'metaDescription',
                title: 'Meta Description',
                type: 'text',
                rows: 2,
                description: 'Description for search results (160 chars max)',
                validation: Rule => Rule.max(160)
              }
            ]
          }),
        defineField({
            name: 'isSeasonal',
            title: 'Seasonal Category?',
            type: 'boolean',
            initialValue: false,
            description: 'E.g., "Winter Coats" or "Summer Dresses"'
          }),

        defineField( {
            name: 'season',
            title: 'Season',
            type: 'string',
            hidden: ({ parent }) => !parent?.isSeasonal,
            options: {
              list: [
                { title: 'Spring', value: 'spring' },
                { title: 'Summer', value: 'summer' },
                { title: 'Fall', value: 'fall' },
                { title: 'Winter', value: 'winter' }
              ]
            }
          })
        
    ],
    preview: {
        select: {
          title: 'title',
          subtitle: 'genderTarget',
          media: 'coverImage'
        },
        prepare({ title, subtitle, media }) {
          const genderMap = {
            men: '👔 Men',
            women: '👗 Women',
            unisex: '👕 Unisex',
            kids: '🧒 Kids'
          };
          return {
            title,
            subtitle: genderMap[subtitle as keyof typeof genderMap]|| 'No gender set',
            media
          };
        }
      }
})