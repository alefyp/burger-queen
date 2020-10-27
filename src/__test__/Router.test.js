import { render as rtlRender, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Waiter from '../Components/views/Waiter';
import NotFound from '../Components/views/NotFound';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useLocation,
} from 'react-router-dom';

// afterEach(cleanup);

const render = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)
  return rtlRender(ui, { wrapper: Router })
}

test('landing in waiter main page', () => {
  render(<Waiter />, { route: '/rol/waiter' })
  expect(screen.getByText(/Ordenes activas/i)).toBeInTheDocument()
})


test('landing on a bad page', () => {
  render(<NotFound />, { route: '/something-that-does-not-match' })
  expect(screen.getByText(/Page not found/i)).toBeInTheDocument()
})

