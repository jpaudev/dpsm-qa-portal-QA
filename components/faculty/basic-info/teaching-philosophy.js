import NameDisplay from '../../../components/name-display'

function TeachingPhilosophy(){
	return(
		<div>
			<h4 align = "center"> Teaching Philosophy </h4>
			<NameDisplay />

			<form>
				<textarea className = "form-control" rows = "8" cols = "50" placeholder = "Write down your teaching philosophy here" />
				<button className = "btn btn-primary"> Update </button>
			</form>
		</div>
	)
}

export default TeachingPhilosophy