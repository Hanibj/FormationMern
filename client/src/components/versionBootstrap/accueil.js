import 'bootstrap/dist/css/bootstrap.min.css';

const msg ="Bienvenue à notre site de la société : Ma Société";
function Accueil() {
    return (
        <div className="m-4">
            <div className="card">
                    <div className="card-header">
                        <h2><label>Ma société</label></h2>
                    </div>

                    <div className="row p-2">
                        <div className="col col-auto">
                            {msg}
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Accueil;