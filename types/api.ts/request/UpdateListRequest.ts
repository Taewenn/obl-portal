/*
Update List
PUT: {{baseUrl}}/v2/list/:list_id
*/
export interface UpdateList { 
  name: string; 
  content: string; 
  due_date: string; 
  due_date_time: string; 
  priority: string; 
  assignee: string; 
  status: string; 
  unset_status: string; 
  include_markdown_description: string; 
}