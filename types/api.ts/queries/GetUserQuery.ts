/*
Get User
GET: {{baseUrl}}/v2/team/:team_id/user/:user_id?include_shared=<boolean>
*/
export interface GetUser { 
  include_shared: string; 
}