/*
Create Task Comment
POST: {{baseUrl}}/v2/task/:task_id/comment?custom_task_ids=<boolean>&team_id=<number>
*/
export interface CreateTaskComment { 
  custom_task_ids: string; 
  team_id: string; 
}