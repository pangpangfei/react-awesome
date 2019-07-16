import React, { PureComponent } from 'react';

const deepClone = obj => JSON.parse(JSON.stringify(obj));

class RubiksCube extends PureComponent {
  state = {
    order: ['front', 'right', 'back', 'left', 'top', 'bottom'],
    current: [[
      'f-1-1', 'f-2-2', 'f-1-3',
      'f-2-4', 'f-3-5', 'f-2-6',
      'f-1-7', 'f-2-8', 'f-1-9'
    ], [
      'r-1-1', 'r-2-2', 'r-1-3',
      'r-2-4', 'r-3-5', 'r-2-6',
      'r-1-7', 'r-2-8', 'r-1-9'
    ], [
      'ba-1-1', 'ba-2-2', 'ba-1-3',
      'ba-2-4', 'ba-3-5', 'ba-2-6',
      'ba-1-7', 'ba-2-8', 'ba-1-9'
    ], [
      'l-1-1', 'l-2-2', 'l-1-3',
      'l-2-4', 'l-3-5', 'l-2-6',
      'l-1-7', 'l-2-8', 'l-1-9'
    ], [
      't-1-1', 't-2-2', 't-1-3',
      't-2-4', 't-3-5', 't-2-6',
      't-1-7', 't-2-8', 't-1-9'
    ], [
      'bo-1-1', 'bo-2-2', 'bo-1-3',
      'bo-2-4', 'bo-3-5', 'bo-2-6',
      'bo-1-7', 'bo-2-8', 'bo-1-9'
    ]],
    timer: 1
  }

  taskQueue = (() => {
    let index = 0;
    const queue = [];

    const execution = em => {
      if(!queue[index]) {
        return;
      }
      if(em && index < queue.length - 1) {
        return;
      }
      this.queueTimer = setTimeout(() => {
        queue[index]();
        index++;
        execution();
      }, this.state.timer);
    };
  
    const emit = func => {
      queue.push(func);
      execution(true);
    };
  
    return {
      emit,
      execution
    };
  })();

  frontTopLeft = () => {
    const { current } = this.state;
    const copyCurrent = JSON.parse(JSON.stringify(current));
    copyCurrent[0] = [...current[1].slice(0, 3), ...copyCurrent[0].slice(3)];
    copyCurrent[1] = [...current[2].slice(0, 3), ...copyCurrent[1].slice(3)];
    copyCurrent[2] = [...current[3].slice(0, 3), ...copyCurrent[2].slice(3)];
    copyCurrent[3] = [...current[0].slice(0, 3), ...copyCurrent[3].slice(3)];
    this.rotate(copyCurrent, current, 4);
    return new Promise(resolve => {
      this.setState({
        current: copyCurrent
      }, () => {
        resolve();
      });
    });
  }

  frontBottomLeft = () => {
    const { current } = this.state;
    const copyCurrent = deepClone(current);
    copyCurrent[0] = [...copyCurrent[0].slice(0, 6), ...current[1].slice(6)];
    copyCurrent[1] = [...copyCurrent[1].slice(0, 6), ...current[2].slice(6)];
    copyCurrent[2] = [...copyCurrent[2].slice(0, 6), ...current[3].slice(6)];
    copyCurrent[3] = [...copyCurrent[3].slice(0, 6), ...current[0].slice(6)];
    this.rotate(copyCurrent, current, 5);
    this.rotate(copyCurrent, deepClone(copyCurrent), 5);
    this.rotate(copyCurrent, deepClone(copyCurrent), 5);
    return new Promise(resolve => {
      this.setState({
        current: copyCurrent
      }, () => {
        resolve();
      });
    });
  }

