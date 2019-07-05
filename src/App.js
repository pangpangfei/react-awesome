import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="drag-box">
        <style jsx>{`
            .drag-box {
              width: 100vw;
              height: 100vh;
              background-color: yellow;
            }
        `}</style>
      </div>
    );
  }
}

export default App;
