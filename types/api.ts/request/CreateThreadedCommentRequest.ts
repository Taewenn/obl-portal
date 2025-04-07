/*
Create Threaded Comment
POST: {{baseUrl}}/v2/comment/:comment_id/reply
*/
export interface CreateThreadedComment { 
  comment_text: string; 
  notify_all: string; 
  assignee: string; 
  group_assignee: string; 
}