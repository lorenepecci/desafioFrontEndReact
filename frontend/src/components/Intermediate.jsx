import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ItemCard from './ItemCard';

class Intermediate extends React.Component {

  renderCols = () => {
    const { array } = this.props;
    const mapCols = array.map( ( object, i ) => (
      <Col key={i} sm={4} md={3} xl={2}>
        { <ItemCard
          index={ object.index }
          image={ object.imagens.thumbnail.url }
          link={ object.link }
          user={ object.usuario.username }
          upvotes={ object.upvotes }
          comments={ object.comentarios }
          createdIn={ object.criadoEm }
        />
        }
      </Col>
    ) );
    return mapCols;
  }

  render () {
    const renderCols = this.renderCols();
    return (
        <Row>
          { renderCols }
        </Row>
    )
  }
 }

export default Intermediate;