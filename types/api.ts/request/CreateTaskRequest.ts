/*
Create Task
POST: {{baseUrl}}/v2/list/970400017757/task?custom_task_ids=<boolean>&team_id=<number>
*/
export interface CreateTask { 
  name: string; 
  description: string; 
}