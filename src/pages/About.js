import React, { useState } from 'react';
import '../App.css'; // Custom CSS for the Home page (styles)



const About = () => {
    const [inputCode, setInputCode] = useState('');
    const [output, setOutput] = useState('');
    const [activeTab, setActiveTab] = useState(0);
  
    const handleExecuteCode = () => {
      setOutput(''); // Clear output before running new code
    
      try {
        // Temporarily override console.log to capture its output
        const originalConsoleLog = console.log;
        console.log = (...args) => {
          setOutput((prevOutput) => prevOutput + args.join(' ') + '\n');
        };
    
        // Execute the predefined code directly based on the activeTab
        const currentExample = codeExamples[activeTab];
        // eslint-disable-next-line no-eval
        eval(currentExample.code); // Safely use eval for predefined code
    
        // Restore the original console.log
        console.log = originalConsoleLog;
    
      } catch (error) {
        setOutput('Error: ' + error.message);
      }
    };
    
    // Predefined code examples for the tabs
    const codeExamples = [
      {
        title: 'Say Hello',
        code: `console.log('Hello, World!');`,
      },
      {
        title: 'Random Number',
        code: `console.log('Random number between 1 and 100:', Math.floor(Math.random() * 100) + 1);`,
      },
      {
        title: 'Array Reverse',
        code: `const arr = [1, 2, 3, 4, 5]; console.log('Reversed array:', arr.reverse());`,
      },
      {
        title: 'Factorial',
        code: `function factorial(n) { return n === 0 ? 1 : n * factorial(n - 1); } console.log('Factorial of 5:', factorial(5));`,
      },
      {
        title: 'Sum of Squares',
        code: `const nums = [1, 2, 3, 4]; const sum = nums.reduce((acc, num) => acc + num * num, 0); console.log('Sum of squares:', sum);`,
      },
      {
        title: 'FizzBuzz',
        code: `for (let i = 1; i <= 15; i++) { console.log(i % 3 === 0 && i % 5 === 0 ? 'FizzBuzz' : i % 3 === 0 ? 'Fizz' : i % 5 === 0 ? 'Buzz' : i); }`,
      },
      {
        title: 'Palindrome Check',
        code: `function isPalindrome(str) { return str === str.split('').reverse().join(''); } console.log('Is "racecar" a palindrome?', isPalindrome('racecar'));`,
      },
      {
        title: 'Random Joke',
        code: `const jokes = ['Why don’t skeletons fight each other? They don’t have the guts.', 'I told my wife she was drawing her eyebrows too high. She looked surprised.']; console.log(jokes[Math.floor(Math.random() * jokes.length)]);`,
      },
      {
        title: 'Array Shuffle',
        code: `const shuffle = (array) => array.sort(() => Math.random() - 0.5); const arr = [1, 2, 3, 4, 5]; console.log('Shuffled array:', shuffle(arr));`,
      },
      {
        title: 'Count Down Timer',
        code: `let count = 10; const interval = setInterval(() => { if (count > 0) { console.log(count--); } else { clearInterval(interval); console.log('Time's up!'); } }, 1000);`,
      },
    ];
    
    // Switch to the selected code example
    const handleTabClick = (index) => {
      setActiveTab(index);
      setInputCode(codeExamples[index].code);
    };
    
    return (
      <section className="about">
        <h2>Learn More</h2>
        <p>
          I am a passionate Full-Stack Developer with a love for creating innovative solutions...
        </p>
    
        {/* Tabs for code examples */}
        <div className="tabs">
          {codeExamples.map((example, index) => (
            <div
              key={index}
              className={`tab ${index === activeTab ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {example.title}
            </div>
          ))}
        </div>
    
        {/* Console */}
        <div className="console">
          <div className="console-header">Console</div>
          <textarea
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            className="console-input"
            placeholder="Write JS code here..."
          ></textarea>
          <div onClick={handleExecuteCode} className="console-btn">Run Code</div>
    
          <div className="console-output">
            <pre>{output}</pre>
          </div>
        </div>
      </section>
    );
  };

export default About;