import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {

        const [isNavCollapsed, setIsNavCollapsed] = useState(true);
        const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                
                <div className="container">

                    <Link className="navbar-brand" to="/mernstack">
                        <i className="material-icons">
                            </i> NotesApp
                    </Link>
                    
                    {/*
                    <button className="navbar-toggler" type="button" 
                            data-toggle="collapse" data-target="#navbarNav" 
                            aria-controls="navbarNav" aria-expanded="false" 
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    */}
                    
                    <button class="custom-toggler navbar-toggler" 
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarsExample09" 
                            aria-controls="navbarsExample09" 
                            aria-expanded={!isNavCollapsed ? true : false} 
                            aria-label="Toggle navigation" 
                            onClick={handleNavCollapse}>
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
                        <a className="nav-link text-info" href="/contact">Support</a>
                        <a className="nav-link text-info" href="/login">Login</a>
                        <a href="/request-demo" className="btn btn-sm btn-info nav-link text-white" >Request demo</a>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/mernstack" className="nav-link">Notes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/mernstack/create" className="nav-link">Create Note</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/mernstack/user" className="nav-link">Create User</Link>
                            </li>
                        </ul>
                        
                    </div>

                </div>
            </nav>
        )
    }
}
