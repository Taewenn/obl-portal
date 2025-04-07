/*
Get Custom Roles
GET: {{baseUrl}}/v2/team/:team_id/customroles?include_members=<boolean>
*/
export interface GetCustomRoles { 
  include_members: string; 
}