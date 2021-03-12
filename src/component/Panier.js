import React, { Component } from 'react';

class Panier extends Component {
    render() {
        const objet = this.props.objet;

        return (
            <li className="my-1"> <button className="btn btn-danger" onClick={this.props.onVente}>x</button> | {objet.nom}  </li>
        );
    }
}

export default Panier;