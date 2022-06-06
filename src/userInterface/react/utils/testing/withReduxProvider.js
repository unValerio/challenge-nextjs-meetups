/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const DefaultWrappedComponent = ({ children }) => <div>{children}</div>;

const withReduxProvider =
  (store) =>
    (WrappedComponent = DefaultWrappedComponent) => {
      const mockStore = configureStore();
      const wrapper = ({ children }) => {
        return (
          <Provider store={mockStore(store)}>
            <WrappedComponent>{children}</WrappedComponent>
          </Provider>
        );
      };

      return wrapper;
    };

export const mountComponentWithStore = (Component, store) => {
  const TestComponent = withReduxProvider(store)(Component);
  return mount(<TestComponent />);
};

export default withReduxProvider;
