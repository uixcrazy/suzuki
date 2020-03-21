import React from 'react';
import withStyles from 'react-jss';
import TopMenu from '../layout/TopMenu';
import { BREADCRUMB, PATH } from '../../core/constants';

const Header = ({classes, isMobile, data}) => {
  return (
    <div className={classes.header}>
      <TopMenu isMobile={isMobile} />
      <div className={classes.breadcrumb}>
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="/"><span>Trang chủ</span></a>
            </li>
            <li>
              <a href={PATH[data.cat_id]}><span>{BREADCRUMB[data.cat_id]}</span></a>
            </li>
            <li>
              <a href={`${PATH[data.cat_id]}/${data.cat_id}`}>
                <span>{data.name}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={classes.productName}>
        <div className="container">
          <h1 className={classes.title}>{data.name_vi || data.name}</h1>
          <p className={classes.slogan}>{data.slogan}</p>
        </div>
      </div>
      {/* // page-banner */}

    </div>
  );
};

const styles = {
  mb: {},
  header: {
    position: 'relative',
    marginBottom: 10
  },
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
    // marginTop: 15,
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
};

export default withStyles(styles)(Header)
