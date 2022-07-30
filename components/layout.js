import Head from 'next/head'
import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'
import Content from './content'
import jwt from 'jsonwebtoken'
function Layout(props) {
    let approvalList
    if(props.approvalList) approvalList = props.approvalList
    return (
        // Old Code
        // <div className = "container-fluid">
        //     <Head>
        //         <title>DPSM-QA-PORTAL MOD</title>
        //         {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link> */}
        //         <link rel="stylesheet" href= "/testStyle.css" />
        //         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        //         <link rel="stylesheet" hrsef="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />
        //         {/* MATERIAL CDN */}
        //         <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet"/>
        //         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        //         <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        //         <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        //     </Head>
        //     <Header name={ props.name } role={props.role}/>
        //     <div className = "row" id = "layout_row">
        //         <Sidebar role = {props.role} approvalList={approvalList} facultyId = {props.facultyId} roleAssignment={props.roleAssignmentFlag} />
        //             <div className="col" id = "layout_content">
        //                 { props.children }
        //             </div>
	    //    </div>
        // </div>




        <div>
            <Head>
                <title>DPSM-QA-PORTAL MOD</title>
                {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link> */}
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
                <link rel="stylesheet" hrsef="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />
                <link rel="stylesheet" href= "/testStyle.css" />
                {/* MATERIAL CDN */}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet"/>
                {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> */}

            </Head>
            {/* Header -- Topbar */}
            <Header name={ props.name } role={props.role}/>

            {/* Main Container */}
            <div className="containerMain">
                {/* Sidebar */}
                <Sidebar role = {props.role} approvalList={approvalList} facultyId = {props.facultyId} roleAssignment={props.roleAssignmentFlag} />

                {/* Content */}
                <main>
                    {props.children}
                </main>

                {/* right */}
                <div className="right">

                    {/* TOP */}
                    <div className="top">
                        <button id="menu-btn">
                            <span className="material-icons-sharp">menu</span>
                        </button>
                        <div className="theme-toggler">
                            <span className="material-icons-sharp active">light_mode</span>
                            <span className="material-icons-sharp">dark_mode</span>
                        </div>
                        <div className="profile">
                            <div className="info">
                                <p>Hey, <b>User</b></p>
                                <small className="text-muted">Department Chair</small>
                            </div>
                            <div className="profile-photo">
                                <img src="/profile-1.jpg"/>
                            </div>
                        </div>
                    </div>
                    {/* End Top */}


                </div>
            </div>


            {/* <div className = "row" id = "layout_row">
                <Sidebar role = {props.role} approvalList={approvalList} facultyId = {props.facultyId} roleAssignment={props.roleAssignmentFlag} />
                    <div className="col" id = "layout_content">
                        { props.children }
                    </div>
	       </div> */}

                {/* JavaScript Bundle with Popper */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
                <script src="/testScript.js"> </script>
        </div>



    )
}

export default Layout