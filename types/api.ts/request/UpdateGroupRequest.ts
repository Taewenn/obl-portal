/*
Update Group
PUT: {{baseUrl}}/v2/group/:group_id
*/
export interface UpdateGroup { 
  name: string; 
  handle: string; 
  members: { 
      add: string[]; 
      rem: string[]; 
    }; 
}