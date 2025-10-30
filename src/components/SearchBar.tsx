import { InputAdornment, TextField } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (props:any) => {
 	const { value, onChange, variant } = props || {};

	return (
		<TextField
			sx={{backgroundColor: 'grey'}}
			variant={variant}
			placeholder={'Search anime title'}
			value={value}
			onChange={(e) => onChange(e.currentTarget.value.toLowerCase())}
		/>
    )
} 

export default SearchBar;