/*
Add Guest To Task
POST: {{baseUrl}}/v2/task/:task_id/guest/:guest_id?include_shared=<boolean>&custom_task_ids=<boolean>&team_id=<number>
*/
export interface AddGuestToTask { 
  permission_level: string; 
}