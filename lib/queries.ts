import { defineQuery } from "next-sanity";





export const PRODUCT_MEN_TOP_QUERY = 
defineQuery( `*[_type == "product" && references(*[_type == "category" && slug.current == "mens-tops"]._id)] {
  _id,
  name,
  "categoryReferences": category[]->{
    _id,
    title,
    "slug": slug.current
  }
}
`);


// sanity/lib/queries.ts
export const PRODUCTS_QUERY = `*[_type == "product"] {
  _id,
  _createdAt,
  name,
  slug,
  sku,
  price,
  discountPrice,
  mainImage,
  gallery[]{
    asset->,
    alt,
    isDetailShot
  },
  sizes,
  colors[]{
    name,
    hex,
    swatchImage
  },
  inventory {
    trackInventory,
    backorder
  },
  category[]->{
    _id,
    title,
    slug
  },
  tags,
  description,
  care,
  isNew,
  isBestseller,
  isFeatured
}`;



export const PRODUCTS_BY_CATEGORY_QUERY = `*[_type == "product" && references(*[_type == "category" && slug.current == $slug]._id)] {
  _id,
  _createdAt,
  name,
  slug,
  price,
  discountPrice,
  description,
  mainImage,
  category[]->{
    _id,
    title,
    slug
  }
}`;


