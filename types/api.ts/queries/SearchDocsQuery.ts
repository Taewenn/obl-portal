/*
Search Docs
GET: {{baseUrl}}/v3/workspaces/:workspaceId/docs?id=<string>&creator=<number>&deleted=false&archived=false&parent_id=<string>&parent_type=<string>&limit=50&next_cursor=<string>
*/
export interface SearchDocs { 
  id: string; 
  creator: string; 
  deleted: string; 
  archived: string; 
  parent_id: string; 
  parent_type: string; 
  limit: string; 
  next_cursor: string; 
}