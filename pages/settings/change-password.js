import { parseCookies, isExpired } from "../../helpers"
import jwt from 'jsonwebtoken'
import ChangePasswordComponent from '../../components/change-password'

function ChangePassword(props) {
    return (
        <>
            <ChangePasswordComponent token={props.token.user}>{props.data}</ChangePasswordComponent>
        </>
    )
  }

  export async function getServerSideProps(context) {
    const token = parseCookies(context.req)
    let data

    if (context.res) {
        if (isExpired(token.user) || Object.keys(token).length === 0 && token.constructor === Object) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            }
        } else {
            data = jwt.decode(token.user)
        }
    } 

    return {
        props: {
            token: token && token,
            data
        }
    }
}

  export default ChangePassword