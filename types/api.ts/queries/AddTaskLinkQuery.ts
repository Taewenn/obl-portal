/*
Add Task Link
POST: {{baseUrl}}/v2/task/:task_id/link/:links_to?custom_task_ids=<boolean>&team_id=<number>
*/
export interface AddTaskLink { 
  custom_task_ids: string; 
  team_id: string; 
}