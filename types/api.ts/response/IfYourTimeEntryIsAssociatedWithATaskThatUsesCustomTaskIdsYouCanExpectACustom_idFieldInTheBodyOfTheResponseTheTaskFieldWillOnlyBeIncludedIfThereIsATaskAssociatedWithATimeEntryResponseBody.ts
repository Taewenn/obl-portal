/*
If your time entry is associated with a task that uses custom task ids you can expect a `custom_id`` field in the body of the response. The task field will only be included if there is a task associated with a time entry. ResponseBody
*/
export interface IfYourTimeEntryIsAssociatedWithATaskThatUsesCustomTaskIdsYouCanExpectACustom_idFieldInTheBodyOfTheResponseTheTaskFieldWillOnlyBeIncludedIfThereIsATaskAssociatedWithATimeEntryResponseBody { 
  data: { 
        id: string; 
        task: { 
            id: string; 
            custom_id: string; 
            name: string; 
            status: { 
                status: string; 
                color: string; 
                orderindex: string; 
                type: string; 
              }; 
            custom_type: string; 
          }; 
        wid: string; 
        user: { 
            id: string; 
            username: string; 
            initials: string; 
            email: string; 
            color: string; 
            profilePicture: string; 
          }; 
        billable: string; 
        start: string; 
        end: string; 
        duration: string; 
        description: string; 
        tags: string[]; 
        source: string; 
        at: string; 
        task_location: { 
            list_id: string; 
            folder_id: string; 
            space_id: string; 
            list_name: string; 
            folder_name: string; 
            space_name: string; 
          }; 
        task_tags: { 
              name: string; 
              tag_fg: string; 
              tag_bg: string; 
              creator: string; 
            }[]; 
        task_url: string; 
      }[]; 
}