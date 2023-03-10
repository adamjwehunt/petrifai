'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import XIcon from '../../public/x-icon.svg';
import styles from './search.module.css';

export const SearchInput = ({ query }: { query: string }) => {
	const router = useRouter();
	const [value, setValue] = useState(query);

	const handleKeyPress = async (
		event: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (event.key === 'Enter') {
			router.push(`/search/${(event.target as HTMLInputElement).value}`);
		}
	};
	const handleClearInput = () => {
		setValue('');
		router.push(`/search`);
	};

	return (
		<>
			<input
				autoFocus
				type={'text'}
				className={styles.input}
				value={value}
				placeholder="What do you want to watch?"
				onChange={(event) => setValue(event.target.value)}
				onKeyPress={handleKeyPress}
			/>
			{!value ? null : (
				<button className={styles.clearTextButton} onClick={handleClearInput}>
					<XIcon />
				</button>
			)}
		</>
	);
};
