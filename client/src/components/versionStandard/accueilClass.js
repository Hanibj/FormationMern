import { Component } from 'react';

const msg ="Bienvenue à notre site de la société : Ma Société";
class AccueilClass extends Component {
    render() { 
        return ( <h2>{msg}</h2> );
    }
}
 
export default AccueilClass;