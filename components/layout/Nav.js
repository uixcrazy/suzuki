import React from 'react';
import injectSheet from 'react-jss';

export class Nav extends React.Component {
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
      <div style={style}>
        <ul className={classes.sidenav}>
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
    )
  }
}

const styles = {
  sidenav: {
    display: 'flex',
    background: 'var(--secondary)',
    color: '#fff',
    position: 'relative',
  },
  item: {
    position: 'relative',
    lineHeight: '60px',
    margin: '0.25rem 1.25rem 0',
    '& button': {
      padding: '1rem 0',
    },
    '&:after, &:before': {
      content: '" "',
      position: 'absolute',
      height: '1px',
      width: '0',
      transition: 'all 0.3s ease',
    },
    '&:before': {
      top: '16px',
      left: '0',
    },
    '&:after': {
      bottom: '18px',
      right: '0',
    },
    '&.active, &:hover:not(.active)': {
      color: 'var(--color-secondary)',
      '&:before, &:after': {
        backgroundColor: 'var(--color-secondary)',
        width: 'calc(100% - 10px)',
      },
    },
    '&.active button': {
      cursor: 'default',
    },
  },
};

export default injectSheet(styles)(Nav);
