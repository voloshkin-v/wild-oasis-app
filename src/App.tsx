import { Toaster } from 'react-hot-toast';
import Router from './router/Router';

const App = () => {
	return (
		<>
			<Router />

			<Toaster
				position="top-center"
				gutter={8}
				toastOptions={{
					success: {
						duration: 3000,
					},
					error: {
						duration: 5000,
					},
				}}
			/>
		</>
	);
};

export default App;
