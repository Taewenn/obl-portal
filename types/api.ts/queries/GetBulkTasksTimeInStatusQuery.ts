/*
Get Bulk Tasks' Time in Status
GET: {{baseUrl}}/v2/task/bulk_time_in_status/task_ids?task_ids=<string>&custom_task_ids=<boolean>&team_id=<number>
*/
export interface GetBulkTasksTimeInStatus { 
  task_ids: string; 
  custom_task_ids: string; 
  team_id: string; 
}