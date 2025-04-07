/*
Get singular time entry
GET: {{baseUrl}}/v2/team/:team_id/time_entries/:timer_id?include_task_tags=<boolean>&include_location_names=<boolean>
*/
export interface GetSingularTimeEntry { 
  include_task_tags: string; 
  include_location_names: string; 
}