/*
Create a time entry
POST: {{baseUrl}}/v2/team/:team_Id/time_entries?custom_task_ids=<boolean>&team_id=<number>
*/
export interface CreateATimeEntry { 
  start: string; 
  duration: string; 
  description: string; 
  tags: { 
        name: string; 
        tag_fg: string; 
        tag_bg: string; 
      }[]; 
  stop: string; 
  end: string; 
  billable: string; 
  assignee: string; 
  tid: string; 
}