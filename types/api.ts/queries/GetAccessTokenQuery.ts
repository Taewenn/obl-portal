/*
Get Access Token
POST: {{baseUrl}}/v2/oauth/token?client_id=<string>&client_secret=<string>&code=<string>
*/
export interface GetAccessToken { 
  client_id: string; 
  client_secret: string; 
  code: string; 
}