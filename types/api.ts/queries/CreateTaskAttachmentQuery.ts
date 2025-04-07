/*
Create Task Attachment
POST: {{baseUrl}}/v2/task/:task_id/attachment?custom_task_ids=<boolean>&team_id=<number>
*/
export interface CreateTaskAttachment { 
  custom_task_ids: string; 
  team_id: string; 
}