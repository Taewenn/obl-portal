/*
Update Webhook
PUT: {{baseUrl}}/v2/webhook/:webhook_id
*/
export interface UpdateWebhook { 
  endpoint: string; 
  events: string; 
  status: string; 
}