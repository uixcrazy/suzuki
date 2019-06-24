import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _debounce from "lodash.debounce";
import { withStyles } from '@material-ui/styles';
import { StickyContainer, Sticky } from 'react-sticky';
import { Element, scroller } from 'react-scroll';

import Nav from './Nav';
import Box from './Box';
import About from './About';
import Design from './Design';

import styles from './Index.style';

const dataNavigation = [
  {
    scrollName: "about",
    name: "Về ...",
  },
  {
    scrollName: "design",
    name: "Thiết kế",
  },
];
const listCps = [About, Design ];
const data = dataNavigation.map((item, index) => {
  return ({
    id: item.scrollName,
    name: item.name,
    component: listCps[index],
  })
})

class Index extends Component {
  router = {};

  state = {
    boxActive: 'about',
  }

  componentDidMount() {
    this.main.addEventListener("scroll", _debounce(() => {
      this.scrollToActive();
    }, 100) // ms 300
    );
  }

  componentWillUnmount() {
    this.main.removeEventListener('scroll', this.scrollToActive);
  }

  scrollToActive = () => {
    const offset = 150;
    const headerHeight = this.props.isMobile ? 95 : 72;

    Object.keys(this.router).forEach(boxActive => {
      const crrElmnt = this.router[boxActive];
      if (crrElmnt) {
        const elmnt = ReactDOM.findDOMNode(crrElmnt);
        const currentTop = elmnt && elmnt.getBoundingClientRect().top;
        const heightElmnt = elmnt && elmnt.offsetHeight; // border
        if (currentTop > headerHeight+offset-heightElmnt && currentTop < headerHeight+offset) {
          this.setState({boxActive});
        }
      }
    })
  }

  updateBoxActive = (boxActive) => {
    scroller.scrollTo(boxActive, {
      duration: 500,
      delay: 0,
      smooth: 'easeOutQuad',
      // containerId: 'scroll-container',
      // offset: -5,
    })
    this.setState({boxActive});
  }

  render() {
    const {
      isMobile,
      classes,
    } = this.props;

    const { boxActive } = this.state;

    // page-banner

    return (
      <StickyContainer
        style={{
          height: '1500px',
          background: '#ddd',
        }}
      >
        <Sticky>
          {({ style }) => (
            <Nav
              style={{...style,...{zIndex: 10}}}
              boxActive={boxActive}
              navList={dataNavigation}
              updateBoxActive={this.updateBoxActive}
            />
          )}
        </Sticky>

        <div
          id="scroll-container"
          ref={DOM => this.main = DOM}
          className={[classes.main, isMobile ? "isMobile" : "", "scroll-vertical"].join(" ")}
          >
          {data.map(box => {
            const BoxContent = box.component;
            return (
              <Element
                name={box.id}
                key={box.id}
                ref={DOM => this.router[box.id] = DOM}>
                <div className="container">
                  <Box isCurrent={box.id === boxActive} isMobile={isMobile}>
                    <BoxContent isMobile={isMobile}/>
                  </Box>
                </div>
              </Element>
            )
          })}
        </div>
      </StickyContainer>
    )
  }
}

Index.propTypes = {
  isMobile: PropTypes.bool,
};

Index.defaultProps = {
  isMobile: false,
}

export default withStyles(styles)(Index);
