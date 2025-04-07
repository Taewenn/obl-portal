/*
Create Goal
POST: {{baseUrl}}/v2/team/:team_id/goal
*/
export interface CreateGoal { 
  name: string; 
  due_date: string; 
  description: string; 
  multiple_owners: string; 
  owners: string[]; 
  color: string; 
}