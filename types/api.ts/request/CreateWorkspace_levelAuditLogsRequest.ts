/*
Create Workspace-level audit logs
POST: {{baseUrl}}/v3/workspaces/:workspace_id/auditlogs
*/
export interface CreateWorkspace_levelAuditLogs { 
  applicability: string; 
  filter: { 
      workspaceId: string; 
      userId: string[]; 
      userEmail: string[]; 
      eventType: string[]; 
      eventStatus: string; 
      startTime: string; 
      endTime: string; 
    }; 
  pagination: { 
      pageRows: string; 
      pageTimestamp: string; 
      pageDirection: string; 
    }; 
}