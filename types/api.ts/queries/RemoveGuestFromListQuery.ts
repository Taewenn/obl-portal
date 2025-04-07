/*
Remove Guest From List
DELETE: {{baseUrl}}/v2/list/:list_id/guest/:guest_id?include_shared=<boolean>
*/
export interface RemoveGuestFromList { 
  include_shared: string; 
}