/*
Create Webhook
POST: {{baseUrl}}/v2/team/:team_id/webhook
*/
export interface CreateWebhook { 
  endpoint: string; 
  events: string[]; 
  space_id: string; 
  folder_id: string; 
  list_id: string; 
  task_id: string; 
}