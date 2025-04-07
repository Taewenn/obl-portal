/*
Get Lists
GET: {{baseUrl}}/v2/folder/:folder_id/list?archived=<boolean>
*/
export interface GetLists { 
  archived: string; 
}