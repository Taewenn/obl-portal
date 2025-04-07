/*
Update privacy and access of an object or location
PATCH: {{baseUrl}}/v3/workspaces/:workspace_id/:object_type/:object_id/acls
*/
export interface UpdatePrivacyAndAccessOfAnObjectOrLocation { 
  entries: { 
        id: string; 
        kind: string; 
        permission_level: string; 
      }[]; 
  private: string; 
}