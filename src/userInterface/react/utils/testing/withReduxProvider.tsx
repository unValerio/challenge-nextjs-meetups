/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

interface Props {
  children: React.ReactNode;
}

const DefaultWrappedComponent: React.FC<Props> = ({ children }) => <>{children}</>;

const withReduxProvider =
  (store) =>
    (WrappedComponent = DefaultWrappedComponent) => {
      const mockStore = configureStore();
      const wrapper = ({ children }) => {
        return (
          <Provider store={mockStore(store)} >
            <WrappedComponent>{children} </WrappedComponent>
          </Provider>
        );
      };

      return wrapper;
    };

export const mountComponentWithStore = (Component, store) => {
  const TestComponent: React.FC = withReduxProvider(store)(Component);
  return mount(<TestComponent />);
};

export default withReduxProvider;
