import React from 'react';
import Styles from './component.module.css';

export default function Button({ text, type, onClick }) {
	const btnType = ['success', 'fail'].includes(type) ? type : 'default';

	return (
		<button className={['btn', `btn_${btnType}`].join(' ')} onClick={onClick}>
			{text}
		</button>
	);
}
