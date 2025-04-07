/*
Get Doc pages
GET: {{baseUrl}}/v3/workspaces/:workspaceId/docs/:docId/pages?max_page_depth=-1&content_format=text/md
*/
export interface GetDocPages { 
  max_page_depth: string; 
  content_format: string; 
}