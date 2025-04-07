/*
Page created ResponseBody
*/
export interface PageCreatedResponseBody { 
  id: string; 
  doc_id: string; 
  workspace_id: string; 
  name: string; 
  date_created: string; 
  content: string; 
  creator_id: string; 
  authors: string[]; 
  parent_page_id: string; 
  pages: string; 
  sub_title: string; 
  date_updated: string; 
  avatar: { 
      color: string; 
      value: string; 
      source: string; 
    }; 
  deleted: string; 
  deleted_by: string; 
  date_deleted: string; 
  date_edited: string; 
  edited_by: string; 
  archived: string; 
  archived_by: string; 
  date_archived: string; 
  contributors: string[]; 
  cover: { 
      color: string; 
      image_url: string; 
      position: { 
          x: string; 
          y: string; 
        }; 
    }; 
  protected: string; 
  protected_by: string; 
  protected_note: string; 
  presentation_details: { 
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