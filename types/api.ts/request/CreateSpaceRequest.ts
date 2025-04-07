/*
Create Space
POST: {{baseUrl}}/v2/team/:team_id/space
*/
export interface CreateSpace { 
  name: string; 
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