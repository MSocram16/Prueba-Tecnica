import { render, screen, fireEvent } from '@testing-library/react';

import { store } from '../store';
import { Provider } from 'react-redux';
import { LanguageSwitch } from '../components';

describe("<LanguageSwitch/> ", () => {

  test('Select sp language in LanguageSwitch', () => {
    render(
      <Provider store={store}>
        <LanguageSwitch />
      </Provider>
    );
    const btnImgEs = screen.getByTestId("btn-imgEs");
    fireEvent.click(btnImgEs);
    expect(screen.getByTestId("btn-imgEs")).toHaveClass("bg-blue-300");
  });


});