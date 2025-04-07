/*
List created successfully ResponseBody
*/
export interface ListCreatedSuccessfullyResponseBody { 
  id: string; 
  list: { 
      id: string; 
      name: string; 
      deleted: string; 
      orderindex: string; 
      priority: string; 
      assignee: string; 
      due_date: string; 
      start_date: string; 
      folder: { 
          id: string; 
          name: string; 
          hidden: string; 
          access: string; 
        }; 
      space: { 
          id: string; 
          name: string; 
          access: string; 
        }; 
      inbound_address: string; 
      archived: string; 
      override_statuses: string; 
      statuses: { 
            id: string; 
            status: string; 
            orderindex: string; 
            color: string; 
            type: string; 
            status_group: string; 
          }[]; 
      permission_level: string; 
    }; 
}