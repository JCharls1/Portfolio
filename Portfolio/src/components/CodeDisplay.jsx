// src/components/CodeDisplay.js
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight, dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeDisplay = ({ name, code, language = "javascript" }) => {
  const [theme, setTheme] = useState(solarizedlight);

  // Function to toggle between themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === solarizedlight ? dracula : solarizedlight));
  };

  return (
    <div className="p-4 bg-shgreen text-white rounded-lg shadow-lg w-full max-w-screen-lg mx-auto">
      <h2 className="flex justify-center text-2xl font-bold mb-4">{name}</h2>
      {/* <button
        onClick={toggleTheme}
        className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-1 px-2 rounded mb-4"
      >
        Toggle Theme
      </button> */}
      <SyntaxHighlighter language={language} style={theme} customStyle={{ borderRadius: '8px' }}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;
