/*
Get Goals
GET: {{baseUrl}}/v2/team/:team_id/goal?include_completed=<boolean>
*/
export interface GetGoals { 
  include_completed: string; 
}