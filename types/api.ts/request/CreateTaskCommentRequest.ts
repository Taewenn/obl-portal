/*
Create Task Comment
POST: {{baseUrl}}/v2/task/:task_id/comment?custom_task_ids=<boolean>&team_id=<number>
*/
export interface CreateTaskComment { 
  comment_text: string; 
  notify_all: string; 
  assignee: string; 
  group_assignee: string; 
}