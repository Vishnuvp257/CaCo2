import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { Navigation } from './components/navigation';
import { Header } from './components/header';
import { About } from './components/about';
import { BaseCard } from './components/basecard';
import { Services } from './components/services';
import { Contact } from './components/contact';
import Privacy from './components/privacy';
import TermsCondition from './components/termsCondition';
import RefundPolicy from './components/refundPolicy';
import ShippingPolicy from './components/ShippingPolicy';
import ResetPassword from './components/Resetpassword';
import PasswordChangedSuccess from './components/PasswordChangeSuccess';

import JsonData from './data/data.json';
import SmoothScroll from 'smooth-scroll';

import './App.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

const App = () => {
	const [landingPageData, setLandingPageData] = useState({});
	useEffect(() => {
		setLandingPageData(JsonData);
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<div>
							<Navigation />
							<Header data={landingPageData.Header} />
							<Services data={landingPageData.Services} />
							<About data={landingPageData.About} />
							<BaseCard data={landingPageData.Pricing} />
							<Contact data={landingPageData.Contact} />
						</div>
					}
				/>
				<Route
					path='/privacy'
					element={<Privacy />}
				/>
				<Route
					path='/terms&conditions'
					element={<TermsCondition />}
				/>
				<Route
					path='/refund-policy'
					element={<RefundPolicy />}
				/>
				<Route
					path='/shipping-policy'
					element={<ShippingPolicy/>}
				/>
				<Route
					path='/reset-password'
					element={<ResetPassword />}
				/>

				<Route
                    path='/pwd-changed-success'
                    element={<PasswordChangedSuccess />}
                />

				<Route
					path='*'
					element={
						<Navigate
							replace
							to='/'
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
