import React, { Component } from 'react';
import logoSumma from '../../assets/img/faviconSumma.png';
import PageWrapper from '../page-wrapper/index.jsx';
import { Link } from 'react-router-dom';


class Sidebar extends Component {
    render() {
        return (
            <div id="wrapper">
                <nav className="navbar-default navbar-static-side bg-light shadow" role="navigation">
                    <div className="sidebar-collapse">
                        <ul className="nav metismenu" id="side-menu">
                            <li className="nav-header">
                                <div className="dropdown profile-element">
                                    <Link to="/"><img alt="image" className="img-responsive" src={logoSumma} /></Link>
                                </div>
                                <div className="logo-element">
                                    S
                                </div>
                            </li>
                            
                            <li>
                                <Link to="/"><i className="fa fa-user" /> <span className="nav-label">Mi perfil</span></Link>
                            </li>
                            
                            <li>
                                <Link to="/condiciones"><i className="fa fa-check" /> <span className="nav-label">Términos y condiciones</span></Link>
                            </li>
                            <li>
                                <Link to="/boveda"><i className="fa fa-money" /> <span className="nav-label">Mi bóveda</span></Link>
                            </li>

                            <li>
                                <Link to="/operaciones"><i className="fa fa-line-chart" /> <span className="nav-label">Mis operaciones</span></Link>
                            </li>
                            
                            <li>
                                <Link to="/descargas"><i className="fa fa-download" /> <span className="nav-label">Descargas</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <PageWrapper/>

            </div>

        );
    }
}

export default Sidebar;