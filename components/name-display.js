function NameDisplay(props){
	if(props.children != null) {
		return(
			<div>
				<h3 align = "center"> <u>{props.children}</u> </h3>
				<h5 align = "center"> {props.position}, {props.unit} </h5>
				<br />
			</div>
		)
	} else {
		return(
			<div />
		)
	}
}

export default NameDisplay