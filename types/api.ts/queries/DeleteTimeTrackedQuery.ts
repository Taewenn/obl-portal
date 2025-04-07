/*
Delete time tracked
DELETE: {{baseUrl}}/v2/task/:task_id/time/:interval_id?custom_task_ids=<boolean>&team_id=<number>
*/
export interface DeleteTimeTracked { 
  custom_task_ids: string; 
  team_id: string; 
}