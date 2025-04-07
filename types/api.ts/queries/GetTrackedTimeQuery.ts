/*
Get tracked time
GET: {{baseUrl}}/v2/task/:task_id/time?custom_task_ids=<boolean>&team_id=<number>
*/
export interface GetTrackedTime { 
  custom_task_ids: string; 
  team_id: string; 
}