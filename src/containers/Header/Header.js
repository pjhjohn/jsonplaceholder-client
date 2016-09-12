import React from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  title: {
    cursor: 'pointer',
    fontWeight: 300
  },
};

const tabs = [ `home`, `posts`, `albums`, `about` ];

class Header extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {open: false, active: window.location.pathname.split("/")[1]||tabs[0]};
  }

  navigate = (path) => {
    this.setState({open: false, active: path});
    this.context.router.push(`/${path}`);
  };

  render() {
    return (
      <div>
        <AppBar
          title={<span style={styles.title}>jsonplaceholder-client</span>}
          onLeftIconButtonTouchTap={() => this.setState({open: !this.state.open})}
          onTitleTouchTap={() => this.navigate(`home`)}>
        </AppBar>
        <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})} width={304}>
          <AppBar title={<span style={styles.title}>jsonplaceholder-client</span>}
                  showMenuIconButton={false}
                  onTitleTouchTap={() => this.navigate(`home`)}/>
          { tabs.map((tab) =>
            <MenuItem key={tab} checked={this.state.active===tab} onTouchTap={() => this.navigate(tab)}>{tab.toUpperCase()}</MenuItem>
          )}
        </Drawer>
      </div>
    );
  }
}

export default Header;
