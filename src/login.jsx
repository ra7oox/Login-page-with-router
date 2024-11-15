import React from "react";
import { Link } from "react-router-dom";

export function Login() {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="text-center mb-4">Login</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="form-control" 
                            placeholder="Enter your email" 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="form-control" 
                            placeholder="Enter your password" 
                        />
                    </div>
                    <div className="d-grid mb-3">
                        <Link to="/logged" className="btn btn-primary">Login</Link>
                    </div>
                    <div className="text-center">
                        <Link to="/Inscription" className="btn btn-link">Create an Account</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
