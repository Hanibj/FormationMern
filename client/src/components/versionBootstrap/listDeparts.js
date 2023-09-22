import { Component } from 'react';
import FormAjout from './formAjout';

class ListDeparts extends Component {
    
    state = { 
        departs : [
            {id:1, nom:'Commercial'},
            {id:2, nom:'Développement'},
            {id:3, nom:'Maintenance'},
        ],
        updateDepart : null
    }

    addDepart=(d)=>{
        let departements = this.state.departs
        if(!this.state.updateDepart){
            let newDepart = {
                id : (departements.length>0)? [...departements].pop().id + 1 : 1,
                nom : d
            }
            this.setState({
                departs : [...this.state.departs, newDepart],
            })
        }
        else {
            let indice = this.state.departs.indexOf(this.state.updateDepart)
            let newDeparts = [...this.state.departs];
            newDeparts[indice].nom= d;
            this.setState({
                departs : newDeparts,
                updateDepart : null
            })
        }
        
        
        
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
            <div className="card m-2">
                <div className="card-header">
                    <h2>Liste des départements</h2>
                </div>
                <FormAjout addDepart={this.addDepart} updateDepart={this.state.updateDepart} />
                <div>
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
         );
    }
}
 
export default ListDeparts;