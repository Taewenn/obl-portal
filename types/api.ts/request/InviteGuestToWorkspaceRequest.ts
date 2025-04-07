/*
Invite Guest To Workspace
POST: {{baseUrl}}/v2/team/:team_id/guest
*/
export interface InviteGuestToWorkspace { 
  email: string; 
  can_edit_tags: string; 
  can_see_time_spent: string; 
  can_see_time_estimated: string; 
  can_create_views: string; 
  custom_role_id: string; 
}