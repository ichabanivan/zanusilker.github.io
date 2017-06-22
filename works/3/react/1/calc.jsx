/**
 * Created by Dellzand on 24.09.2016.
 */

var Calculator = React.createClass({
  getInitialState: function() {
    return {
      a: 0,
      b: 0,
      d: 0
    };
  },

  handleSearchA: function (event) {
    let a = event.target.value || 0;
    console.log(a);
    this.setState({
        a: a
    })
  },

  handleSearchB: function (event) {
    let b = event.target.value || 0;
    console.log(b);
    this.setState({
      b: b
    })
  },

  plus: function (){
    var d = +this.state.a + +this.state.b;
    this.setState({
      d: d
    });
    return d;
  },

  minus: function (){
    var d = +this.state.a - +this.state.b;
    this.setState({
      d: d
    });
    return d;
  },

  multiply: function (){
    var d = +this.state.a * +this.state.b;
    this.setState({
      d: d
    });
    return d;
  },

  unmultiply: function (){
    var d = +this.state.a / +this.state.b;
    this.setState({
      d: d
    });
    return d;
  },

  render: function () {
    return <div className="calc">
      <input type="text" className="search" onChange={this.handleSearchA}/>
      <input type="text" className="search" onChange={this.handleSearchB}/>
      <button onClick={this.plus}>+</button>
      <button onClick={this.minus}>-</button>
      <button onClick={this.multiply}>*</button>
      <button onClick={this.unmultiply}>/</button>
      <div className="result">
        {
        this.state.d
        }
      </div>
      {/*<Minus type="button" a={this.state.a} b={this.state.b} value="+" />*/}
    </div>
  }
});
// console.log(this)
var Plus = React.createClass({
  render: function () {
    return <div className="result">
      {
        +this.props.a + +this.props.b
      }
    </div>

  }
});

var Minus = React.createClass({
  render: function () {
    return <div className="result">
      {
        +this.props.a - +this.props.b
      }
    </div>

  }
});

var Multiply = React.createClass({
  render: function () {
    return <div className="result">
      {
        +this.props.a * +this.props.b
      }
    </div>

  }
});

var Divided = React.createClass({
  render: function () {
    return <div className="result">
      {
        +this.props.a / +this.props.b
      }
    </div>

  }
});

ReactDOM.render(
<Calculator />,
document.getElementById('content')
);