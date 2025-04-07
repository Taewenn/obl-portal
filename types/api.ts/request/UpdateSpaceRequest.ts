/*
Update Space
PUT: {{baseUrl}}/v2/space/:space_id
*/
export interface UpdateSpace { 
  name: string; 
  color: string; 
  private: string; 
  admin_can_manage: string; 
  multiple_assignees: string; 
  features: { 
      due_dates: { 
          enabled: string; 
          start_date: string; 
          remap_due_dates: string; 
          remap_closed_due_date: string; 
        }; 
      time_tracking: { 
          enabled: string; 
        }; 
      tags: { 
          enabled: string; 
        }; 
      time_estimates: { 
          enabled: string; 
        }; 
      checklists: { 
          enabled: string; 
        }; 
      custom_fields: { 
          enabled: string; 
        }; 
      remap_dependencies: { 
          enabled: string; 
        }; 
      dependency_warning: { 
          enabled: string; 
        }; 
      portfolios: { 
          enabled: string; 
        }; 
    }; 
}