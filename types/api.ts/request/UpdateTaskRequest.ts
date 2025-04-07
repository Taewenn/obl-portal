/*
Update Task
PUT: {{baseUrl}}/v2/task/:task_id?custom_task_ids=<boolean>&team_id=<number>
*/
export interface UpdateTask { 
  custom_item_id: string; 
  name: string; 
  description: string; 
  markdown_content: string; 
  status: string; 
  priority: string; 
  due_date: string; 
  due_date_time: string; 
  parent: string; 
  time_estimate: string; 
  start_date: string; 
  start_date_time: string; 
  points: string; 
  assignees: { 
      add: string[]; 
      rem: string[]; 
    }; 
  group_assignees: { 
      add: string[]; 
      rem: string[]; 
    }; 
  watchers: { 
      add: string[]; 
      rem: string[]; 
    }; 
  archived: string; 
}