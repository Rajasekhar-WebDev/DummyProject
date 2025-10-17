//c.Write a React program to handle the button click events in functional component
import React from 'react'; 
// Global variable to simulate state
let showMessage = false;
// Class component to force re-render
export class Btnclkevnts extends React.Component {
  forceReRender = () => {
    this.setState({}); // Dummy update to trigger render
  };
  render() {
    return <ToggleMessage rerender={this.forceReRender} />;
  }
}
// Functional component with button click logic
const ToggleMessage = ({ rerender }) => {
  const handleClick = () => {
    showMessage = !showMessage; // Toggle the message
    rerender(); // Force parent to re-render
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Toggle Message Without Hooks</h2>
      <button onClick={handleClick}>Toggle Message</button>
      <p>{showMessage ? 'Hello, world!' : ''}</p>
    </div>
  );
};


// User clicks "Toggle Message"
// Global variable showMessage toggles between true and false
// rerender() is called to force the parent class to re-render
// ToggleMessage re-executes, and message visibility changes