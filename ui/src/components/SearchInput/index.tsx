import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchTextInputProps {
	placeholder?: string;
	variant?: 'filled' | 'outlined' | 'standard';
	size?: 'small' | 'medium';
	searchValue?: string;
	onHandleSearch: (value: string) => void;
}

const SearchTextInput = ({
	placeholder = 'Search..',
	size = 'small',
	variant = 'outlined',
	searchValue,
	onHandleSearch,
}: SearchTextInputProps) => {
	return (
		<>
			<TextField
				placeholder={placeholder}
				value={searchValue}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => onHandleSearch(e.target.value)}
				variant={variant}
				size={size}
				style={{ background: '#fff' }}
				InputProps={{
					endAdornment: (
						<InputAdornment position='end'>
							<SearchIcon />
						</InputAdornment>
					),
				}}
			/>
		</>
	);
};

export default SearchTextInput;
