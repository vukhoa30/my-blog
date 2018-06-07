import { Root } from './root'
import { PostService } from '../services'
import { Posts } from '../tables'
import { Post } from '../models'

(async () => {
  const a = await PostService.createPost({title: "Dummy", content: "Just for testing", summary: "Nothing interesting", category_id: 1})
  console.log(a)
  const b = await PostService.getPosts();
  console.log(b)
})()

export default {
  Query: {
    posts: () => PostService.getPosts()
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