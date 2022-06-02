import React from 'react';
import { fetchAPI } from '../helpers/api';

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
    const { isLoading } = this.state;
    return (
      <div>
        <section class="container">
          { isLoading &&
            <section class="loading">carregando...</section>
          }
          <section class="body-images"></section>
        </section>
      </div>
    )
  }
}

export default GridResults;