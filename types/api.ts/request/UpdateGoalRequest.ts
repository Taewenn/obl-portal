/*
Update Goal
PUT: {{baseUrl}}/v2/goal/:goal_id
*/
export interface UpdateGoal { 
  name: string; 
  due_date: string; 
  description: string; 
  rem_owners: string[]; 
  add_owners: string[]; 
  color: string; 
}