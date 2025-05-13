import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Ecomerce')
    .items([
      S.documentTypeListItem("product").title("Products"),
      S.documentTypeListItem("category").title("Category"),
      S.documentTypeListItem("user").title("user"),
    ]);
