import { ReactNode } from 'react';

type HeadingProps = {
	children: ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
	return <h2 className="text-3xl font-semibold">{children}</h2>;
};

export default Heading;
