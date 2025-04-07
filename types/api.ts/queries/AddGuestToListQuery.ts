/*
Add Guest To List
POST: {{baseUrl}}/v2/list/:list_id/guest/:guest_id?include_shared=<boolean>
*/
export interface AddGuestToList { 
  include_shared: string; 
}