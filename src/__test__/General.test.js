import React from 'react';
import { render, cleanup } from '@testing-library/react';

// Testing for text elements


import Subtitle from '../Components/Subtitle';
import Helper from '../Components/Helper';

afterEach(cleanup);

describe('Subtitle', () => {
  it('should contains name', () => {
    const { getByText } = render(<Subtitle text="Orden Activa" />)
    getByText('Orden Activa')
  })
});

describe('Helper', () => {
  it('should contains UI message', () => {
    const { getByText } = render(<Helper />)
    getByText('Para una mejor experiencia te recomendamos usar tu dispositivio de manera horizontal')
  })
});

