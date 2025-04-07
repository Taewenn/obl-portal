/*
Create Group
POST: {{baseUrl}}/v2/team/:team_id/group
*/
export interface CreateGroup { 
  name: string; 
  members: string[]; 
  handle: string; 
}