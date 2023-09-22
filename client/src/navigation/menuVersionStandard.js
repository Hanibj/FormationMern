import { Component } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Accueil from '../components/versionStandard/accueilClass'
import Apropos from '../components/versionStandard/apropos';
import HitDetails from '../components/versionStandard/hitDetails';
import ListDeparts from '../components/versionStandard/ListDeparts';
import Photos from '../components/versionStandard/photos';

class Menu extends Component {
    render() {
        return (<Router>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link> </li>
                    <li><Link to="/apropos">A propos</Link></li>
                    <li><Link to="/departements">Départements</Link></li>
                    <li><Link to="/photos">Photos</Link></li>
                    
                </ul>
            </nav>
            <div>
                <Routes>
                    <Route path='/' element={<Accueil />}></Route>
                    <Route path='/apropos' element={<Apropos />}></Route>
                    <Route path='/departements' element={<ListDeparts />}></Route>
                    <Route path='/photos' element={<Photos />}></Route>
                    <Route path="/hitDetails/:id" element={<HitDetails />}></Route>
                    
                </Routes>
            </div>
        </Router>);
    }
}

export default Menu;