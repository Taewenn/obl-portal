/*
Add Dependency
POST: {{baseUrl}}/v2/task/:task_id/dependency?custom_task_ids=<boolean>&team_id=<number>
*/
export interface AddDependency { 
  depends_on: string; 
  depedency_of: string; 
}