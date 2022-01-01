import React, { useState } from 'react';
import ReactDOM from "react-dom";


function Contact() {
	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({...values, [name]: value}))
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputs);
	}

	return (
		<div className="contact main-content">
			<div className="row mt-5">
				<div className="col-md-4 col-sm-12"></div>
				<div className="col-md-4 col-sm-12 card p-4">
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label>Enter your name:</label>
							<input type="text" className="form-control" id="exampleInputName" name="username" value={inputs.username || ""} onChange={handleChange} />
						</div>
						<div className="form-group">
							<label>Enater Email address</label>
							<input type="email" className="form-control" id="exampleInputEmail1" name="useremail" value={inputs.useremail || ""} onChange={handleChange} />
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>		
				</div>
				<div className="col-md-4 col-sm-12"></div>
			</div>
		</div>
	);
}

export default Contact