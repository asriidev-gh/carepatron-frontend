import { useContext, useState } from 'react';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';

import ContactDetails from './ContactDetails';
import PersonalDetails from './PersonalDetails';
import { createClient, getClients } from '../../services/api';
import { StateContext } from '../../store/DataProvider';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './Zod';
import { toast } from 'react-hot-toast';

type FormStepperProps = {
	handleClose: () => void;
};

const steps = ['Personal details', 'Contact details'];

const FormStepper = ({ handleClose }: FormStepperProps) => {
	const [activeStep, setActiveStep] = useState(0);
	const { dispatch } = useContext(StateContext);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<IClient>({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: any) => {
		const payload = {
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			phoneNumber: data.phoneNumber,
		};

		createClient(payload).then((client) => {
			getClients().then((clients) => dispatch({ type: 'FETCH_ALL_CLIENTS', data: clients }));
			handleClose();
			toast.success('Successfull Added!');
		});
	};

	const getFormComponent = () => {
		switch (activeStep) {
			case 0:
				return (
					<PersonalDetails
						onClickNext={() => setActiveStep(1)}
						register={register}
						errors={errors}
						watch={watch}
					/>
				);
			case 1:
				return (
					<ContactDetails
						onClickBack={() => setActiveStep(0)}
						register={register}
						errors={errors}
						watch={watch}
					/>
				);
			default:
				return null;
		}
	};

	return (
		<>
			<Stepper activeStep={activeStep}>
				{steps.map((label, index) => {
					return (
						<Step key={index}>
							<StepLabel>{label}</StepLabel>
						</Step>
					);
				})}
			</Stepper>
			<form onSubmit={handleSubmit(onSubmit)}>{getFormComponent()}</form>
		</>
	);
};

export default FormStepper;
