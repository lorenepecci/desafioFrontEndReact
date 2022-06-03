import { cleanup, render, screen } from '@testing-library/react';
import App from './App';
import testData from './mockTest/testData';

const mockFetch = () => {
  jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => Promise.resolve(testData),
    }));
};

describe( '1 - Faça uma requisição da API e preencha a tela com os dados retornados', () => {
  beforeAll( mockFetch );
  beforeEach( cleanup );

  it( 'Realize uma requisição para a API', async () => {
    render( <App /> );
    expect( global.fetch ).toHaveBeenCalled();
  } );

  it( 'Preencha a tabela com os dados retornados', async () => {
    render( <App /> );
    const img = screen.getByRole('img')
    expect( img ).toBeInTheDocument();
  } );

  it( 'existe 1 imagem', async () => {
    render( <App /> );
    const ps = await screen.findAllByRole( "img" );
    expect( ps ).toHaveLength( 1 );
  } );

  it( 'existe 1 banner', async () => {
    render( <App /> );
    const banner = screen.getByRole('banner')
    expect( banner ).toBeInTheDocument();
  })

} );