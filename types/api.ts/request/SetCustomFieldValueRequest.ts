/*
Set Custom Field Value
POST: {{baseUrl}}/v2/task/:task_id/field/:field_id?custom_task_ids=<boolean>&team_id=<number>
*/
export interface SetCustomFieldValue { 
  value: string; 
}