/*
Get Filtered Team Tasks
GET: {{baseUrl}}/v2/team/:team_Id/task?page=<integer>&order_by=<string>&reverse=<boolean>&subtasks=<boolean>&space_ids=<string>&space_ids=<string>&project_ids=<string>&project_ids=<string>&list_ids[]=<string>&list_ids[]=<string>&statuses=<string>&statuses=<string>&include_closed=<boolean>&assignees=<string>&assignees=<string>&tags=<string>&tags=<string>&due_date_gt=<integer>&due_date_lt=<integer>&date_created_gt=<integer>&date_created_lt=<integer>&date_updated_gt=<integer>&date_updated_lt=<integer>&date_done_gt=<integer>&date_done_lt=<integer>&custom_fields=<string>&custom_fields=<string>&custom_task_ids=<boolean>&team_id=<number>&parent=<string>&include_markdown_description=<boolean>&custom_items=<number>&custom_items=<number>
*/
export interface GetFilteredTeamTasks { 
  page: string; 
  order_by: string; 
  reverse: string; 
  subtasks: string; 
  space_ids: string; 
  project_ids: string; 
  "list_ids[]": string; 
  statuses: string; 
  include_closed: string; 
  assignees: string; 
  tags: string; 
  due_date_gt: string; 
  due_date_lt: string; 
  date_created_gt: string; 
  date_created_lt: string; 
  date_updated_gt: string; 
  date_updated_lt: string; 
  date_done_gt: string; 
  date_done_lt: string; 
  custom_fields: string; 
  custom_task_ids: string; 
  team_id: string; 
  parent: string; 
  include_markdown_description: string; 
  custom_items: string; 
}