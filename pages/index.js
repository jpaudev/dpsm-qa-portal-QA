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

  export async function getServerSideProps(context) {
    const data = parseCookies(context.req)
  
    if (context.res) {
      if (Object.keys(data).length === 0 && data.constructor === Object) {
        return {
          redirect: {
              destination: '/login',
              permanent: false,
          },
        }
      } else {
        let token = jwt.decode(data.user)
        let role = token.role
        
        if(role == 1) { // faculty 
          return {
            redirect: {
                destination: '/faculty/basic-info',
                permanent: false,
            },
          }
        } else if (role == 2 || role == 3) { // unit head or dept. chair
          return {
            redirect: {
                destination: '/faculty',
                permanent: false,
            },
          }
        }
      }
    }
  
    return {
      props: {
        data: data && data
      }
    }
  }
  
  export default Home
