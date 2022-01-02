import React from 'react';

function Inputdata(props) {
	
	return(
		<div className="inputdata">
			<h4 className="text-center">Added data</h4>

			<table className="table">
			  <thead className="thead-dark">
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">Name</th>
			      <th scope="col">Email</th>
			      <th scope="col">Action</th>
			    </tr>
			  </thead>
			  <tbody>
			  	{
			  		 props.items.map((item, index) => {
					    return (
					    	<tr key={item.useremail}>
								<th scope="row">{index}</th>
								<td>{item.username}</td>
								<td>{item.useremail}</td>
								<td><i className="fa fa-trash-o" onClick={()=>props.deleteItem(index)}></i></td>
					        </tr>
					    );
					})
			  	}
			    
			  </tbody>
			</table>

	    </div>
	);
}

export default Inputdata