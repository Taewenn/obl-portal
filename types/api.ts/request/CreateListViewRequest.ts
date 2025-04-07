/*
Create List View
POST: {{baseUrl}}/v2/list/:list_id/view
*/
export interface CreateListView { 
  name: string; 
  type: string; 
  grouping: { 
      field: string; 
      dir: string; 
      collapsed: string[]; 
      ignore: string; 
    }; 
  divide: { 
      collapsed: string; 
      field: string; 
      dir: string; 
    }; 
  sorting: { 
      fields: string[]; 
    }; 
  filters: { 
      op: string; 
      fields: string[]; 
      search: string; 
      show_closed: string; 
    }; 
  columns: { 
      fields: string[]; 
    }; 
  team_sidebar: { 
      assignees: string[]; 
      assigned_comments: string; 
      unassigned_tasks: string; 
    }; 
  settings: { 
      show_task_locations: string; 
      show_subtasks: string; 
      show_subtask_parent_names: string; 
      show_closed_subtasks: string; 
      show_assignees: string; 
      show_images: string; 
      collapse_empty_columns: string; 
      me_comments: string; 
      me_subtasks: string; 
      me_checklists: string; 
    }; 
}