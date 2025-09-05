import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { MainRoutes } from './router/routes';

const queryClient = new QueryClient();

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Header />
			<MainContent>
				<MainRoutes />
			</MainContent>
			<Footer />
		</QueryClientProvider>
	);
};
