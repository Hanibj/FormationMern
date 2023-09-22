import React, {useState} from 'react'

function Presentation() {

    const [titre] = useState("Qui sommes nous ?"); 
    const [contact] =useState({
        nom : 'Ma Société',
        email : 'info@masociete.com',
        logo : <img src='logo512.png' alt='logo Scoiété' width="100px" length="100px"></img>});
    const[departs]=useState([
        {id:1, nom:'Commercial'},
        {id:2, nom:'Développement'},
        {id:3, nom:'Maintenance'}]);

    return (<div>
        <table>
            <thead><tr><th>{titre}</th></tr></thead>
            <tbody>
                <tr>
                    <td>{contact.logo}</td>
                    <td>
                        <li>Société : {contact.nom}</li>
                        <li>Email : {contact.email}</li>
                    </td>
                </tr>
            </tbody>
        </table>
        <table>
            <thead><tr><th>Liste des départements</th></tr></thead>
            <tbody>
                {
                    departs.map((d, i) =>
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.nom}</td>
                        </tr>)
                }
            </tbody>

        </table>
    </div>);
}

export default Presentation;