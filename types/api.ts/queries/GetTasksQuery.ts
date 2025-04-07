/*
Get Tasks
GET: {{baseUrl}}/v2/list/:list_id/task?archived=<boolean>&include_markdown_description=<boolean>&page=<integer>&order_by=<string>&reverse=<boolean>&subtasks=<boolean>&statuses=<string>&statuses=<string>&include_closed=<boolean>&assignees=<string>&assignees=<string>&watchers=<string>&watchers=<string>&tags=<string>&tags=<string>&due_date_gt=<integer>&due_date_lt=<integer>&date_created_gt=<integer>&date_created_lt=<integer>&date_updated_gt=<integer>&date_updated_lt=<integer>&date_done_gt=<integer>&date_done_lt=<integer>&custom_fields=<string>&custom_fields=<string>&custom_field=<string>&custom_field=<string>&custom_items=<number>&custom_items=<number>
*/
export interface GetTasks { 
  archived: string; 
  include_markdown_description: string; 
  page: string; 
  order_by: string; 
  reverse: string; 
  subtasks: string; 
  statuses: string; 
  include_closed: string; 
  assignees: string; 
  watchers: string; 
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
  custom_field: string; 
  custom_items: string; 
}