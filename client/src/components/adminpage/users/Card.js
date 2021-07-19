import React from 'react';
import {Link} from 'react-router-dom';

function Card({data}) {
	return (
		<div>
			<Link to={`/users/${data.id}`}></Link>
			<div>
				<div>
					<div>{data.username}</div>
					<div>{data.email}</div>
				</div>
			</div>
		</div>
	);
}

export default Card;