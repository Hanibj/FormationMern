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
            <div className="m-4">
                <div className="card">
                    <div className="card-header">
                        <h2><label>{this.state.titre}</label></h2>
                    </div>

                    <div className="row p-2">
                        <div className="col col-auto">
                            {this.state.contact.logo}
                        </div>

                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">Société : {this.state.contact.nom}</li>
                                <li className="list-group-item">Email : {this.state.contact.email}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>)
    }
}
export default Apropos;