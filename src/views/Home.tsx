import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import useDebounce from '../effects/useDebounce';
import SearchBar from '../components/SearchBar';

const Home = () => {
    const [animeList, setAnimeList] = useState([]);
    const [searchText, setSearchText] = useState('');
	const debouncedSearchText: string = useDebounce(searchText, 250);

    async function fetchAnimeByName(animeName:string) {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const {data}:any = await response.json();
        setAnimeList(data)
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
    

    useEffect(()=> {
        if(debouncedSearchText) {
            fetchAnimeByName(debouncedSearchText)
        }

    },[debouncedSearchText])

    return (
        <Grid direction={"column"} spacing={2}  height='100%' width='100%'>
         <Grid size={12}>
            <Grid container>
                <Grid size={12}>
                    <SearchBar onChange={setSearchText}/>    
                </Grid>
            </Grid>
          </Grid>
            <Grid size={12} >
                {animeList.map((x:any, index)=> <div key={index}>{x?.url}</div>)}
            </Grid>
        </Grid>
    )
} 

export default Home;