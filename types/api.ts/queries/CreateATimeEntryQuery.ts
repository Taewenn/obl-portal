/*
Create a time entry
POST: {{baseUrl}}/v2/team/:team_Id/time_entries?custom_task_ids=<boolean>&team_id=<number>
*/
export interface CreateATimeEntry { 
  custom_task_ids: string; 
  team_id: string; 
}