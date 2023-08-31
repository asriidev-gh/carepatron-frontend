import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('Create New Client', () => {
	render(<App />);
	const createBtn = screen.getByTestId('create-new-client-btn');
	fireEvent.click(createBtn);

	const firstNameInput = screen.getByTestId('input-first-name');
	expect(firstNameInput).toBeInTheDocument();

	const firstNameValue = 'asrii';
	fireEvent.change(firstNameInput, {
		target: {
			value: firstNameValue,
		},
	});
	expect(firstNameInput).toHaveValue('asrii');

	const lastNameInput = screen.getByTestId('input-last-name');
	expect(lastNameInput).toBeInTheDocument();

	const lastNameValue = 'radam';
	fireEvent.change(lastNameInput, {
		target: {
			value: lastNameValue,
		},
	});
	expect(lastNameInput).toHaveValue('radam');

	const continueBtn = screen.getByTestId('continue-new-client-btn');
	fireEvent.click(continueBtn);

	const emailInput = screen.getByTestId('input-email');
	expect(emailInput).toBeInTheDocument();

	const emailValue = 'asriidev@gmail.com';
	fireEvent.change(emailInput, {
		target: {
			value: emailValue,
		},
	});
	expect(emailInput).toHaveValue('asriidev@gmail.com');

	const phoneNoInput = screen.getByTestId('input-phone-no');
	expect(phoneNoInput).toBeInTheDocument();

	const phoneNoValue = '0966123456789';
	fireEvent.change(phoneNoInput, {
		target: {
			value: phoneNoValue,
		},
	});
	expect(phoneNoInput).toHaveValue('0966123456789');

	const submitBtn = screen.getByTestId('submit-new-client-btn');
	fireEvent.click(submitBtn);
});
