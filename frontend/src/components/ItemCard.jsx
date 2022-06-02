import React from 'react';

class ItemCard extends React.Component { 
  render () {
    const { link, usuario, upvotes, comentarios, criadoEm, imagens, index } = this.props;
    const data = new Date(criadoEm)
    return (
      
        <div key={index}>
          
          <p>@{ usuario }</p>
          <p>{ upvotes }</p>
          <p>{ comentarios}</p>
        <p>{ data.toLocaleTimeString( [], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' } ) }</p>
        <a href={link}>
          <img className="imagem-card" src={ imagens } alt={ `imagem${ index }` } />
        </a>
        </div>
      
    )
  }
}

export default ItemCard;