  frontLeftTop = () =>  {
    const { current } = this.state;
    const copyCurrent = deepClone(current);

    copyCurrent[0] = [
      current[5][0], 
      ...copyCurrent[0].slice(1, 3),
      current[5][3], 
      ...copyCurrent[0].slice(4, 6),
      current[5][6], 
      ...copyCurrent[0].slice(7, 9)
    ];
    copyCurrent[2] = [
      ...copyCurrent[2].slice(0, 2), 
      current[4][6],
      ...copyCurrent[2].slice(3, 5), 
      current[4][3],
      ...copyCurrent[2].slice(6, 8), 
      current[4][0]
    ];
    copyCurrent[4] = [
      current[0][0], 
      ...copyCurrent[4].slice(1, 3),
      current[0][3], 
      ...copyCurrent[4].slice(4, 6),
      current[0][6], 
      ...copyCurrent[4].slice(7, 9)
    ];
    copyCurrent[5] = [
      current[2][8], 
      ...copyCurrent[5].slice(1, 3),
      current[2][5], 
      ...copyCurrent[5].slice(4, 6),
      current[2][2], 
      ...copyCurrent[5].slice(7, 9)
    ];
    
    this.rotate(copyCurrent, current, 3);
    this.rotate(copyCurrent, deepClone(copyCurrent), 3);
    this.rotate(copyCurrent, deepClone(copyCurrent), 3);
    return new Promise(resolve => {
      this.setState({
        current: copyCurrent
      }, () => {
        resolve();
      });
    });
  }

  frontRightTop = () =>  {
    const { current } = this.state;
    const copyCurrent = deepClone(current);

    copyCurrent[0] = [
      ...copyCurrent[0].slice(0, 2),
      current[5][2], 
      ...copyCurrent[0].slice(3, 5),
      current[5][5],
      ...copyCurrent[0].slice(6, 8),
      current[5][8]
    ];
    copyCurrent[0] = [
      ...copyCurrent[0].slice(0, 2),
      current[5][2], 
      ...copyCurrent[0].slice(3, 5),
      current[5][5],
      ...copyCurrent[0].slice(6, 8),
      current[5][8]
    ];
    copyCurrent[2] = [
      current[4][8], 
      ...copyCurrent[2].slice(1, 3),
      current[4][5], 
      ...copyCurrent[2].slice(4, 6),
      current[4][2], 
      ...copyCurrent[2].slice(7, 9)
    ];
    copyCurrent[4] = [
      ...copyCurrent[4].slice(0, 2),
      current[0][2], 
      ...copyCurrent[4].slice(3, 5),
      current[0][5],
      ...copyCurrent[4].slice(6, 8),
      current[0][8]
    ];
    copyCurrent[5] = [
      ...copyCurrent[5].slice(0, 2),
      current[2][6], 
      ...copyCurrent[5].slice(3, 5),
      current[2][3],
      ...copyCurrent[5].slice(6, 8),
      current[2][0]
    ];
    
    this.rotate(copyCurrent, current, 1);
    return new Promise(resolve => {
      this.setState({
        current: copyCurrent
      }, () => {
        resolve();
      });
    });
  }

  frontRotate = () =>  {
    const { current } = this.state;
    const copyCurrent = deepClone(current);

    copyCurrent[1] = [
      current[5][2], 
      ...copyCurrent[1].slice(1, 3),
      current[5][1], 
      ...copyCurrent[1].slice(4, 6),
      current[5][0], 
      ...copyCurrent[1].slice(7, 9)
    ];

    copyCurrent[3] = [
      ...copyCurrent[3].slice(0, 2), 
      current[4][8],
      ...copyCurrent[3].slice(3, 5), 
      current[4][7],
      ...copyCurrent[3].slice(6, 8), 
      current[4][6]
    ];

    copyCurrent[4] = [
      ...copyCurrent[4].slice(0, 6), 
      current[1][0],
      current[1][3],
      current[1][6]
    ];

    copyCurrent[5] = [
      current[3][2],
      current[3][5],
      current[3][8],
      ...copyCurrent[5].slice(3)
    ];

    this.rotate(copyCurrent, current, 0);
    this.rotate(copyCurrent, deepClone(copyCurrent), 0);
    this.rotate(copyCurrent, deepClone(copyCurrent), 0);

    return new Promise(resolve => {
      this.setState({
        current: copyCurrent
      }, () => {
        resolve();
      });
    });
  }

  backRotate = () => {
    const { current } = this.state;
    const copyCurrent = deepClone(current);

    copyCurrent[1] = [
      ...copyCurrent[1].slice(0, 2), 
      current[5][8],
      ...copyCurrent[1].slice(3, 5), 
      current[5][7],
      ...copyCurrent[1].slice(6, 8), 
      current[5][6]
    ];

    copyCurrent[3] = [
      current[4][2], 
      ...copyCurrent[3].slice(1, 3),
      current[4][1], 
      ...copyCurrent[3].slice(4, 6),
      current[4][0], 
      ...copyCurrent[3].slice(7, 9)
    ];

    copyCurrent[4] = [
      current[1][2], 
      current[1][5], 
      current[1][8], 
      ...copyCurrent[4].slice(3)
    ];

    copyCurrent[5] = [
      ...copyCurrent[5].slice(0, 6),
      current[3][0], 
      current[3][3], 
      current[3][6]
    ];

    this.rotate(copyCurrent, current, 2);

    return new Promise(resolve => {
      this.setState({
        current: copyCurrent
      }, () => {
        resolve();
      });
    });
  }

