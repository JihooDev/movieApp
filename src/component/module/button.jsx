import React from 'react';

export default function Button({ text, type, onClick }) {
	const btnType = ['success', 'fail'].includes(type) ? type : 'default';

	return (
		<button className={['btn', `btn_${btnType}`].join(' ')} onClick={onClick}>
			{text}
		</button>
	);
}
