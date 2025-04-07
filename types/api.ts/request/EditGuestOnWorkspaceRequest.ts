/*
Edit Guest On Workspace
PUT: {{baseUrl}}/v2/team/:team_id/guest/:guest_id
*/
export interface EditGuestOnWorkspace { 
  username: string; 
  can_edit_tags: string; 
  can_see_time_spent: string; 
  can_see_time_estimated: string; 
  can_create_views: string; 
  custom_role_id: string; 
}