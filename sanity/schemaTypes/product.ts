import { SiProducthunt } from "react-icons/si";
import { defineField, defineType } from "sanity";
import { v4 as uuidv4 } from 'uuid'

export const product = defineType({
    name: "product",
    type: "document",
    icon: SiProducthunt,
    fields: [
        defineField({
            name: 'id',
            type: 'string',
            readOnly: true,
            initialValue: () => uuidv4(),
        }),
        defineField({
            name: 'name',
            title: 'Product Name',
            type: 'string',
            validation: Rule => Rule.required().max(120)
        }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            options: { source: 'name', maxLength: 96 },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'sku',
            title: 'SKU Code',
            type: 'string',
            description: 'Unique inventory identifier'
        }),
        defineField({
            name: 'price',
            title: 'Retail Price',
            type: 'number',
            validation: Rule => Rule.required().min(0).precision(2)
        }),
        defineField({
            name: 'discountPrice',
            title: 'Sale Price',
            type: 'number',
            validation: Rule => Rule.min(0).precision(2)
        }),
        defineField({
            name: 'costPrice',
            title: 'Wholesale Cost',
            type: 'number',
            hidden: true // Only visible in backend
        }),
        defineField({
            name: 'mainImage',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true }, // Enables smart cropping
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alt Text (for SEO)'
              },

            ]

        }),
        defineField({
            name: 'gallery',
            title: 'Additional Images',
            type: 'array',
            of: [{ 
              type: 'image',
              options: { hotspot: true },
              fields: [
                { name: 'alt', type: 'string' },
                { name: 'isDetailShot', type: 'boolean' }
              ]
            }]
          }),

        defineField({
            name: 'sizes',
            title: 'Available Sizes',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
              list: [
                { title: 'XS', value: 'xs' },
                { title: 'S', value: 's' },
                // ... other sizes
              ]
            }
          },
          ),

        defineField({
            name: 'colors',
            title: 'Color Options',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                { name: 'name', type: 'string' },
                { name: 'hex', type: 'string', options: { colorList: ['#FF0000','red','yellow'] }},
                { name: 'swatchImage', type: 'image' }
              ]
            }]
          }),
        defineField({
            name: 'inventory',
            title: 'Stock Control',
            type: 'object',
            fields: [
              {
                name: 'trackInventory',
                type: 'boolean',
                title: 'Enable Stock Tracking?',
                initialValue: false
              },
              {
                name: 'quantity',
                type: 'number',
                title: 'Units Available',
                hidden: ({ parent }) => !parent?.trackInventory
              },
              {
                name: 'backorder',
                type: 'boolean',
                title: 'Allow Backorders?',
                initialValue: false
              }
            ]
          }),
          defineField({
            name: 'category',
            title: 'Product Category',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'category' }] }]
          }),          
        defineField({
            name: 'tags',
            title: 'Search Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' }
          }),
        defineField({
            name: 'description',
            title: 'Product Story',
            type: 'text' // Custom rich text type
          }),

        defineField({
            name: 'care',
            title: 'Fabric Care',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
              list: [
                { title: 'Machine Wash', value: 'machine_wash' },
                // ... other care options
              ]
            }
          }),
        defineField({
            name: 'isNew',
            title: 'New Arrival',
            type: 'boolean',
            initialValue: false
          }),
        defineField({
            name: 'isBestseller',
            title: 'Bestseller',
            type: 'boolean'
          }),
        defineField({
            name: 'isFeatured',
            title: 'Homepage Feature',
            type: 'boolean'
          }),
        defineField({
            name: 'seo',
            title: 'SEO Settings',
            type: 'object',
            fields: [
              { name: 'metaTitle', type: 'string' },
              { name: 'metaDesc', type: 'text', rows: 3 },
              { name: 'keywords', type: 'array', of: [{ type: 'string' }] }
            ]
          }),
        
    ],
    preview: {
        select: {
          title: 'name',
          media: 'mainImage',
          price: 'price',
          status: 'isActive'
        },
        prepare({ title, media, price, status }) {
          return {
            title,
            subtitle: `${status ? '🟢' : '🔴'} $${price}`,
            media
          };
        }
      }
 
})