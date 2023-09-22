import { Component } from 'react';

class Apropos extends Component {
    state = {
        titre : 'Qui sommes nous ?',
        contact : {
                nom : 'Ma Société',
                email : 'info@masociete.com',
                logo : <img src='logo512.png' width="100" alt='logo Scoiété'></img>
        },
    }
    render() { 
        return ( 
        <div>
            <div>
                <h2>{this.state.titre}</h2>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>{this.state.contact.logo}</td>
                            <td>
                                <li>Société : {this.state.contact.nom}</li>
                                <li>Email : {this.state.contact.email}</li>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div> 
        </div>);
    }
}
export default Apropos;