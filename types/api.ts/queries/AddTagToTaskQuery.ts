/*
Add Tag To Task
POST: {{baseUrl}}/v2/task/:task_id/tag/:tag_name?custom_task_ids=<boolean>&team_id=<number>
*/
export interface AddTagToTask { 
  custom_task_ids: string; 
  team_id: string; 
}