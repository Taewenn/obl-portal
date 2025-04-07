/*
PageListing found ResponseBody
*/
export interface PageListingFoundResponseBody { 
  id: string; 
  doc_id: string; 
  workspace_id: string; 
  name: string; 
  parent_page_id: string; 
  pages: { 
        id: string; 
        doc_id: string; 
        name: string; 
        pages: string; 
      }[]; 
}