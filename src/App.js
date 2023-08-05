import './App.css';

const Person = () => {
  return (
    <>
    <h1> First name: Saad</h1>
    <h1> Last name: Sherazi</h1>
    <h1> Age: 23</h1>
    </>
  )
}


const App = () => {
  const name = "Hamza";
  const nameShowing = false;

  return (
    <div className="App">
      <h1>Hello, {nameShowing ? name : 'Stranger'}</h1>
      <Person />
    </div>
  );
}

export default App;
