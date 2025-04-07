/*
Create Folderless List
POST: {{baseUrl}}/v2/space/:space_id/list
*/
export interface CreateFolderlessList { 
  name: string; 
  content: string; 
  due_date: string; 
  due_date_time: string; 
  priority: string; 
  assignee: string; 
  status: string; 
}