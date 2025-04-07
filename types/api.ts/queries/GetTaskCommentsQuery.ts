/*
Get Task Comments
GET: {{baseUrl}}/v2/task/:task_id/comment?custom_task_ids=<boolean>&team_id=<number>&start=<integer>&start_id=<string>
*/
export interface GetTaskComments { 
  custom_task_ids: string; 
  team_id: string; 
  start: string; 
  start_id: string; 
}