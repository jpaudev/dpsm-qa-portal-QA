import Link from 'next/link'
import Head from 'next/head'
import { Formik, Form, Field } from "formik"
import axios from "axios"
import Router from 'next/router'
import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../helpers"

function Home(props) {
    return (
      <div className = "d-flex justify-content-center">
      </div>
    )
  }

  export async function getServerSideProps(context) {
    const data = parseCookies(context.req)
  
    if (context.res) {
      if (isExpired(data.user) || Object.keys(data).length === 0 && data.constructor === Object) {
        return {
          redirect: {
              destination: '/login',
              permanent: false,
          },
        }
      } else {
        let role = token.role

        let destination = ''
        switch(role) {
          case 1: destination = '/faculty/basic-info'; break;
          case 2: destination = '/faculty'; break;
          case 3: destination = '/faculty'; break;
          case 5: destination = '/admin'; break;
        }

        return {
          redirect: {
              destination,
              permanent: false,
          },
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
