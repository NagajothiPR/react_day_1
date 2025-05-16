import React, { useState } from 'react';
import './App.css';

// --- Task Components ---
const MessageComponent = () => <p>This is a basic functional component.</p>;
const UserGreeting = ({ name }) => <p>Hello, {name}!</p>;
const Child1 = () => <p>I'm Child 1</p>;
const Child2 = () => <p>I'm Child 2</p>;
const ParentComponent = () => (
  <div>
    <h4>I'm the Parent Component</h4>
    <Child1 />
    <Child2 />
  </div>
);

// --- Mini Projects ---
const PersonalBio = ({ name, age, bio }) => (
  <div className="bio-container">
    <h2>{name}</h2>
    <p>Age: {age}</p>
    <p>{bio}</p>
  </div>
);

const Greeting = ({ name }) => {
  const style = {
    backgroundColor: 'skyblue',
    padding: '10px',
    borderRadius: '8px',
    color: '#333',
    textAlign: 'center',
    marginBottom: '1rem',
    width: '400px',
    margin: '0 auto',
  };
  return <h3 style={style}>Hello, {name}!</h3>;
};

const CounterUI = () => (
  <div className="counter-box">
    <h2>Count : 0</h2>
    <button>Increase</button>
  </div>
);

const HobbiesList = ({ hobbies }) => (
  <div className="hobby-section">
    <h3>My Hobbies</h3>
    <ul className="hobby-list">
      {hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
    </ul>
  </div>
);

function App() {
  const [selectedItem, setSelectedItem] = useState('');

  const handleChange = (e) => {
    setSelectedItem(e.target.value);
  };

  return (
    <div className="App">
      <h1>React Tasks & Mini Projects</h1>
      <select onChange={handleChange} value={selectedItem}>
        <option value="">-- Select --</option>
        {[...Array(13)].map((_, i) => (
          <option key={i} value={`task${i + 1}`}>Task {i + 1}</option>
        ))}
        <option value="mini1">Mini Project 1: Personal Bio</option>
        <option value="mini2">Mini Project 2: Greeting</option>
        <option value="mini3">Mini Project 3: Counter UI</option>
        <option value="mini4">Mini Project 4: Hobbies List</option>
      </select>

      <div className="project-display">
        {selectedItem === 'task1' && (
          <>
            <h3>What is React?</h3>
            <p>React is a JavaScript library used for building fast and interactive user interfaces, especially for single-page applications. It allows developers to create reusable UI components.</p>
          </>
        )}
        {selectedItem === 'task2' && (
          <>
            <h3>5 Benefits of React</h3>
            <ul>
              <li>Reusable components</li>
              <li>Virtual DOM for performance</li>
              <li>Strong community support</li>
              <li>Easy to learn</li>
              <li>One-way data binding</li>
            </ul>
          </>
        )}
        {selectedItem === 'task3' && (
          <>
            <h3>ReactDOM, JSX, Components</h3>
            <ul>
              <li><strong>ReactDOM:</strong> Renders React components to the DOM.</li>
              <li><strong>JSX:</strong> Syntax extension that allows mixing HTML with JavaScript.</li>
              <li><strong>Components:</strong> Reusable building blocks of UI in React.</li>
            </ul>
          </>
        )}
        {selectedItem === 'task4' && (
          <>
            <h3>Install Node.js and Check Version</h3>
            <p>Run: <code>npm create vite@latest</code> and <code>npm -v</code></p>
          </>
        )}
        {selectedItem === 'task5' && (
          <>
            <h3>Create React App</h3>
            <code>npx create-react-app my-app</code>
          </>
        )}
        {selectedItem === 'task6' && (
          <>
            <h3>Folder Structure</h3>
            <ul>
              <li><strong>src:</strong> Main code (JSX, components)</li>
              <li><strong>public:</strong> Static files like index.html</li>
              <li><strong>node_modules:</strong> All installed packages</li>
            </ul>
          </>
        )}
        {selectedItem === 'task7' && (
          <>
            <h3>JSX Practice</h3>
            <p>Welcome to React</p>
          </>
        )}
        {selectedItem === 'task8' && (
          <>
            <h3>ReactDOM.render()</h3>
            <p>This app is rendered using ReactDOM in index.js</p>
          </>
        )}
        {selectedItem === 'task9' && (
          <>
            <h3>Task 9 - Message Component</h3>
            <MessageComponent />
          </>
        )}
        {selectedItem === 'task10' && (
          <>
            <h3>Task 10 - Props</h3>
            <UserGreeting name="Nagajothi" />
          </>
        )}
        {selectedItem === 'task11' && (
          <>
            <h3>Task 11 - Inline Styling</h3>
            <p style={{ color: 'blue' }}>This text is blue via inline CSS</p>
          </>
        )}
        {selectedItem === 'task12' && (
          <>
            <h3>Task 12 - External CSS</h3>
            <h3 className="styled-heading">This heading uses external CSS</h3>
          </>
        )}
        {selectedItem === 'task13' && (
          <>
            <h3>Task 13 - Component Composition</h3>
            <ParentComponent />
          </>
        )}

        {selectedItem === 'mini1' && (
          <>
            <h3>Mini Project 1: Personal Bio</h3>
            <PersonalBio name="Nagajothi" age={27} bio="I'm a Python fullstack student at VTS." />
          </>
        )}
        {selectedItem === 'mini2' && (
          <>
            <h3>Mini Project 2: Greeting</h3>
            <Greeting name="Nagajothi" />
          </>
        )}
        {selectedItem === 'mini3' && (
          <>
            <h3>Mini Project 3: Counter UI</h3>
            <CounterUI />
          </>
        )}
        {selectedItem === 'mini4' && (
          <>
            <h3>Mini Project 4: Hobbies</h3>
            <HobbiesList hobbies={['Reading', 'Painting', 'Stitching', 'Traveling']} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
