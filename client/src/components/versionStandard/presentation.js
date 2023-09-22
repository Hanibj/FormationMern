import { Component } from 'react';

class Presentation extends Component {
    constructor(props){
        super(props);
        this.state = { 
            titre : 'Qui sommes nous ?',
            contact : {
                nom : 'Ma Société',
                email : 'info@masociete.com',
                logo : <img src='logo512.png' width="100" alt='logo Scoiété'></img>
            },
            departs : [
                {id:1, nom:'Commercial'},
                {id:2, nom:'Développement'},
                {id:3, nom:'Maintenance'},
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
            <div>
                <h2>Liste des départements</h2>
            </div>
            <div>
                <form onSubmit={this.addDepart}>
                    <input type="text" name="depart"
                            value={this.state.nouveauDepart}
                            placeholder={this.state.updateDepart?this.state.updateDepart.nom:"Nouveau département"}
                            onChange={this.setDepart}/>
                    <button>{this.state.updateDepart?"Modifier département":"Ajouter département"}</button>
                </form>
            </div>
            <div>
                <table>
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
                                    <td><button onClick={()=>this.updateDepart(d)}>Editer</button></td>
                                    <td><button onClick={()=>this.deleteDepart(i)}>X</button></td>
                                </tr>)
                        }
                    </tbody>
                
                </table>
            </div>
        </div>);
    }
}
 
export default Presentation;