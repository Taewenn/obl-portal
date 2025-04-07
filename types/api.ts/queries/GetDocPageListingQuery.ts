/*
Get Doc PageListing
GET: {{baseUrl}}/v3/workspaces/:workspaceId/docs/:docId/pageListing?max_page_depth=-1
*/
export interface GetDocPageListing { 
  max_page_depth: string; 
}