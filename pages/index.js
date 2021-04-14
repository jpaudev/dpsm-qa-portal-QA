import Link from 'next/link'
import Head from 'next/head'
import { Formik, Form, Field } from "formik"
import axios from "axios"
import Router from 'next/router'
import jwt from 'jsonwebtoken'
import { parseCookies } from "../helpers"

function Home(props) {
    return (
      <div className = "d-flex justify-content-center">
      </div>
    )
  }

  Home.getInitialProps = async ({ req, res }) => {
    const data = parseCookies(req)
  
  if (res) {
      if (Object.keys(data).length === 0 && data.constructor === Object) {
        res.writeHead(301, { Location: "/login" })
        res.end()
      } else {
        let token = jwt.decode(data.user)
        let role = token.role
        
        if(role == 1) { // faculty 
          res.writeHead(301, { Location: "/faculty/basic-info" })
          res.end()
        } else if (role == 2 || role == 3) { // unit head or dept. chair
          res.writeHead(301, { Location: "/faculty" })
          res.end()
        }
      }
    }
  
    return {
      data: data && data,
    }
  }
  
  export default Home
