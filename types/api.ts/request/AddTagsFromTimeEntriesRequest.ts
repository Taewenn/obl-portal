/*
Add tags from time entries
POST: {{baseUrl}}/v2/team/:team_id/time_entries/tags
*/
export interface AddTagsFromTimeEntries { 
  time_entry_ids: string[]; 
  tags: { 
        name: string; 
        tag_fg: string; 
        tag_bg: string; 
      }[]; 
}