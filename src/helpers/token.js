import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export const generateId = () => Math.random().toString(32).substring(2) + Date.now().toString(32)

export const tokenJWT = ({ id, username }) => jwt.sign({ id, username }, process.env.SECRET_TOKEN, { expiresIn: '1d' })
