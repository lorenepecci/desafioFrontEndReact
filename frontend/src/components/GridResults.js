import React from 'react';

class GridResults extends React.Component {
  
  constructor () {
    super();
    this.state = {
      isLoading: true,
    };
  };
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