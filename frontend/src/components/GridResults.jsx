import React from 'react';
import { fetchAPI } from '../helpers/api';
import ItemCard from './ItemCard';

class GridResults extends React.Component {
  constructor () {
    super();
    this.state = {
      isLoading: true,
      dataAPI: [],
    };
  };

  fetchAPI = async () => {
    const dataAPI = await fetchAPI();
    this.setState( {
      dataAPI,
      isLoading:false,
    } );
  }

  componentDidMount() {
    this.fetchAPI();
  }

  render () {
    const { isLoading, dataAPI } = this.state;
    return (
     
        <section className="container">
          { isLoading &&
            <div className="loading">carregando...</div>
          }
           
           { dataAPI.length &&  dataAPI.map( ( item, index ) => (
             <div key={ index }>
               
               <ItemCard 
                index={ index }
                image={item.imagens.thumbnail.url}
                link ={item.link}
                user={item.usuario.username}
                upvotes={item.upvotes}
                comments={item.comentarios}
                createdIn={item.criadoEm}
              />
            </div>
            ))}
         
        </section>
      
    )
  }
}

export default GridResults;