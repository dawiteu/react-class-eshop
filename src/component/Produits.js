import React from 'react';
import './Produits.css';

class Produits extends React.Component {
    render() {
        const detail = this.props.details; 
        const link = "./img/"+detail.id+".png";
        const div = "div"+detail.id;
        return (
            <li className="card w-100 m-1 p-2 d-flex flex-column">
                <div className="text-center">
                    <img src={link} alt={detail.nom} />
                </div>  
                <div className={`d-flex flex-column m-2 p-2 ${detail.stock === 1 ? 'bg-orange' : detail.stock === 0 ? 'bg-red' : ''}`} id={div}>
                    <span className="font-weight-bold my-2 h2">{detail.nom}</span>
                    <span className="my-2">Prix: {detail.prix} &euro; </span>
                    <span className="my-2">Stock disponible: {detail.stock} unités</span>
                    <button className="btn btn-success" onClick={() => this.props.onAchats(detail.id)}>Acheter</button> 
                </div>
            </li> 
        );
    }
}

export default Produits;