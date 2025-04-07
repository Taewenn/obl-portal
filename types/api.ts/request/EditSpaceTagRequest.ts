/*
Edit Space Tag
PUT: {{baseUrl}}/v2/space/:space_id/tag/:tag_name
*/
export interface EditSpaceTag { 
  tag: { 
      name: string; 
      fg_color: string; 
      bg_color: string; 
    }; 
}