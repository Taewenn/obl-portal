/*
Create Checklist Item
POST: {{baseUrl}}/v2/checklist/:checklist_id/checklist_item
*/
export interface CreateChecklistItem { 
  name: string; 
  assignee: string; 
}