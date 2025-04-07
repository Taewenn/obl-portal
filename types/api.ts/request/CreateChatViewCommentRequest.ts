/*
Create Chat View Comment
POST: {{baseUrl}}/v2/view/:view_id/comment
*/
export interface CreateChatViewComment { 
  comment_text: string; 
  notify_all: string; 
}