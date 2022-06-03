import React from 'react';
import { BsCalendar3, BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";


class ItemCard extends React.Component { 
  render () {
    const { link, user, upvotes, comments, createdIn, image } = this.props;
    const { index } = this.props;
    const date = new Date(createdIn)
    return (
      <div key={ index } >
        <a href={link}>
          <div className="write-card">
            <p>@{ user }</p>
            <p><BsHeart/> { upvotes }</p>
            <p><FaRegComment/> { comments}</p>
            <p><BsCalendar3/> { date.toLocaleTimeString( [], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' } ) }</p>
          </div>
        </a>
        <div className="imagem-card">
          <img  src={ image } alt={ `imagem${ index }` } />
        </div>
        </div>
    )
  }
}

export default ItemCard;