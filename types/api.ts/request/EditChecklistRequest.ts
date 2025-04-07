/*
Edit Checklist
PUT: {{baseUrl}}/v2/checklist/:checklist_id
*/
export interface EditChecklist { 
  name: string; 
  position: string; 
}