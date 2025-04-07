/*
Doc created ResponseBody
*/
export interface DocCreatedResponseBody { 
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
  date_updated: string; 
  archived: string; 
  archived_by: string; 
  date_archived: string; 
  date_deleted: string; 
  deleted: string; 
  deleted_by: string; 
  page_defaults: { 
      font: string; 
      font_size: string; 
      line_height: string; 
      page_width: string; 
      paragraph_spacing: string; 
      show_author_header: string; 
      show_contributor_header: string; 
      show_cover_header: string; 
      show_date_header: string; 
      show_page_outline: string; 
      show_sub_pages: string; 
      sub_page_size: string; 
      show_sub_title_header: string; 
      show_title_icon_header: string; 
      show_relationships: string; 
      show_relationships_compact: string; 
      show_sub_pages_author: string; 
      show_sub_pages_thumbnail: string; 
      show_sub_pages_compact: string; 
      sub_pages_style: string; 
    }; 
}