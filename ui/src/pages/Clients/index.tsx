import { memo, useContext, useEffect, useState } from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { StateContext } from '../../store/DataProvider';
import Page from '../../components/Page';
import ClientTable from './ClientTable';
import { getClients } from '../../services/api';
import SearchTextInput from '../../components/SearchInput';

function Clients() {
	const { state, dispatch } = useContext(StateContext);
	const { clients } = state;

	const [searchValue, setSearchValue] = useState<string>('');

	useEffect(() => {
		getClients().then((clients) => dispatch({ type: 'FETCH_ALL_CLIENTS', data: clients }));
	}, [dispatch]);

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
				<Button variant='contained' sx={{ textTransform: 'none' }} disableElevation>
					Create new client
				</Button>
			</Grid>

			<Paper sx={{ margin: 'auto', marginTop: 3 }}>
				<ClientTable clients={clients} />
			</Paper>
		</Page>
	);
}

export default memo(Clients);
