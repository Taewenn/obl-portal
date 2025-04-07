/*
Get time entries within a date range
GET: {{baseUrl}}/v2/team/:team_Id/time_entries?start_date=<number>&end_date=<number>&assignee=<number>&include_task_tags=<boolean>&include_location_names=<boolean>&space_id=<number>&folder_id=<number>&list_id=<number>&task_id=<string>&custom_task_ids=<boolean>&team_id=<number>&is_billable=<boolean>
*/
export interface GetTimeEntriesWithinADateRange { 
  start_date: string; 
  end_date: string; 
  assignee: string; 
  include_task_tags: string; 
  include_location_names: string; 
  space_id: string; 
  folder_id: string; 
  list_id: string; 
  task_id: string; 
  custom_task_ids: string; 
  team_id: string; 
  is_billable: string; 
}