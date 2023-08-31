import { Select, SelectChangeEvent, MenuItem, InputLabel, FormControl, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
	const { i18n } = useTranslation();

	return (
		<Box sx={{ margin: 'auto', marginTop: 5, maxWidth: '700px' }}>
			<FormControl fullWidth size='small'>
				<InputLabel id='demo-simple-select-label'>Language</InputLabel>
				<Select
					label='Language'
					style={{ background: '#fff', width: 120 }}
					onChange={(e: SelectChangeEvent<string>) => i18n.changeLanguage(e.target.value)}
				>
					<MenuItem value={'en'}>EN</MenuItem>
					<MenuItem value={'jap'}>JAP</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};

export default LanguageSelector;
