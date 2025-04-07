/*
Create Task From Template
POST: {{baseUrl}}/v2/list/:list_id/taskTemplate/:template_id
*/
export interface CreateTaskFromTemplate { 
  name: string; 
}