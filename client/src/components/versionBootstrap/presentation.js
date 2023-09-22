import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Presentation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                        titre :"Qui sommes nous ?",
                        contact : {
                            nom : "Ma Société",
                            email : "info@masociete.com",
                            logo: <img src='logo512.png' width={100} alt='logo Scoiété'></img>

                        },
                        departs :  [
                            {id : 1, nom :"Commercial"},
                            {id : 2, nom :"Développement"},
                            {id : 3, nom :"Maintenance"}
                        ],
                        nouveauDepart :'',
                        updateDepart : null
                    }
    }

    addDepart=(event)=>{
        event.preventDefault();
        let departements = this.state.departs
        if(!this.state.updateDepart){
            let newDepart = {
                id : (departements.length>0)? [...departements].pop().id + 1 : 1,
                nom : this.state.nouveauDepart
            }
            this.setState({
                departs : [...this.state.departs, newDepart],
            })
        }
        else {
            let indice = this.state.departs.indexOf(this.state.updateDepart)
            let newDeparts = [...this.state.departs];
            newDeparts[indice].nom= this.state.nouveauDepart;
            this.setState({
                departs : newDeparts,
                updateDepart : null
            })
        }
        this.setState({
            nouveauDepart:''
        })
        
        
    }

    setDepart=(event)=>{
        this.setState({
            nouveauDepart : event.target.value 
        })
    }

    deleteDepart=(i)=>{
        let newDeparts = this.state.departs
        newDeparts.splice(i,1);
        this.setState({
            departs : newDeparts,
            updateDepart : null
        })
    }

    updateDepart=(d)=>{
        this.setState({
            updateDepart : d
        })
    }

    render() { 
        return ( 
            <div className="m-4">
                <div>
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

                    <div className="card m-2">
                        <div className="card-header">
                            <h2>Liste des départements</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.addDepart}>
                                <div className="row m-2">
                                    <div className="col">
                                        <input className="p-1" type="text" 
                                                name="depart"
                                                value={this.state.nouveauDepart}
                                                placeholder={this.state.updateDepart?this.state.updateDepart.nom:"Nouveau département"}
                                                onChange={this.setDepart}/>
                                    </div>
                                    <div className="col col-auto">
                                        <button className="btn btn-primary">{this.state.updateDepart?"Modifier département":"Ajouter département"}</button>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    {this.state.departs.length>0 ?
                                        <tr>
                                            <th>ID</th>
                                            <th>Département</th>
                                            <th></th> 
                                        </tr> :
                                        <tr><th>Pas de département ...</th></tr>
                                    }
                                </thead>

                                <tbody>
                                {
                                    this.state.departs.map((d,i)=>
                                        <tr key={i}>
                                            <td>{d.id}</td>
                                            <td>{d.nom}</td>
                                            <td><button className="btn btn-success" onClick={()=>this.updateDepart(d)}>Editer</button></td>
                                            <td><button className="btn btn-danger" onClick={()=>this.deleteDepart(i)}>X</button></td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
         );
    }
}
 
export default Presentation;