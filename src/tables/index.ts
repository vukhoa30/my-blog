import { dbConfig } from '../config'
import knex from 'knex'

const db = knex(dbConfig)

export const Posts = db('posts')
export const Categories = db('categories')
export const Users = db('users')
export const Feedbacks = db('feedbacks')
export const Events = db('events')