import * as z from 'zod';

export const schema = z.object({
	firstName: z.string().min(1, { message: 'Required' }).max(30),
	lastName: z.string().trim().min(1, { message: 'Last name is required' }).max(30),
	email: z.string().trim().min(1, { message: 'Email is required' }).email({ message: 'Invalid email address' }),
	phoneNumber: z
		.string()
		.trim()
		.min(1, { message: 'Phone number is required' })
		.max(40, 'Invalid phone number')
		.refine((value:string) => /^\+?[0-9\-()\s]+$/.test(value), {
			message: 'Invalid phone number format',
		}),
});