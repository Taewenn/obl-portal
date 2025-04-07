/*
Create Checklist
POST: {{baseUrl}}/v2/task/:task_id/checklist?custom_task_ids=<boolean>&team_id=<number>
*/
export interface CreateChecklist { 
  name: string; 
}