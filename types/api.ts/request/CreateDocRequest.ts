/*
Create Doc
POST: {{baseUrl}}/v3/workspaces/:workspaceId/docs
*/
export interface CreateDoc { 
  name: string; 
  parent: { 
      id: string; 
      type: string; 
    }; 
  visibility: string; 
  create_page: boolean; 
}