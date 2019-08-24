import React from 'react';

function CreateEntryComponent() {
	return (
		<div className='createEntry'>
				<h1>Submit your property for selling</h1>
				<p>We are glad to offer our services and help you make the best add for selling your property.</p>
				<p>Contact us for more information.</p>
			<div className="sellForm"> 
				<form>
					<p>Your name:</p>
					<input type="text" name="firstname"></input>
					
					<p>Your last name:</p>
					<input type="text" name="lastname"></input>
					
					<p>Upload a picture of your property:</p>
					<input type="file" accept="image/*"></input>
	  				
				</form>
				<div>
				  <p>Image preview:</p>
					<img id="imgPreview" src="http://placehold.it/180" alt="" />
				</div>
				<div><input type="submit" className="contactButton"></input></div>
			</div>
		</div>
	);
}

export default CreateEntryComponent;