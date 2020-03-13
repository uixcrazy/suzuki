import React from 'react';
import injectSheet from 'react-jss';

export class NavSecondary extends React.Component {
  render() {
    const {
      isMobile,
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
      <div style={style} className={`${classes.sidenav} ${isMobile ? 'mb' : ''}`}>
        <div className="container">
          <ul className={classes.sidenavCt}>
            {navList.map((item, index) => (
              <li
                key={index}
                onClick={() => updateBoxActive(item.scrollName)}
                className={[classes.item, boxActive === item.scrollName ? 'active' : '', isMobile ? 'mb' : '', item.classSpc].join(' ')}
                dangerouslySetInnerHTML={{ __html: item.name }}
              />
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
    '&.mb': {
      fontSize: 14,
    }
  },
  sidenavCt: {
    display: 'flex',
    position: 'relative',
    marginBottom: 0,
  },
  item: {
    position: 'relative',
    padding: '0.75rem 1.25rem',
    borderRight: '1px solid #e5e5e5',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 500,
    color: 'var(--secondary)',
    cursor: 'pointer',
    '&.mb': {
      padding: '0.25rem 0.75rem',
    },
    '&.active': {
      cursor: 'default',
      color: 'var(--primary)',
    },
    '&:last-child ': {
      borderRight: 0,
    },
    // classSpc
    '&.laithu': {
      background: '#2776b0',
      color: '#fff',
      '&.active': {
        background: "#00adef",
      }
    }
  },

};

export default injectSheet(styles)(NavSecondary);
