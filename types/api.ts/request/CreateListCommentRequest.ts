/*
Create List Comment
POST: {{baseUrl}}/v2/list/:list_id/comment
*/
export interface CreateListComment { 
  comment_text: string; 
  assignee: string; 
  notify_all: string; 
}