import cookie from "cookie"
import jwt from 'jsonwebtoken'

export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}

// check token if expired
export function isExpired(user) {
  let decoded = jwt.decode(user)
  let now = new Date().getTime() / 1000
  return decoded && decoded.exp < now
}