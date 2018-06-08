import { adminKey } from '../config'
import { User } from '../models'
import { Users } from '../tables'

export async function createUser(user: Partial<User>): Promise<User> {
  return Users.insert(user).returning('*').then(rslt => rslt[0])
}

export async function getUser(id: number): Promise<User> {
  return Users.where({ id }).then(rslt => rslt[0])
}