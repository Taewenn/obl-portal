/*
Create List
POST: {{baseUrl}}/v2/folder/:folder_id/list
*/
export interface CreateList { 
  name: string; 
  content: string; 
  due_date: string; 
  due_date_time: string; 
  priority: string; 
  assignee: string; 
  status: string; 
  include_markdown_description: string; 
}