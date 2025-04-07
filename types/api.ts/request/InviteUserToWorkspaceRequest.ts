/*
Invite User To Workspace
POST: {{baseUrl}}/v2/team/:team_id/user
*/
export interface InviteUserToWorkspace { 
  email: string; 
  admin: string; 
  custom_role_id: string; 
}