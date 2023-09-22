import React, { useEffect, useState } from 'react';
import FormAjout from '../versionFonction/FormulaireAjout';
import Searchform from '../versionFonction/Searchbar';

function ListDepartsFunction() {
    const [departs, setDeparts] = useState([]);
    const [lastDepart, setLastDepart] = useState('')
    const [updateDepartt, setUpdateDepart] = useState(null);
    const [edit, setEdit] = useState(false)
    const [search,setSearch]=useState(false)
    const [choix,setChoix]=useState(false)
    const [nomdepart,setNomdepart]=useState('')
    //useEffect pour calculer le dernier id code
    useEffect(() => {
        setLastDepart(departs.length > 0 ? departs[departs.length - 1].code : '');
    }, [departs]);

    //useEffect pour avoir la  liste des departement
    useEffect(() => {
        const affdepartements = async () => {
            const response = await fetch(`http://localhost:4000/api/Departement/departements`);
            const jso = await response.json();
            console.log(jso)
            if (response.ok) {
                setDeparts(jso);

            }
        };

        affdepartements();
    }, [])


    //foction de la suppression d'un departememnts
    const deleteDepart = async (i) => {
        console.log(i)
        const response = await fetch(`http://localhost:4000/api/Departementdelete/${i}`, {
            method: 'DELETE',
        })

        const jsooo = response.json()
        if (response.ok) {
            window.location.reload()
        }
        else {
            alert("error au niveau de suppression")
        }
    };

    const updateDepart = (d) => {
        console.log(d)
        setEdit(!edit)
        setUpdateDepart(d);
    };


   //foction de la recherche d'un departememnts 
useEffect(()=>{

if(search){
    console.log('la valuer a ',search)
    console.log('la valuer du nom a chercher ',nomdepart)
    setSearch(false)
    const handleSearch =async()=>{
        const response =await fetch (`http://localhost:4000/api/Departement/Single/${nomdepart}`)
        const jso=await response.json();
        console.log(jso)
        if (response.ok){
            setDeparts(jso);
        }
    }
    handleSearch();
}
},[search===true])
// const handleSearch =()=>{

// }
    return (
        <div className="card m-2">
            <div className="card-header">
                <h2>Liste des départements avec fonction</h2>
            </div>


            {/* formulaire d'ajout au de modification */}
            <FormAjout lengt={lastDepart} updateDepart={updateDepartt} edit={edit} />


            {/* Search bar form */}
            <div>
                <div className="input-group">
                    <input type="search"
                     className="form-control rounded" 
                     placeholder="Taper le nom du Departement"
                      aria-label="Search" 
                      aria-describedby="search-addon" 
                      onChange={(e)=>setNomdepart(e.target.value)}
                    />
                    <button type="button" className="btn btn-outline-primary" onClick={()=>setSearch(true)}>search</button>
                </div>
            </div>



            {/* tableau d'affichage */}
            <div>
                <div className="card-body">

                    <table className="table">
                        <thead>
                            {departs.length > 0 ? (
                                <tr>
                                    <th>ID</th>
                                    <th>Département</th>
                                    <th></th>
                                </tr>
                            ) : (
                                <tr>
                                    <th>Pas de département ...</th>
                                </tr>
                            )}
                        </thead>

                        <tbody>
                            {Array.isArray(departs)&&departs.map((d, i) => (
                                <tr key={i}>
                                    <td>{d.code}</td>
                                    <td>{d.nom}
                                        {/* {
                                        edit?<input type='text' value={d.nom} name='nom' onChange={(e)=>updateDepartt(e.target.value)}/>:d.nom
                                    } */}
                                    </td>

                                    <td>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => updateDepart(d)}
                                        >
                                            Editer
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteDepart(d._id)}
                                        >
                                            X
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ListDepartsFunction;
