/*
Get Chat View Comments
GET: {{baseUrl}}/v2/view/:view_id/comment?start=<integer>&start_id=<string>
*/
export interface GetChatViewComments { 
  start: string; 
  start_id: string; 
}