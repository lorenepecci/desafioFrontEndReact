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
    console.log(dataAPI.length)
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
            <div key={index}>
               <ItemCard 
                index={ index }
                imagens={item.imagens.thumbnail.url}
                link ={item.link}
                usuario={item.usuario.username}
                upvotes={item.upvotes}
                comentarios={item.comentarios}
                criadoEm={item.criadoEm}
              />
            </div>
            ))}
         
        </section>
      
    )
  }
}

export default GridResults;