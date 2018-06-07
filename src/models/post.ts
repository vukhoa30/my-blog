export interface Post {
  id?: number,
  category?: string,
  category_id?: number,
  title: string,
  summary?: string,
  content: string,
  created_at?: string,
  last_modified_at?: string
}