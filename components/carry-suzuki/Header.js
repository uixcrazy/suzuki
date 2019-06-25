import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from '../layout/TopMenu';
// import Banner from './Banner';

const useStyles = makeStyles(theme => ({
  mb: {},
  header: {
    boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)',
    position: 'relative',
  },
  // banner: {
  //   height: 450,
  //   '&$mb': {
  //     height: 320,
  //   }
  // },
  breadcrumb: {
    backgroundColor: '#efefef',
    '& ul': {
      marginBottom: '0',
      listStyle: 'none',
      padding: '10px 0',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      display: 'flex',
      '& li': {
        paddingRight: 10,
        fontSize: '14px',
        '& a': {
          color: '#999',
          textDecoration: 'none',
          position: 'relative',
          fontWeight: '300',
        },
        '&:last-child a': {
          color: '#333',
        },
      },
      '& li+li:before': {
        content: '"›"',
        marginRight: 10,
        color: '#999',
    }
    },
  },
  productName: {
    marginTop: 20,
  },
  title: {
    color: 'var(--secondary)',
    margin: 0,
    fontSize: '2rem',
  },
  slogan: {
    color: '#999',
    fontSize: 16,
  }

}));

const Header = props => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <TopMenu isMobile={props.isMobile} />
      <div className={classes.breadcrumb}>
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="/"><span>Trang chủ</span></a>
            </li>
            <li>
              <a href="/"><span>Xe tải nhỏ Suzuki</span></a>
            </li>
            <li>
              <a href="/xe-tai-nho/suzuki/blind-van">
                <span>Blind Van</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={classes.productName}>
        <div className="container">
          <h1 className={classes.title}>Suzuki Blind Van</h1>
          <p className={classes.slogan}>Kinh tế - Hiệu quả - Bền Bỉ</p>
        </div>
      </div>


      {/*
      <div className={`${classes.banner} ${props.isMobile ? classes.mb : ''}`}>
        page-banner here!
      <Banner isMobile={props.isMobile}/>
      </div>
  */}
    </header>
  );
};

export default Header;
