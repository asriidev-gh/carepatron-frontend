import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import DataProvider from './store/DataProvider';
import Clients from './pages/Clients';
import { green } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LanguageSelector from './components/LanguageSelector';

const theme = createTheme({
	components: {
		MuiStepIcon: {
			styleOverrides: {
				root: {
					'&.Mui-completed': {
						color: green[800],
					},
				},
			},
		},
	},
});

export default function App() {
	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<LanguageSelector />
				<DataProvider>
					<Routes>
						<Route path='/' element={<Clients />} />
						<Route path='/Clients' element={<Clients />} />
					</Routes>
				</DataProvider>
			</ThemeProvider>
		</div>
	);
}
