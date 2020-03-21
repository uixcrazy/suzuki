
export default {
  productItem: {
    padding: '12px',
    background: '#f5f5f5',
    border: 'none',
    marginBottom: 20,
  },
  alink: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
      '& $productName': {
        textDecoration: 'none',
        color: '#d11717',
      }
    },
  },
  productImgWrapper: {
    width: '100%',
    display: 'block',
    overflow: 'hidden',
    background: '#fff',
    '&:hover img': {
      transform: 'scale(1.08)',
    },
  },
  productImg: {
    display: 'inline-block',
    transition: 'transform 0.8s cubic-bezier(0.44, 0.185, 0.575, 0.86)',
    maxWidth: '100%',
    verticalAlign: 'middle',
    // maxHeight: '320px',
  },
  productDesc: {
    background: '#fff',
    color: '#555',
    display: 'flex',
  },
  left: {
    flex: 1,
    padding: '12px 15px',
  },
  productName: {
    marginBottom: 3,
    color: '#555',
    transition: 'all 0.5s ease',
  },
  productSlogan: {
    fontSize: '13px',
    color: '#999',
  },
  productPrice: {
    background: '#f5f5f5',
    color: '#337ab7',
    padding: '12px 10px',
    flex: 0,
    width: 120,
    height: 50,
    flexBasis: 120,
    position: 'relative',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    alignSelf: 'flex-end',
    '&:after': {
      position: 'absolute',
      top: '0px',
      left: '0px',
      content: '""',
      borderWidth: '18px',
      borderStyle: 'solid',
      // borderTopColor: 'rgba(0,0,0,0)',
      // borderLeftColor: '#d11717',
      // borderRightColor: 'rgba(0,0,0,0)',
      // borderBottomColor: '#d11717',
      borderTopColor: '#fff',
      borderLeftColor: '#fff',
      borderRightColor: 'rgba(0,0,0,0)',
      borderBottomColor: 'rgba(0,0,0,0)',
    },
  },
};
