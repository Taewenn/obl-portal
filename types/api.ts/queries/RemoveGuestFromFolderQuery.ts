/*
Remove Guest From Folder
DELETE: {{baseUrl}}/v2/folder/:folder_id/guest/:guest_id?include_shared=<boolean>
*/
export interface RemoveGuestFromFolder { 
  include_shared: string; 
}