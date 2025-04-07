/*
Delete Task
DELETE: {{baseUrl}}/v2/task/:task_id?custom_task_ids=<boolean>&team_id=<number>
*/
export interface DeleteTask { 
  custom_task_ids: string; 
  team_id: string; 
}