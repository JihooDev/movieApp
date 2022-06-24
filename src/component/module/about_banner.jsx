import React from 'react';
import Styles from './about_banner.module.css';
import { motion } from 'framer-motion';

export default function AboutBanner({ num, mainText, back_color, preview }) {
	return (
		<section className={`${Styles.page}`} style={{ backgroundColor: `${back_color}` }}>
			<div className={Styles.container}>
				<div className={Styles.image}>
					<motion.img
						src={process.env.PUBLIC_URL + `image/page_${num}.png`}
						alt={`${num}`}
						initial={{ opacity: 0, transform: 'translateY(10%)' }}
						animate={{ opacity: 1, transform: 'translateY(0%)', transition: { duration: 0.7 } }}
					/>
				</div>
				<motion.div
					className={Styles.text}
					initial={{ opacity: 0, transform: 'translateX(100%)' }}
					animate={{ opacity: 1, transform: 'translateX(0%)', transition: { duration: 2 } }}
				>
					<h1>{mainText}</h1>
					<p>{preview}</p>
				</motion.div>
			</div>
		</section>
	);
}
