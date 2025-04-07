/*
Edit Checklist Item
PUT: {{baseUrl}}/v2/checklist/:checklist_id/checklist_item/:checklist_item_id
*/
export interface EditChecklistItem { 
  name: string; 
  assignee: string; 
  resolved: string; 
  parent: string; 
}