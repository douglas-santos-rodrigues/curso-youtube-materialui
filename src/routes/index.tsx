import {Routes, Route, Navigate} from 'react-router-dom';

export default function AppRoutes(){
    return(
        <Routes>
            <Route path='/pagina-inicial' element={<p> Pagina Inicial</p>}/>
            <Route path='*' element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>

    );


}