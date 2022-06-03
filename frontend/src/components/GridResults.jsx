import React from 'react';
import { fetchAPI } from '../helpers/api';
import Intermediate from './Intermediate';
import { Container } from 'react-bootstrap';

class GridResults extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      dataAPI: [],
    };
  };

  fetchAPI = async () => {
    const dataAPI = await fetchAPI();
    this.setState( {
      dataAPI:dataAPI,
      isLoading:false,
    } );
  }

  componentDidMount= () => {
    this.fetchAPI();
  }

  forLoop = () => {
    const { dataAPI  } = this.state;
    return (
      <div>
        <Container>
          <Intermediate array={ dataAPI } />
        </Container>
      </div>
    )
  }

  render () {
    const { isLoading, dataAPI } = this.state;
    const forLoop = this.forLoop();
    return (
     
        <section className="container">
          { isLoading &&
            <div className="loading">carregando...</div>
          }
        { dataAPI.length && forLoop}
        </section>
      
    )
  }
}

export default GridResults;