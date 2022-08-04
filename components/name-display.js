function NameDisplay(props){
	if(props.children != null) {
		return(
			<div>
				<h3 align = "center"> <u>{props.children}</u> </h3>
				<h3 align = "center"> {props.position}, {props.unit} </h3>
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