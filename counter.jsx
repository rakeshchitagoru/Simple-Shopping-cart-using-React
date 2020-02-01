import React, { Component } from "react";

class Counter extends Component {
  /*state = {
    value: this.props.counter.value // delete this local state and also it's references
  };*/

  /* renderTags() {
    if(this.state.tags.length === 0) return <p>There are no tags!</p>;

    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  }*/

  /*constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/

  /*handleIncrement = product => {    // As a local state no longer exists, we can this too as it is the reference
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };*/

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div> //bootstrap classes
    );
  }

  /* {this.state.tags.length === 0 && "Please create a new tag"}
     {this.renderTags()}// these can be written in div class*/

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary"; //Rendering classes dynamically
    return classes;
  }

  formatCount() {     // method to check the value of count property
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
