/* eslint react/prefer-stateless-function: 0,
react/forbid-prop-types: 0, react/require-default-props: 0 */
import React from 'react';

export default class App extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
App.propTypes = {
  children: React.PropTypes.any,
};
