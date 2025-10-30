import Grid from '@mui/material/Grid';

const MainLayout = ({children}:any) => {
    return (
    <Grid sx={{backgroundColor: '#ae001a', height: '100vh', width:'100vw'}} 
            container direction={"column"}>
        <Grid size={12}>
            {children}  
        </Grid>
    </Grid>)
} 

export default MainLayout;