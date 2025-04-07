/*
Get running time entry
GET: {{baseUrl}}/v2/team/:team_id/time_entries/current?assignee=<number>
*/
export interface GetRunningTimeEntry { 
  assignee: string; 
}