import { Posts, Categories } from '../tables'
import { Post } from '../models'
import { knex } from '../tables'

export async function getPosts({ offset, limit }: 
{offset?: number, limit?: number}): Promise<Post[]> {
  return knex('posts')
  .limit(limit || 10)
  .offset(offset || 0)
}
export async function getPost({ id, offset, limit }: 
{ id: number, offset?: number, limit?: number}): Promise<Post> {
  return knex('posts')
  .where({ id })
  .limit(limit || 10)
  .offset(offset || 0)
  .then(rslt => rslt[0])
}
export async function getPostsByCategory({ category_id, offset, limit}: 
{ category_id: number, offset?: number, limit?: number}): Promise<Post[]> {
  return knex('posts')
  .where({ category_id })
  .limit(limit || 10)
  .offset(offset || 0)
}
export async function getPostsByTitle({ title, offset, limit}: 
{ title: string, offset?: number, limit?: number}): Promise<Post[]> {
  return knex('posts')
  .where('title', 'like', `%${title}%`)
  .limit(limit || 10)
  .offset(offset || 0)
}

export async function createPost(post: Partial<Post>): Promise<Post> {
  return Posts.insert(post).returning('*').then(rslt => {
    return Categories.where({ id: rslt[0].category_id })
    .then(cat => {
      rslt[0].category = cat[0].name
      return rslt[0]
    })
  })
}

export async function removePost(id: number) {
  let post = await Posts.where({ id }).del()
  if (post) {
    return true
  }
  return false
}