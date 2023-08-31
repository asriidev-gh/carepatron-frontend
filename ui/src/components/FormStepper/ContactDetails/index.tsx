import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { UseFormRegister, UseFormReturn, FieldErrors } from 'react-hook-form';

type ContactDetailsProps = {
	onClickBack: () => void;
	register: UseFormRegister<IClient>;
	errors: FieldErrors<IClient>;
	watch: UseFormReturn['register'];
};

const ContactDetails = ({ onClickBack, register, errors, watch }: ContactDetailsProps) => {
	return (
		<Box margin='20px 10px 0'>
			<Stack spacing={2} marginBottom='50px'>
				<div>
					<InputLabel shrink htmlFor='email'>
						Email
					</InputLabel>
					<TextField
						variant='outlined'
						sx={{ width: '100%' }}
						error={!!errors?.email}
						helperText={errors?.email?.message}
						{...register('email', {
							required: true,
						})}
					/>
				</div>
				<div>
					<InputLabel shrink htmlFor='phoneNumber'>
						Phone number
					</InputLabel>
					<TextField
						variant='outlined'
						sx={{ width: '100%' }}
						error={!!errors?.phoneNumber}
						{...register('phoneNumber', {
							required: true,
						})}
						helperText={errors?.phoneNumber?.message}
					/>
				</div>
			</Stack>
			<Grid container justifyContent='space-between'>
				<Button sx={{ textTransform: 'none' }} onClick={() => onClickBack()}>
					<ArrowBackIcon fontSize='inherit' />
					<Box ml={1}>Back</Box>
				</Button>
				<Button variant='contained' sx={{ textTransform: 'none', height: '40px' }} type='submit'>
					Create client
				</Button>
			</Grid>
		</Box>
	);
};

export default ContactDetails;
