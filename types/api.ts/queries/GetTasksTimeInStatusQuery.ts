/*
Get Task's Time in Status
GET: {{baseUrl}}/v2/task/:task_id/time_in_status?custom_task_ids=<boolean>&team_id=<number>
*/
export interface GetTasksTimeInStatus { 
  custom_task_ids: string; 
  team_id: string; 
}