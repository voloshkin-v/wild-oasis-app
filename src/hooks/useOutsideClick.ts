import { useEffect, useRef } from 'react';

export const useOutsideClick = <T extends HTMLElement>(handler: () => void) => {
	const ref = useRef<T | null>(null);

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				handler();
			}
		};

		document.addEventListener('click', handleClick, true);

		return () => document.removeEventListener('click', handleClick, true);
	}, [handler]);

	return ref;
};
