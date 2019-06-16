
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import NextLink from 'next/link';

const useStyles = makeStyles(theme => ({
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color: 'rgba(0, 0, 0, 0.87)',
    textDecoration: 'none',
  },
}));

const sections = [
  {
    href: '/Technology',
    label: 'Technology',
  },
  {
    href: '/Design',
    label: 'Design',
  },
  {
    href: '/Business',
    label: 'Business',
  },
  {
    href: '/Culture',
    label: 'Culture',
  },
  {
    href: '/Politics',
    label: 'Politics',
  },
  {
    href: '/Health',
    label: 'Health',
  },
  {
    href: '/Travel',
    label: 'Travel',
  },
];

const Nav = props => {
  const classes = useStyles();
  return (
    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      {sections.map(section => (
        <Link
          color="inherit"
          noWrap
          key={section}
          variant="body2"
          component={NextLink}
        >
          <NextLink href={section.href}>
            <a className={classes.toolbarLink}>
              {section.label}
            </a>
          </NextLink>
        </Link>
      ))}
    </Toolbar>
  );
};

export default Nav;
