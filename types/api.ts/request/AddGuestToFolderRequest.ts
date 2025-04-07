/*
Add Guest To Folder
POST: {{baseUrl}}/v2/folder/:folder_id/guest/:guest_id?include_shared=<boolean>
*/
export interface AddGuestToFolder { 
  permission_level: string; 
}