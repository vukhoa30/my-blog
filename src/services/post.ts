import { Posts } from '../tables'
import { Post } from '../models'

export async function getPosts(): Promise<Post[]> {
  return Posts
}

export async function createPost(post: Partial<Post>): Promise<Post> {
  return Posts.insert(post).returning('*')
}

export async function removePost(id: number) {
  let post = await Posts.where({ id }).del()
  if (post) {
    return true
  }
  return false
}