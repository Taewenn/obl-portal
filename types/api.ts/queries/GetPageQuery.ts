/*
Get page
GET: {{baseUrl}}/v3/workspaces/:workspaceId/docs/:docId/pages/:pageId?content_format=text/md
*/
export interface GetPage { 
  content_format: string; 
}