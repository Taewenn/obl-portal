/*
Get Folders
GET: {{baseUrl}}/v2/space/:space_id/folder?archived=<boolean>
*/
export interface GetFolders { 
  archived: string; 
}