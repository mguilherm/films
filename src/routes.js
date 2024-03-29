import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './Pages/Error';
import Films from './Pages/Films';
import Home from './Pages/Home';
import Header from './components/Header';
import Favorites from './Pages/Favorites';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/films/:id' element={ <Films/> }/>
                <Route path='/favorites' element={<Favorites/> } />
                
                <Route path='*' element={ <Error/> }/>
            </Routes>
        </BrowserRouter>
    )
        
}

export default RoutesApp;