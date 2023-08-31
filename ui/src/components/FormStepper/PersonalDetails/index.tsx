import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { UseFormRegister, UseFormReturn, FieldErrors } from 'react-hook-form';

type PersonalDetailsProps = {
	onClickNext: () => void;
	register: UseFormRegister<IClient>;
	errors: FieldErrors<IClient>;
	watch: UseFormReturn['register'];
};

const PersonalDetails = ({ onClickNext, register, errors, watch }: PersonalDetailsProps) => {
	return (
		<Box margin='20px 10px 0'>
			<Stack spacing={2} marginBottom='50px'>
				<div>
					<InputLabel shrink htmlFor='firstName'>
						First name
					</InputLabel>
					<TextField
						variant='outlined'
						sx={{ width: '100%' }}
						{...register('firstName', { required: true })}
						error={!!errors?.firstName}
						helperText={errors?.firstName?.message}
					/>
					{errors?.firstName?.type === 'required' && <p>This field is required</p>}
				</div>
				<div>
					<InputLabel shrink htmlFor='lastName'>
						Last name
					</InputLabel>
					<TextField
						variant='outlined'
						sx={{ width: '100%' }}
						{...register('lastName', { required: true })}
					/>
					{errors?.lastName?.type === 'required' && <p>This field is required</p>}
				</div>
			</Stack>
			<Grid container justifyContent='flex-end'>
				<Button
					variant='contained'
					sx={{ textTransform: 'none', width: '100px', height: '40px' }}
					disabled={!watch('firstName') || !watch('lastName')}
					onClick={() => onClickNext()}
				>
					Continue
				</Button>
			</Grid>
		</Box>
	);
};

export default PersonalDetails;
