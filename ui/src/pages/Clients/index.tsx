import { memo, useContext, useEffect, useState } from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { StateContext } from '../../store/DataProvider';
import Page from '../../components/Page';
import ClientTable from './ClientTable';
import { getClients } from '../../services/api';
import SearchTextInput from '../../components/SearchInput';
import Modal from '../../components/Modal';
import FormStepper from '../../components/FormStepper';
import { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

function Clients() {
	const { state, dispatch } = useContext(StateContext);
	const { clients } = state;

	const [searchValue, setSearchValue] = useState<string>('');
	const [open, setOpen] = useState<boolean>(false);
	const [clientsData, setClientsData] = useState<IClient[] | []>(clients);

	const { t } = useTranslation();

	useEffect(() => {
		getClients().then((clients) => dispatch({ type: 'FETCH_ALL_CLIENTS', data: clients }));
	}, [dispatch]);

	useEffect(() => {
		if (searchValue) {
			setClientsData(
				clients.filter(
					(client) =>
						client.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
						client.lastName.toLowerCase().includes(searchValue.toLowerCase())
				)
			);
		} else {
			setClientsData(clients);
		}
	}, [clients, searchValue]);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Page>
			<Typography variant='h4' sx={{ textAlign: 'start' }}>
				{t('Clients')}
			</Typography>

			<Grid container justifyContent='space-between'>
				<SearchTextInput
					searchValue={searchValue}
					placeholder={`${t('Search clients')}...`}
					onHandleSearch={(value) => setSearchValue(value)}
				/>
				<Button variant='contained' sx={{ textTransform: 'none' }} disableElevation onClick={handleOpen}>
					{t('Create new client')}
				</Button>
			</Grid>

			<Paper sx={{ margin: 'auto', marginTop: 3 }}>
				<ClientTable clients={clientsData} />
			</Paper>

			<Modal open={open} handleClose={handleClose} title='Create new client'>
				<FormStepper handleClose={handleClose} />
			</Modal>

			<Toaster position='top-center' reverseOrder={true} />
		</Page>
	);
}

export default memo(Clients);
