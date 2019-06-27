import React from 'react';
import injectSheet from 'react-jss';

export class NavSecondary extends React.Component {
  render() {
    const {
      style,
      classes,
      boxActive = "about",
      navList = [
        {name: "About", scrollName: "about"},
        {name: "Services", scrollName: "services"},
        {name: "Clients", scrollName: "clients"},
        {name: "Contact", scrollName: "contact"},
      ],
      updateBoxActive = () => {console.log("click to sidebar!!!")},
    } = this.props;
    return (
      <div style={style} className={classes.sidenav}>
        <div className="container">
          <ul className={classes.sidenavCt}>
            {navList.map((item, index) => (
              <li
                key={index}
                onClick={() => updateBoxActive(item.scrollName)}
                className={[classes.item, boxActive === item.scrollName ? 'active' : ''].join(' ')}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const styles = {
  sidenav: {
    // background: 'var(--secondary)',
    background: 'rgba(255, 255, 255, 0.95)',
    borderTop: '1px solid #e5e5e5',
    borderBottom: '1px solid #e5e5e5',
  },
  sidenavCt: {
    display: 'flex',
    position: 'relative',
    marginBottom: 0,
  },
  item: {
    position: 'relative',
    lineHeight: '45px',
    padding: '0.25rem 1.25rem 0',
    borderRight: '1px solid #e5e5e5',
    fontWeight: 500,
    color: 'var(--secondary)',
    cursor: 'pointer',
    '&.active': {
      cursor: 'default',
      color: 'var(--primary)',
    },
  },
};

export default injectSheet(styles)(NavSecondary);
