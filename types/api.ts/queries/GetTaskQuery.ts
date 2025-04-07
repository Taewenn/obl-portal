/*
Get Task
GET: {{baseUrl}}/v2/task/:86cy5kpxp?custom_task_ids=<boolean>&team_id=<number>&include_subtasks=<boolean>&include_markdown_description=<boolean>&custom_fields=<string>&custom_fields=<string>
*/
export interface GetTask { 
  custom_task_ids: string; 
  team_id: string; 
  include_subtasks: string; 
  include_markdown_description: string; 
  custom_fields: string; 
}