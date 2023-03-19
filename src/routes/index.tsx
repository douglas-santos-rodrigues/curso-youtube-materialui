import { Button } from '@mui/material';
import {Routes, Route, Navigate} from 'react-router-dom';

export default function AppRoutes(){
    return(
        <Routes>
            <Route path='/pagina-inicial' element={<Button variant='contained' color='primary'> Pagina Inicial</Button>}/>
            <Route path='*' element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>

    );


}