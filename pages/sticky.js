import React from "react";
import { StickyContainer, Sticky } from 'react-sticky';

let renderCount = 0;


export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Content before the Sticky...</h2>
        <div
          className="gap short"
          style={{
            height: '250px',
            background: 'linear-gradient(rgb(255, 255, 255), rgb(221, 221, 221))',
          }}
        />
        <StickyContainer className="container" style={{
          height: '1500px',
          background: '#ddd',
        }}>
          <Sticky>
            {({ style }) => (
              <div style={style}>
                sticky
                {renderCount++}
                </div>
            )}
          </Sticky>

          <h2 className="text-center">{"<StickyContainer />"}</h2>
        </StickyContainer>
        <div
          className="gap tall"
          style={{ background: "linear-gradient(#ddd, #fff)",
          height: '1000px',
         }}
        >
          <h2>Content after the Sticky...</h2>
        </div>
      </div>
    );
  }
}