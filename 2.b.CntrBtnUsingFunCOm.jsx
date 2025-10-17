
import React, { useState } from 'react';
 
//Step 1: Global variable to store the count
let counter = 0;
// Step 2: Class component to force re-rendering
export class ForceUpdateWrapperfuncomp extends React.Component {
  state = {}; // dummy state
  // Method to force re-render by updating dummy state
  forceReRender = () => {
    this.setState({}); // Triggers a re-render
  };
  render() {
    return (
      <CounterWithoutHooks rerender={this.forceReRender} />
    );
  }
}
// Step 3: Functional component with counter logic
 const CounterWithoutHooks = ({ rerender }) => {
  // This function runs every time the component re-renders
  const handleClick = () => {
    //Update global counter
    counter += 1;
    //Ask the parent class component to re-render
    rerender();
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2> Functional Comp Without Hooks - Counter</h2>
      <p>Count: {counter}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

