/*
Edit page
PUT: {{baseUrl}}/v3/workspaces/:workspaceId/docs/:docId/pages/:pageId
*/
export interface EditPage { 
  name: string; 
  sub_title: string; 
  content: string; 
  content_edit_mode: string; 
  content_format: string; 
}