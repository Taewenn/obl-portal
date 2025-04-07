/*
Remove tags from time entries
DELETE: {{baseUrl}}/v2/team/:team_id/time_entries/tags
*/
export interface RemoveTagsFromTimeEntries { 
  time_entry_ids: string[]; 
  tags: { 
        name: string; 
      }[]; 
}