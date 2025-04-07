/*
Track time
POST: {{baseUrl}}/v2/task/:task_id/time?custom_task_ids=<boolean>&team_id=<number>
*/
export interface TrackTime { 
  custom_task_ids: string; 
  team_id: string; 
}