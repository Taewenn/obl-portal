/*
Edit time tracked
PUT: {{baseUrl}}/v2/task/:task_id/time/:interval_id?custom_task_ids=<boolean>&team_id=<number>
*/
export interface EditTimeTracked { 
  start: string; 
  end: string; 
  time: string; 
}