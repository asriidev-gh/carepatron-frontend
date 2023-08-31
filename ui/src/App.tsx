import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import DataProvider from './store/DataProvider';
import Clients from './pages/Clients';
import LanguageSelector from './components/LanguageSelector';

export default function App() {
	return (
		<div className='App'>
			<LanguageSelector />
			<DataProvider>
				<Routes>
					<Route path='/' element={<Clients />} />
					<Route path='/Clients' element={<Clients />} />
				</Routes>
			</DataProvider>
		</div>
	);
}
