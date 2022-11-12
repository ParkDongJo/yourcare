import 'react-native';
import React from 'react';
import {render, waitFor} from '@testing-library/react-native';

import App from './App';

describe('App render', () => {
  const props = {};

  function renderApp(temprops) {
    return <App {...temprops} />;
  }

  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should render title Move to Detail', async () => {
    const screen = render(renderApp(props));
    const title = screen.getByText('Move to Detail');
    await waitFor(async () => {
      expect(title).toBeTruthy();
    });
  });
});
