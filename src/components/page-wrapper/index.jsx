import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Principal from '../../containers/index.jsx';
import Condiciones from '../../containers/condiciones/index.jsx';
import Boveda from '../../containers/boveda/index.jsx';
import Operaciones from '../../containers/operaciones/index.jsx';
import Descargas from '../../containers/descargas/index.jsx';
import banderaEspana from '../../assets/img/espana.png';
import banderaEngland from '../../assets/img/reino-unido.png';

class PageWrapper extends Component {
    render() {
        return (
            <div id="page-wrapper" className="gray-bg dashbard-1">
                <div className="row border-bottom">
                    <nav className="navbar navbar-static-top shadow-sm" role="navigation" style={{ marginBottom: 0 }}>
                        <div className="navbar-header">
                            <a className="navbar-minimalize minimalize-styl-2 btn gray-bg" href="#"><i className="fa fa-bars text-navy" style={{fontSize: '18px'}} /> </a>
                        </div>
                        <ul className="nav navbar-top-links navbar-right">
                            <li className="dropdown">
                                <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                    <img className="rounded-circle w-25" src={banderaEspana} /> ES
                                </a>
                                <ul className="dropdown-menu dropdown-alerts" style={{width: '150px'}}>
                                    <li>
                                        <a href="mailbox.html" className="dropdown-item">
                                            <div>
                                                <img className="rounded-circle" width="25px" src={banderaEspana} /> Español
                                            </div>
                                        </a>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li>
                                        <a href="profile.html" className="dropdown-item">
                                            <div>
                                            <img className="rounded-circle" width="25px" src={banderaEngland} /> English
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="login.html">
                                    <i className="fa fa-sign-out" /> Cerrar Sesión 
                                </a>
                            </li>
                           
                        </ul>
                    </nav>
                </div>

                    
                <Switch>
                    <Route exact path="/" component={Principal}  />
                    <Route path="/condiciones" component={Condiciones}  />
                    <Route path="/boveda" component={Boveda}  />
                    <Route path="/operaciones" component={Operaciones}  />
                    <Route path="/descargas" component={Descargas}  />
                </Switch>
              
                
                <div className="footer">
                    <div className="text-navy">
                        <strong>Copyright</strong> Summa Trading
                    </div>
                </div>
            </div>

        );
    }
}

export default PageWrapper;