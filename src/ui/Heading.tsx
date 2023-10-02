type HeadingProps = {
	children: React.ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
	return <h2 className="text-3xl font-semibold">{children}</h2>;
};

export default Heading;
