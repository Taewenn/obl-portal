/*
Remove Custom Field Value
DELETE: {{baseUrl}}/v2/task/:task_id/field/:field_id?custom_task_ids=<boolean>&team_id=<number>
*/
export interface RemoveCustomFieldValue { 
  custom_task_ids: string; 
  team_id: string; 
}