/*
Create page
POST: {{baseUrl}}/v3/workspaces/:workspaceId/docs/:docId/pages
*/
export interface CreatePage { 
  parent_page_id: null; 
  name: string; 
  sub_title: null; 
  content: string; 
  content_format: string; 
}