  rotate(copyCurrent, current, index) {
    copyCurrent[index][0] = current[index][0 + 6];
    copyCurrent[index][1] = current[index][1 + 2];
    copyCurrent[index][2] = current[index][2 - 2];
    copyCurrent[index][3] = current[index][3 + 4];
    copyCurrent[index][4] = current[index][4 + 0];
    copyCurrent[index][5] = current[index][5 - 4];
    copyCurrent[index][6] = current[index][6 + 2];
    copyCurrent[index][7] = current[index][7 - 2];
    copyCurrent[index][8] = current[index][8 - 6];
  }

  radom = () => {
    const arr = ['frontTopLeft', 'frontBottomLeft', 'frontLeftTop', 'frontRightTop', 'frontRotate', 'backRotate'];
    new Array(50).fill('').forEach(() => {
      this.taskQueue.emit(this[arr[parseInt(Math.random() * 6)]]);
    });
  }

  find = target => {
    target = target.match(/[a-zA-Z]+-\d/)[0];
    const { current } = this.state;
    const result = [];
    current.forEach((item, pi) => {
      item.forEach((item, i) => {
        if(item.startsWith(target)) {
          result.push([pi, i]);
        }  
      });
    });
    return result;
  }

  rocovery = () => {
    this.firstStep();
  }

  firstStep = () => {
    const { current } = this.state;
    const pos = this.find('bo-2');
    for(let i = 0; i < pos.length; i++) {
      const item = pos[i];
      const [j, h] = item;
      if(j === 4) {
        continue;
      }
      const obj = {
        0: {
          topIndex: 7, 
          bottomIndex: 1, 
          roateMethod: this.frontRotate,
          3: { topIndex: 3, method: this.frontLeftTop, repeat: 1},
          5: { topIndex: 5, method: this.frontRightTop, repeat: 1}
        },
        1: {
          topIndex: 5, 
          bottomIndex: 5, 
          roateMethod: this.frontRightTop,
          3: { topIndex: 7, method: this.frontRotate, repeat: 1},
          5: { topIndex: 1, method: this.backRotate, repeat: 1}
        },
        2: {
          topIndex: 1, 
          bottomIndex: 7, 
          roateMethod: this.backRotate,
          3: { topIndex: 5, method: this.frontRightTop, repeat: 3},
          5: { topIndex: 3, method: this.frontLeftTop, repeat: 3}
        },
        3: {
          topIndex: 3, 
          bottomIndex: 3, 
          roateMethod: this.frontLeftTop,
          3: { topIndex: 1, method: this.backRotate, repeat: 3},
          5: { topIndex: 7, method: this.frontRotate, repeat: 3}
        }
      };
      const currentObj = obj[j];
      if(currentObj) {
        const verObj = currentObj[h];
        if(verObj) {
          if(current[4][verObj.topIndex].startsWith('bo-2')) {
            this.taskQueue.emit(this.frontTopLeft);
            this.taskQueue.emit(this.firstStep);
            return;
          }
          new Array(verObj.repeat).fill('').forEach(item => {
            this.taskQueue.emit(verObj.method);
          });
          this.taskQueue.emit(this.firstStep);
          return;
        }
        if([1, 7].includes(h)) {
          if(current[4][currentObj.topIndex].startsWith('bo-2')) {
            this.taskQueue.emit(this.frontTopLeft);
            this.taskQueue.emit(this.firstStep);
            return;
          }
          this.taskQueue.emit(currentObj.roateMethod);
          this.taskQueue.emit(this.firstStep);
          return;
        }
      }
      if(j === 5) {
        const obj = {
          1: {index: 7, mtehod: this.frontRotate},
          3: {index: 3, mtehod: this.frontLeftTop},
          5: {index: 5, mtehod: this.frontRightTop},
          7: {index: 1, mtehod: this.backRotate}
        };
        const currentObj = obj[h];
        if(currentObj) {
          if(current[4][currentObj.index].startsWith('bo-2')) {
            this.taskQueue.emit(this.frontTopLeft);
            this.taskQueue.emit(this.firstStep);
            return;
          }
          this.taskQueue.emit(currentObj.mtehod);
          this.taskQueue.emit(currentObj.mtehod);
          this.taskQueue.emit(this.firstStep);
          return;
        }
      }
    }
    console.log('frist step finish');
    this.secondStep();
  }

