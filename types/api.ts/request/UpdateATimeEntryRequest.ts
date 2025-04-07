/*
Update a time Entry
PUT: {{baseUrl}}/v2/team/:team_id/time_entries/:timer_id?custom_task_ids=<boolean>&team_id=<number>
*/
export interface UpdateATimeEntry { 
  tags: { 
        name: string; 
        tag_fg: string; 
        tag_bg: string; 
      }[]; 
  tid: string; 
  description: string; 
  tag_action: string; 
  start: string; 
  end: string; 
  billable: string; 
  duration: string; 
}