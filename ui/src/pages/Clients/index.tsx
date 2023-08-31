import { memo, useContext, useEffect, useState } from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { StateContext } from '../../store/DataProvider';
import Page from '../../components/Page';
import ClientTable from './ClientTable';
import { getClients } from '../../services/api';
import SearchTextInput from '../../components/SearchInput';
import Modal from '../../components/Modal';

function Clients() {
	const { state, dispatch } = useContext(StateContext);
	const { clients } = state;

	const [searchValue, setSearchValue] = useState<string>('');
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		getClients().then((clients) => dispatch({ type: 'FETCH_ALL_CLIENTS', data: clients }));
	}, [dispatch]);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Page>
			<Typography variant='h4' sx={{ textAlign: 'start' }}>
				Clients
			</Typography>

			<Grid container justifyContent='space-between'>
				<SearchTextInput
					searchValue={searchValue}
					placeholder='Search clients..'
					onHandleSearch={(value) => setSearchValue(value)}
				/>
				<Button variant='contained' sx={{ textTransform: 'none' }} disableElevation onClick={handleOpen}>
					Create new client
				</Button>
			</Grid>

			<Paper sx={{ margin: 'auto', marginTop: 3 }}>
				<ClientTable clients={clients} />
			</Paper>

			<Modal open={open} handleClose={handleClose} title='Create new client'>
				Modal Content here..
			</Modal>
		</Page>
	);
}

export default memo(Clients);
