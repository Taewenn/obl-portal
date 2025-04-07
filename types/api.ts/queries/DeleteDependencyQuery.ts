/*
Delete Dependency
DELETE: {{baseUrl}}/v2/task/:task_id/dependency?depends_on=<string>&dependency_of=<string>&custom_task_ids=<boolean>&team_id=<number>
*/
export interface DeleteDependency { 
  depends_on: string; 
  dependency_of: string; 
  custom_task_ids: string; 
  team_id: string; 
}