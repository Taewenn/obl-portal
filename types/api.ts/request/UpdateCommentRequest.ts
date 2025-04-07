/*
Update Comment
PUT: {{baseUrl}}/v2/comment/:comment_id
*/
export interface UpdateComment { 
  comment_text: string; 
  assignee: string; 
  resolved: string; 
  group_assignee: string; 
}