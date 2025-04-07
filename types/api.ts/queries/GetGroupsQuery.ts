/*
Get Groups
GET: {{baseUrl}}/v2/group?team_id=<number>&group_ids=<string>
*/
export interface GetGroups { 
  team_id: string; 
  group_ids: string; 
}