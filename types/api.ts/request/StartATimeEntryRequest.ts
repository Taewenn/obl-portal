/*
Start a time Entry
POST: {{baseUrl}}/v2/team/:team_Id/time_entries/start?custom_task_ids=<boolean>&team_id=<number>
*/
export interface StartATimeEntry { 
  description: string; 
  tags: { 
        name: string; 
      }[]; 
  tid: string; 
  billable: string; 
}