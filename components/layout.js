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
                <title id="demo1">DPSM QA Portal</title>
                

                {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link> */}
                {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" /> */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>

                <link rel="stylesheet" href= "/testStyle.css" />

                {/* Fonts and Iconds */}
                <link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link rel="stylesheet" hrsef="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />
                {/* MATERIAL CDN */}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet"/>
                {/* JavaScript Bundle with Popper */}
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                {/* <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> */}

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
                <script src="/testScript.js"> </script>

            </Head>
            {/* Header -- Topbar */}
            <Header name={ props.name } role={props.role}/>

            <body>

            <div id="loadOverlay" style={{backgroundColor: "#333", position: "absolute", top: "0px", left: "0px", width: "100%" , height: "100%", zIndex: "2000"}}></div>
            
                {/* Main Container */}
                <div className="containerMain">
                    {/* Sidebar */}
                    <Sidebar role = {props.role} approvalList={approvalList} facultyId = {props.facultyId} roleAssignment={props.roleAssignmentFlag} />

                    {/* Content */}
                    <main>
                        <div className="theme-toggler tablet-only" onClick={() => {
                                        const themeToggler = document.querySelector(".theme-toggler")
                                        document.body.classList.toggle('dark-theme-variables')
                                        themeToggler.querySelector('span').classList.toggle('active')
                                    }}>
                                <span className="material-icons-sharp active">light_mode</span>
                                <span className="material-icons-sharp">dark_mode</span>
                        </div>
                        <br></br>
                        {props.children}
                    </main>

                    {/* right */}
                    <div className="right">

                        {/* TOP */}
                        <div className="top" >
                            <button id="menu-btn" style={{color: "white"}} onClick={() => {
                                        const sideMenu = document.querySelector("aside")
                                        sideMenu.style.display = 'block'

                                    }}>
                                <span className="material-icons-sharp">menu</span>
                            </button>
                            <div className="theme-toggler" onClick={() => {
                                        const themeToggler = document.querySelector(".theme-toggler")
                                        document.body.classList.toggle('dark-theme-variables')
                                        themeToggler.querySelector('span').classList.toggle('active')
                                    }}>
                                <span className="material-icons-sharp active">light_mode</span>
                                <span className="material-icons-sharp">dark_mode</span>
                            </div>
                            
                            <div className="profile">
                                <div className="info">
                                    <p>Logged In As: <br/> <b>{props.name}</b></p>
                                    { props.role == "1" &&
                                        <p className="text-muted">Faculty</p>
                                    }
                                    { props.role == "2" &&
                                        <p className="text-muted">Unit Head</p>
                                    }
                                    { props.role == "3" &&
                                        <p className="text-muted">Department Chair</p>
                                    }

                                    { props.role == "4" &&
                                        <p className="text-muted">DAPC</p>
                                    }
                                    { props.role == "5" &&
                                        <p className="text-muted">Admin Staff</p>
                                    }
                                
                                </div>
                                <div className="profile-photo">
                                    <img src="/profile-1.jpg"/>
                                </div>
                            </div>
                        </div>
                        {/* End Top */}


                    </div>
                </div>



            </body>

        </div>



    )
}

export default Layout

