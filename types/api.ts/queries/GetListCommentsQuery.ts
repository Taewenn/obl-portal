/*
Get List Comments
GET: {{baseUrl}}/v2/list/:list_id/comment?start=<integer>&start_id=<string>
*/
export interface GetListComments { 
  start: string; 
  start_id: string; 
}