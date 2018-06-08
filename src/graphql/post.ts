import { Root } from './root'
import { PostService } from '../services'
//import { Posts } from '../tables'
import { Post } from '../models'
/*
(async () => {
  const a = await PostService.createPost({title: "Dummy", content: "Just for testing", summary: "Nothing interesting", category_id: 1})
  console.log(a)
})()
*/
export default {
  Query: {
    posts: (root: Root, param: 
      { offset: number, limit: number }) => 
      PostService.getPosts(param),
    post: (root: Root, param: 
      { id: number, offset: number, limit: number }) => 
      PostService.getPost(param),
    postsByCategory: (root: Root, param: 
      { category_id: number, offset: number, limit: number }) =>
      PostService.getPostsByCategory(param),
    postsByTitle: (root: Root, param: 
      { title: string, offset: number, limit: number }) => 
      PostService.getPostsByTitle(param)
  },
  Mutation: {
    createPost: (
      root: Root, 
      param: { 
        title: string, 
        content: string, 
        summary: string, 
        category_id: number
      }
    ) => PostService.createPost(param),
    removePost: (root: Root, param: { id: number }) => PostService.removePost(param.id)
  }
}