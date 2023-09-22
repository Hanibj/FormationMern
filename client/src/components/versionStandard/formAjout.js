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
        <div>
            <form onSubmit={this.addDepart}>
                <input type="text" name="depart"
                    value={this.state.nouveauDepart}
                    placeholder={this.props.updateDepart?this.props.updateDepart.nom:"Nouveau département"}
                    onChange={this.setDepart}/>
                <button>{this.props.updateDepart?"Modifier département":"Ajouter département"}</button>
            </form>
        </div>  );
    }
}
 
export default FormAjout;