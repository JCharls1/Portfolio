import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Reminder = () =>{
    const codeString = `
        The server might be sleeping if the run button is not working... please wait a few seconds and try again.
    `;
    return(
        <div>
            <SyntaxHighlighter language="javascript" style={dracula}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

export default Reminder;