/*
Folder created successfully ResponseBody
*/
export interface FolderCreatedSuccessfullyResponseBody { 
  id: string; 
  folder: { 
      id: string; 
      name: string; 
      orderindex: string; 
      override_statuses: string; 
      hidden: string; 
      space: { 
          id: string; 
          name: string; 
          access: string; 
        }; 
      task_count: string; 
      archived: string; 
      statuses: { 
            id: string; 
            status: string; 
            orderindex: string; 
            color: string; 
            type: string; 
          }[]; 
      permission_level: string; 
    }; 
}