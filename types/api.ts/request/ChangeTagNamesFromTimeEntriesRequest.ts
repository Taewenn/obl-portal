/*
Change tag names from time entries
PUT: {{baseUrl}}/v2/team/:team_id/time_entries/tags
*/
export interface ChangeTagNamesFromTimeEntries { 
  name: string; 
  new_name: string; 
  tag_bg: string; 
  tag_fg: string; 
}