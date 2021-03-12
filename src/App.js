import React from 'react'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

import Produits from './component/Produits'; 
import Panier from './component/Panier';
class App extends React.Component{

  state =  {
    argent: 20, 
    panier: [],

    produits: [
      {id: 1, nom: "Coca-Cola", stock: 5, prix: 1.5}, 
      {id: 2, nom: "Fanta", stock: 2, prix: 2},  
      {id: 3, nom: "Lipton Iced Tea", stock: 3, prix: 1}   
    ]

  }

  // handler Achats quand tu achete un produit. 
  handAchat = (id) => {
    const produits = [...this.state.produits];  
    let {argent, panier} = this.state;   
    const idd = produits.findIndex((produit) => produit.id === id);  
    const leProduit = produits[idd];
    let stock = leProduit.stock;
    let prix = leProduit.prix;
    if((stock > 0) && (argent > leProduit.prix)){ 
      panier.push(leProduit);
      argent -= prix; 
      leProduit.stock -= 1;
      this.setState({ stock, argent, panier });
    }
  };

  handVente = (id) => {
    const {panier, produits} = this.state;
    let argent = this.state.argent;
    const object = panier[id]; 
    let idProd = produits.findIndex((prod) => prod.id === object.id); 
    produits[idProd].stock += 1; 
    argent += object.prix;
    panier.splice(id, 1); 
    this.setState({ panier, argent, produits});
  }; 


  render(){
    let panierLength = this.state.panier.length;
    return (
      <div className="container">
        <h2>Votre argent: {this.state.argent} &euro; </h2>
        <ul className="d-flex m-0">  
        { this.state.produits.map((produit, i) => <Produits key={i} details={produit} onAchats={this.handAchat} /> )}
        </ul>
        <p className="h2">Votre panier:</p>
        <ul className="panier">
          {panierLength > 0 ? this.state.panier.map((prod, i) => <Panier key={i} objet={prod} onVente={() => this.handVente(i)} />) : "le panier est vide" }
        </ul>
      </div>
    );
  }
}

export default App;
