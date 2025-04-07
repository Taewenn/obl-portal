/*
Delete Space Tag
DELETE: {{baseUrl}}/v2/space/:space_id/tag/:tag_name
*/
export interface DeleteSpaceTag { 
  tag: { 
      name: string; 
      tag_fg: string; 
      tag_bg: string; 
    }; 
}