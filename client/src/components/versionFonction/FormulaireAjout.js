import React, { useState } from 'react';

function FormulaireAjout(props) {
    const [nouveauDepart, setNouveauDepart] = useState('');


    //Fonction pour ajoute une departement a la base de donnée 
    const AddDeparte = async (e) => {
        e.preventDefault();
        console.log(props)
        const code = props.lengt + 1
        const nom = nouveauDepart
        const data = { code, nom }
        const response = await fetch('http://localhost:4000/api/Departement/add', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        })
        const jso = await response.json
        if (response.ok) {
            alert('departement ajouter')
            window.location.reload()
        }
        else {
            alert('error')
        }
    }

    //Fonction pour modifier une departement a la base de donnée 
    const updateDepartement = async (e, id) => {
        e.preventDefault()
        console.log(id)
        const response = await fetch(`http://localhost:4000/api/Departement/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ nom: nouveauDepart }),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        })
        const jso = await response.json
        console.log(jso)
        if (response.ok) {
            alert('departement modifier')
            props.edit = false
            window.location.reload()
            
        }
        else {
            alert('error')
        }
    }




    return (
        <div className="card-body">

            {/* formulaire champ de saisir  */}

            <form >
                <div className="row m-2">
                    <div className="col">
                        <input
                            className="p-1"
                            type="text"
                            name="depart"
                            value={nouveauDepart}
                            placeholder={props.updateDepart ? props.updateDepart.nom : "Nouveau département"}
                            onChange={(e) => setNouveauDepart(e.target.value)}
                        />
                    </div>
                    <div className="col col-auto">
                        {/* choisir le bouton selon edit if true faire la modification sinon faire l'ajout */}
                        {props.edit ?
                            <button onClick={(e) => updateDepartement(e, props.updateDepart._id)} className="btn btn-primary"> Modifier département</button> :
                            <button onClick={(e) => AddDeparte(e)} className="btn btn-primary">Ajouter département</button>}

                    </div>
                </div>
      
            </form>
        </div>
    );
}

export default FormulaireAjout;
