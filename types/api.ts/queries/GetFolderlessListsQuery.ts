/*
Get Folderless Lists
GET: {{baseUrl}}/v2/space/:space_id/list?archived=<boolean>
*/
export interface GetFolderlessLists { 
  archived: string; 
}