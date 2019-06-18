import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <header>
      <div className="container">
        <div>
          default header!!!
        </div>
      </div>
      <div style={{ // for test
        height: 200,
        overflow: 'hidden',

      }}>
        <img
          style={{
            width: '100vw',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          src="https://images.unsplash.com/photo-1560747571-bcf9a177ac53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="suzuki nguyen duy trinh"
        />
      </div>
    </header>
  );
};

Header.propTypes = {

};

export default Header;