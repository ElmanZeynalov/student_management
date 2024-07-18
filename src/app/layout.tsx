'use client';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ReactNode } from 'react';
import ApplicationHeader from '@/components/ApplicationHeader';
import Stack from '@mui/material/Stack';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

interface RootLayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>
				<AppRouterCacheProvider>
					<Provider store={store}>
						<Stack spacing={2}>
							<ApplicationHeader />
							{children}
						</Stack>
					</Provider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
