/*
Remove Tag From Task
DELETE: {{baseUrl}}/v2/task/:task_id/tag/:tag_name?custom_task_ids=<boolean>&team_id=<number>
*/
export interface RemoveTagFromTask { 
  custom_task_ids: string; 
  team_id: string; 
}