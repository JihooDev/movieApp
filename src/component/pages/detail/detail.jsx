import React from 'react';
import { useParams } from 'react-router-dom';
import Styles from './detail.module.css';

export default function Detail({ setDetailModal }) {
	const { id } = useParams();
	return <div className={Styles.detail}></div>;
}
