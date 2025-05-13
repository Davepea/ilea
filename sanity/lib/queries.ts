import { defineQuery } from "next-sanity";


export const USER_BY_GOOGLE_ID_QUERY = defineQuery(`*[_type == "author" && _id == $id][0]{
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
    }`)