import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _debounce from 'lodash.debounce';
import { StickyContainer, Sticky } from 'react-sticky';
import { Element, scroller } from 'react-scroll';

import NavSecondary from '../layout/NavSecondary';
import Article from './Article';

export default class Index extends React.Component {
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
      offset: -45,
    })
    this.setState({boxActive});
  }

  render() {
    const {
      isMobile,
      data,
    } = this.props;
    const { boxActive } = this.state;

    const dataNavigation = [
      {
        id: "about",
        name: `Về ${data.name}`,
        component: Article,
      },
      {
        id: "specifications",
        name: "Thông số kỹ thuật",
        component: Article,
      },
    ];

    return (
      <StickyContainer>
        <Sticky>
          {({ style }) => (
            <NavSecondary
              style={{...style,...{zIndex: 10}}}
              boxActive={boxActive}
              navList={dataNavigation.map(item=>({scrollName: item.id, name: item.name}))}
              updateBoxActive={this.updateBoxActive}
            />
          )}
        </Sticky>
        <div
          id="scroll-container"
          ref={DOM => this.main = DOM}
          className={[isMobile ? "isMobile" : "", "scroll-vertical"].join(" ")}
          >
          {dataNavigation.map(box => {
            const Content = box.component;
            return (
              <Element
                name={box.id}
                key={box.id}
                ref={DOM => this.router[box.id] = DOM}>
                <div className="container">
                  <Content isMobile={isMobile} data={data[box.id]}/>
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