  secondStep = () => {
    const { current } = this.state;
    const obj = {
      0: {start: 'f-', index: 7, method: this.frontRotate},
      1: {start: 'r-', index: 5, method: this.frontRightTop},
      2: {start: 'ba-', index: 1, method: this.backRotate},
      3: {start: 'l-', index: 3, method: this.frontLeftTop}
    };
    const finished = current[5].filter(item => item.startsWith('bo-2')).length;
    for(let i = finished; i < 4; i++) {
      if(current[i][1].startsWith(obj[i].start)) {
        this.taskQueue.emit(obj[i].method);
        this.taskQueue.emit(obj[i].method);
        this.taskQueue.emit(this.secondStep);
        return;
      } else {
        this.taskQueue.emit(this.frontTopLeft);
        this.taskQueue.emit(this.secondStep);
        return;
      }
    }

    console.log('second step finish');
    this.thirdStep();
  }

  thirdStep = () => {
    const target = this.find('bo-1');
    console.log(target);
  }

  render () {
    const { order, current } = this.state;
    const w = 54;
    const m = 2;
    return (
      <div className="rubiks-cube">
        <div className="control">
          <button onClick={this.frontTopLeft}>front_top_left</button>
          <button onClick={this.frontBottomLeft}>front_bottom_left</button>
          <button onClick={this.frontLeftTop}>front_left_top</button>
          <button onClick={this.frontRightTop}>front_right_top</button>
          <button onClick={this.frontRotate}>front_rotate</button>
          <button onClick={this.backRotate}>back_rotate</button>
          <button onClick={this.radom}>radom</button>
          <button onClick={this.rocovery}>rocovery</button>
          <button onClick={() => { clearTimeout(this.queueTimer); }}>pause</button>
          <button onClick={() => { this.taskQueue.execution(); }}>start</button>
        </div>
        <div className="main">
          {order.map((item, index) => 
            <div className={`${item} square-wrap`} key={item}>
              {current[index].map((item, index) => 
                <div 
                  className={`${item} square`} 
                  key={item + index}
                  onClick={this.find.bind(this, item)}
                >{item}</div>
              )}
            </div>
          )}
        </div>
        <style jsx>{`
            .control {
              position: fixed;
              top: 50px;
              left: 50px;
              display: flex;
              flex-direction: column;
            }
            .control button {
              padding: 10px;
              margin-bottom: 10px;
            }
            .rubiks-cube {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100vw;
              height: 100vh;
            }
            .square-wrap {
              display: flex;
              flex-wrap: wrap;
              width: ${(w + m * 2) * 3}px;
            }
            .square {
              display: flex;
              justify-content: center;
              align-items: center;
              width: ${w}px;
              height: ${w}px;
              margin: ${m}px;
            }
            .main {
              position: relative;
              transform: translate(-100px, -100px);
            }
            .front {
              position: absolute;
              top: 0;
              left: 0;
            }
            .back {
              position: absolute;
              top: 0;
              left: ${(w + m * 2) * 3 * 2}px;
            }
            .right {
              position: absolute;
              top: 0;
              left: ${(w + m * 2) * 3 * 1}px;
            }
            .left {
              position: absolute;
              top: 0;
              left: ${(w + m * 2) * 3 * -1}px;
            }
            .top {
              position: absolute;
              top: ${(w + m * 2) * 3 * -1}px;
              left: 0;
            }
            .bottom {
              position: absolute;
              top: ${(w + m * 2) * 3 * 1}px;
              left: 0;
            }
            [class*="f-"] {
              background-color: pink;
            }
            [class*="ba-"] {
              background-color: black;
              color: #fff;
            }
            [class*="l-"] {
              background-color: yellow;
            }
            [class*="r-"] {
              background-color: blue;
            }
            [class*="t-"] {
              background-color: red;
            }
            [class*="bo-"] {
              background-color: green;
            }
        `}</style>
      </div>
    );
  }
}

export default RubiksCube;
