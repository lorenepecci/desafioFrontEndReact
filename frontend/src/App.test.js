/* import { render } from '@testing-library/react';
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

describe('1 - Faça uma requisição da API e preencha a tela com os dados retornados', () => {
  beforeAll(mockFetch);
  beforeEach(cleanup);

  it('Realize uma requisição para a API', async () => {
    await act(async () => {
      render(<App />);
    });
    expect(global.fetch).toHaveBeenCalled();
  });

  it( 'Preencha a tabela com os dados retornados', async () => {
    await act( async () => {
      render( <App /> );
    } );
    
  } );
   */