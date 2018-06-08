import { dbConfig } from '../config'
import k from 'knex'

export const knex = k(dbConfig)

// exports = module.exports = {
//   get Posts()  { return db('posts') } 
// }

export const Posts = knex('posts')
export const Categories = knex('categories')
export const Comments = knex('Comments')
export const Users = knex('users')
export const Feedbacks = knex('feedbacks')
export const Events = knex('events')