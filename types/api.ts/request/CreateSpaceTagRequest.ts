/*
Create Space Tag
POST: {{baseUrl}}/v2/space/:space_id/tag
*/
export interface CreateSpaceTag { 
  tag: { 
      name: string; 
      tag_fg: string; 
      tag_bg: string; 
    }; 
}