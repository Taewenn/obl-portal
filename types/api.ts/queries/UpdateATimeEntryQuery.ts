/*
Update a time Entry
PUT: {{baseUrl}}/v2/team/:team_id/time_entries/:timer_id?custom_task_ids=<boolean>&team_id=<number>
*/
export interface UpdateATimeEntry { 
  custom_task_ids: string; 
  team_id: string; 
}