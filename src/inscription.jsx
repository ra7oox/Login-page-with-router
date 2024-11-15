import React from "react";
import { Link } from "react-router-dom";

export function Inscription() {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="text-center mb-4">Inscription</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="nom" className="form-label">Nom</label>
                        <input 
                            type="text" 
                            id="nom" 
                            className="form-control" 
                            placeholder="Entrez votre nom" 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="prenom" className="form-label">Prénom</label>
                        <input 
                            type="text" 
                            id="prenom" 
                            className="form-control" 
                            placeholder="Entrez votre prénom" 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="form-control" 
                            placeholder="Entrez votre email" 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Mot de passe</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="form-control" 
                            placeholder="Entrez un mot de passe" 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="repeat-password" className="form-label">Répéter le mot de passe</label>
                        <input 
                            type="password" 
                            id="repeat-password" 
                            className="form-control" 
                            placeholder="Répétez le mot de passe" 
                        />
                    </div>
                    <div className="d-grid">
                        <Link to="/logged" className="btn btn-success">S'inscrire</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
