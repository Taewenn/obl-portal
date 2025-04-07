/*
Search results ResponseBody
*/
export interface SearchResultsResponseBody { 
  docs: { 
        id: string; 
        date_created: string; 
        name: string; 
        type: null; 
        parent: { 
            id: string; 
            type: string; 
          }; 
        public: string; 
        workspace_id: string; 
        creator: string; 
        deleted: string; 
        archived: string; 
        date_updated: string; 
        date_deleted: string; 
        deleted_by: string; 
        archived_by: string; 
        date_archived: string; 
      }[]; 
  next_cursor: string; 
}