import React from "react";

class FlipCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newNum: 0,
      oldNum: -1,
      change: true
    };
  }




  tick() {
    this.setState(
      {
        oldNum: this.state.newNum,
        newNum: this.state.oldNum + 2, // tak nado hahahaha
        change: !this.state.change
      }
    );
  }


  clear() {
    this.setState(
      {
        oldNum: -1,
        newNum: 0, // tak nado hahahaha
        change: true
      }
    );
  }

  render() {
    const { newNum, oldNum, change } = this.state;
    const animation1 = change ? "fold" : "unfold";
    const animation2 = !change ? "fold" : "unfold";
    const number1 = change ? oldNum : newNum;
    const number2 = !change ? oldNum : newNum;

    return (
      <div className={"flipCounter"}>
        <div onClick={() => { this.tick() }} className={"upperCard"}>
          <span>{newNum}</span>
        </div>
        <div onClick={() => { this.tick() }} className={"lowerCard"}>
          <span>{oldNum}</span>
        </div>
        <div onClick={() => { this.tick() }} className={`flipCard first ${animation1}`}>
          <span>{number1}</span>
        </div>
        <div onClick={() => { this.tick() }} className={`flipCard second ${animation2}`}>
          <span>{number2}</span>
        </div>

        <button onClick={() => { this.clear() }}>clear</button>
      </div>

    );
  }
}

export default FlipCounter;
