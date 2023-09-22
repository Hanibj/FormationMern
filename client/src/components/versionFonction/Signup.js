import React, { useState } from "react";



const Signup =()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  

    const handleSignup = async (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)

        const response = await fetch('http://localhost:4000/api/Authentification/Signup', {
            method: 'POST',
            body: JSON.stringify({email,password}),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        })
        const jso = await response.json
        if (response.ok) {
            alert('Signin sucess')

        }
        else {
            alert('error')
        }
    }
    
    return(
        <div className="d-flex aligns-items-center justify-content-center  w-175 ">
            <div className="card text-center mb-3 justify-content-center " style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Signin</h5>
                    <form>

                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInputDisabledd" name="prenom" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="floatingInputDisabledd">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" name="password" id="floatingInputDisabled" placeholder="Taper votre mots de passe" onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="floatingInputDisabled">Password</label>
                        </div>

                        <button className="btn btn-primary mt-2" onClick={(e) => handleSignup(e)}>Signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default Signup