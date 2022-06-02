import React from 'react';

class ItemCard extends React.Component { 
  render () {
    const { link, usuario, upvotes, comentarios, criadoEm, imagens, index } = this.props;
    return (
      <div key={index}>
        <p>{ link }</p>
        <p>{ usuario }</p>
        <p>{ upvotes }</p>
        <p>{ comentarios}</p>
        <p>{ criadoEm }</p>
        <img src={ imagens } alt={ `imagem${ index }` } />
        
       
      </div>
    )
  }
}

export default ItemCard;