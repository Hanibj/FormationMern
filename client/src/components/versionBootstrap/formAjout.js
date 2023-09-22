import { Component } from 'react';

class FormAjout extends Component {
    
    state = { 
        nouveauDepart :'',
   }

    addDepart=(event)=>{
        event.preventDefault();
        this.props.addDepart(this.state.nouveauDepart)
        this.setState({
            nouveauDepart:'',
            
        })
        
    }

    setDepart=(event)=>{
        this.setState({
            nouveauDepart : event.target.value
        })
    }

    render() { 
        return ( 
        <div className="card-body">
            <form onSubmit={this.addDepart}>
                <div className="row m-2">
                    <div className="col">
                        <input className="p-1" type="text" 
                                name="depart"
                                value={this.state.nouveauDepart}
                                placeholder={this.props.updateDepart?this.props.updateDepart.nom:"Nouveau département"}
                                onChange={this.setDepart}/>
                    </div>
                    <div className="col col-auto">
                        <button className="btn btn-primary">{this.props.updateDepart?"Modifier département":"Ajouter département"}</button>
                    </div>
                    
                </div>
            </form>
        </div>);
    }
}
 
export default FormAjout;