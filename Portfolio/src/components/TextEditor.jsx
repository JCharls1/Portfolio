import React, { useState } from "react";
import Reminder from "./Reminder";

function App() {
  const CUMLANG = import.meta.env.VITE_CUMLANG_API;
  const [inputText, setInputText] = useState("");
  const [linesArray, setLinesArray] = useState([]);
  const [serverResponse, setServerResponse] = useState(null); // State to hold the server's response

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const processTextAndSend = async () => {
    // Split input text into lines and store them in an array
    const result = inputText.split("\n").filter((line) => line.trim() !== "");
    setLinesArray([]);
    setLinesArray(result); // Update state with the processed array

    // Send the array to the server
    try {
      const response = await fetch(CUMLANG, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result), // Send the processed lines array as JSON
      });

      const serverResult = await response.json(); // Parse the response as JSON
      setServerResponse(serverResult); // Save the response to display it
    } catch (error) {
      console.error("Error sending data:", error);
      setServerResponse({ error: "Failed to connect to the server." }); // Set an error message
    }
  };

  return (
    <div className="flex justify-center flex-col">
      <textarea
        rows="10"
        cols="50"
        value={inputText}
        onChange={handleInputChange}
        placeholder="cope('Hello World')"
        className="m-10  p-2 text-black bg-silver-shit border-2 border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <br />
      <div className="flex justify-center">
        <button
          onClick={processTextAndSend}
          className="px-6 py-2 bg-darkGreen from-blue-500 to-indigo-500 text-white font-semibold rounded-lg shadow-md hover:from-indigo-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition ease-in-out duration-300"
        >
          Run Code
        </button>
      </div>

      {/* <h3>Lines Array:</h3>
      <pre>{JSON.stringify(linesArray, null, 2)}</pre> */}
      <div className="m-10">
        <h3 className="flex justify-center text-silver-shit text-3xl font-Arial">
          Output:
        </h3>
        {/* Display the server response */}
        <pre className="bg-darkGreen max-h-64 overflow-y-auto p-10">
          {serverResponse
            ? JSON.stringify(serverResponse, null, 2)
            : "The server might be sleeping if the run button is not working... please wait a few minutes and try again."}
        </pre>
      </div>
    </div>
  );
}

export default App;