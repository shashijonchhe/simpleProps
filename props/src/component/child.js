
import React from 'react'


const Devices=(props)=>{
	return(
		<div className="App">

			<input type='text' placeholder='enter device' onChange={props.onInputChange}></input>

			<button onClick={props.onButtonClick}>ADD</button>

			<ol>
				{props.items.map(el=><li>{el}</li>)}
			</ol>
		</div>
		)
}

export default Devices