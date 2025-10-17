//e.	Write a React program to display text using String literals
// Reusable component that builds a string from props
const UserInfo = ({ firstName, lastName, age, city }) => {
  const fullName = `${firstName} ${lastName}`;
  // Conditional message based on age
const message = age ? `Hello, my name is ${fullName}. I am ${age} years old and I live in ${city}.`
    : `Hello, my name is ${fullName}. Age information is not available.`;

  return (
    <div style={{ marginBottom: '20px' }}>
      <p>{message}</p>
    </div>
  );
};
// Main  component
const Dynstrliterals = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>User Info Display (Props + Template Literals)</h1>
      {/* Reusing the component with different props */}
      <UserInfo firstName="Rajasekhar" lastName="Kummari" age={22} city="Kurnool" />
      <UserInfo firstName="Keerthi" lastName="Kummithi"  city="Kambaladine " />
      <UserInfo firstName="Meghana" lastName="Kannari" age={20} city="Yamuganur" />
    </div>
  );
};
export default Dynstrliterals;