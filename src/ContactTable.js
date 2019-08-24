import React from 'react';

function ContactTableComponent() {
	return (
		<table>
			<tbody>
				<tr>
					<td>First Name</td>
					<td><input type="text" name="firstname" placeholder="First name"></input></td>
				</tr>
				<tr>
					<td>Last Name</td>
					<td><input type="text" name="lastname" placeholder="Last name"></input></td>
				</tr>
				<tr>
					<td>E-mail</td>
					<td><input type="text" name="email" placeholder="E-mail"></input></td>
				</tr>
				<tr>
					<td>Your message</td>
					<td><textarea name="message" rows="10" cols="50" placeholder="Please write your message here"></textarea></td>
				</tr>
			</tbody>
		</table>
	);
}

export default ContactTableComponent;