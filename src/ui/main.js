import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme' ;
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import styles from './main.scss';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider
        className={styles.appContent}
        muiTheme={lightMuiTheme}
      >
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default Main;
