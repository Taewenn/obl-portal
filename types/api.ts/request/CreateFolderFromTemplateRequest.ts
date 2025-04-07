/*
Create Folder from template
POST: {{baseUrl}}/v2/space/:space_id/folder_template/:template_id
*/
export interface CreateFolderFromTemplate { 
  name: string; 
  options: { 
      return_immediately: string; 
      content: string; 
      time_estimate: string; 
      automation: string; 
      include_views: string; 
      old_due_date: string; 
      old_start_date: string; 
      old_followers: string; 
      comment_attachments: string; 
      recur_settings: string; 
      old_tags: string; 
      old_statuses: string; 
      subtasks: string; 
      custom_type: string; 
      old_assignees: string; 
      attachments: string; 
      comment: string; 
      old_status: string; 
      external_dependencies: string; 
      internal_dependencies: string; 
      priority: string; 
      custom_fields: string; 
      old_checklists: string; 
      relationships: string; 
      old_subtask_assignees: string; 
      start_date: string; 
      due_date: string; 
      remap_start_date: string; 
      skip_weekends: string; 
      archived: number; 
    }; 
}