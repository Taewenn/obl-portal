/*
Create Key Result
POST: {{baseUrl}}/v2/goal/:goal_id/key_result
*/
export interface CreateKeyResult { 
  name: string; 
  owners: string[]; 
  type: string; 
  steps_start: string; 
  steps_end: string; 
  unit: string; 
  task_ids: string[]; 
  list_ids: string[]; 
}