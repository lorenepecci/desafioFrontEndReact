import React from 'react';
import { BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import {BsCalendar3} from "react-icons/bs";


class ItemCard extends React.Component { 
  render () {
    const { link, user, upvotes, comments, createdIn, image } = this.props;
    const { index } = this.props;
    const date = new Date(createdIn)
    return (
      <div key={ index } >
        <div className="write-card">
          <p>@{ user }</p>
          <p><BsHeart/> { upvotes }</p>
          <p><FaRegComment/> { comments}</p>
          <p><BsCalendar3/> { date.toLocaleTimeString( [], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' } ) }</p>
        </div>
        <div className="imagem-card">
          <a href={link}>
            <img  src={ image } alt={ `imagem${ index }` } />
          </a>
        </div>
        </div>
    )
  }
}

export default ItemCard;