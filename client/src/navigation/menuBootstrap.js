// import { Component } from 'react';
// import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Accueil from '../components/versionBootstrap/accueil'
// import Apropos from '../components/versionBootstrap/apropos'
// import ListDeparts from '../components/versionBootstrap/listDeparts'
// import Photos from '../components/versionBootstrap/photos'
// import HitDetails from '../components/versionBootstrap/hitDetails'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import ListDepartsFunction from '../components/versionBootstrap/ListeDepartFuction';
// import Signin from '../components/versionFonction/Signin';
// import Signup from '../components/versionFonction/Signup';

// class Menu extends Component {
//     render() {
//         return (
            
//             <Router>
//                 <nav className="navbar navbar-expand navbar-brand m-2 navbar-dark bg-primary">
//                     <div>
//                     <ul className="navbar-nav">
//                         <li>
//                             <Link className="nav-link" to="/">Accueil</Link>
//                         </li>
//                         <li>
//                             <Link className="nav-link" to="/apropos">A propos</Link>
//                         </li>
//                         <li>
//                             <Link className="nav-link" to="/listDeparts">Départements</Link>
//                         </li>
//                         <li>
//                             <Link className="nav-link" to="/photos">Photos</Link>
//                         </li>
//                     </ul></div>
//                     <div className='container justify-content-end'>
//                     <ul className="navbar-nav  ">
//                         <li>
//                         <Link className="nav-link" to="/Signup">Signup</Link>
//                         </li>
//                         <li>
//                         <Link className="nav-link" to="/Singin">Singin</Link>
//                         </li>

//                     </ul>
//                     </div>
//                 </nav>

//                 <div className="m-4">
//                     <Routes>
//                         <Route path="/" element={<Accueil />}></Route>
//                         <Route path="/apropos" element={<Apropos />}></Route>
//                         <Route path="/listDeparts" element={<ListDepartsFunction />}></Route>
//                         <Route path="/photos" element={<Photos />}></Route>
//                         <Route path="/hitDetails/:id" element={<HitDetails />}></Route>
//                         <Route path="/Singin" element={<Signin />}></Route>
//                         <Route path="/Signup" element={<Signup />}></Route>
//                         </Routes>
//                 </div>
//             </Router>);
//     }
// }
// export default Menu;
import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Accueil from '../components/versionBootstrap/accueil';
import Apropos from '../components/versionBootstrap/apropos';
import ListDepartsFunction from '../components/versionBootstrap/ListeDepartFuction';
import Photos from '../components/versionBootstrap/photos';
import HitDetails from '../components/versionBootstrap/hitDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from '../components/versionFonction/Signin';
import Signup from '../components/versionFonction/Signup';

function Menu() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-brand m-2 navbar-dark bg-primary">
        <div>
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link" to="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/apropos">
                A propos
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/listDeparts">
                Départements
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/photos">
                Photos
              </Link>
            </li>
          </ul>
        </div>
        <div className="container justify-content-end">
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link" to="/Signup">
                Signup
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/Signin">
                Signin
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="m-4">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/listDeparts" element={<ListDepartsFunction />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/hitDetails/:id" element={<HitDetails />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Menu;
