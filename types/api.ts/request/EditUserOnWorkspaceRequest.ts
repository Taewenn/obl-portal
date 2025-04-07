/*
Edit User On Workspace
PUT: {{baseUrl}}/v2/team/:team_id/user/:user_id
*/
export interface EditUserOnWorkspace { 
  username: string; 
  admin: string; 
  custom_role_id: string; 
}