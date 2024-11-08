import { useState } from 'react'
import Navbar from './components/Navbar';
import CodeDisplay from './components/CodeDisplay';
import ProjectList from './components/ProjectList';

function App() {
  const sampleCode = `
  String introduceMyself() {
    Person aboutMe = new Person();
    aboutMe.setName("John Charles T. Garcia");
    aboutMe.setCollegeYear("4th year Computer Science student");
    aboutMe.setUniversity("Pamantasan ng Cabuyao / University of Cabuyao");
    aboutMe.setSkills(List.of("Java", "C++", "Python", "React", "Android Development", "Data Science", "Game Development"));
    aboutMe.setHobbies(List.of("Coding", "Watching Movies", "Taking walks"));
    aboutMe.setAspiration("To build innovative software that makes a positive impact.");

    return aboutMe;
}
  `;

  const projects = [
    {
      title: "CUM Lang",
      description: "A toy programming language that I developed",
      github: "https://github.com/JCharls1/CUMLang",
      live: "https://cum-lang.vercel.app/",
    },
    {
      title: "Brain Duck Cipher",
      description: "An Encryption algorithm that I created.",
      github: "https://github.com/JCharls1/Encrypts-project",
      live: "https://encrypts-project.vercel.app/",
    },
    {
      title: "Tic Tac Toe",
      description: "Tic Tac Toe made in Godot Game Engine.",
      github: "https://github.com/JCharls1/TicTacToeHTTPS",
      live: "https://absol12.itch.io/tictactoeminimax",
    },
    {
      title: "Sudoku",
      description: "Sudoku game that uses backtracking algorithm to be automatically solved.",
      github: "https://github.com/JCharls1/Sudoku",
      live: "https://absol12.itch.io/sudoku",
    },
    {
      title: "Ecosystem",
      description: "An Ecosystem simulation made in Godot Game Engine",
      github: "https://github.com/JCharls1/Ecosystem",
      live: "https://www.youtube.com/watch?v=xixZWa0qRIA&t=4s",
    },
    {
      title: "Tic Tac Toe API",
      description: "A serverless function that you can send a 1 Dimensional array representing a tictactoe board and it will return the best move for that board",
      github: "https://github.com/JCharls1/TicTacToe_API",
      live: "https://test-server-1-git-main-jcharls1s-projects.vercel.app/",
    },
    
  ];

  return (
    <>
       <div className="bg-darkGreen min-h-screen text-white">
        <Navbar />
        <br />
        <CodeDisplay
        name="Hello, World!"
        code={sampleCode}
        language="javascript"
        />
        <br />
        <ProjectList projects={projects} />
        <br />
      </div>
    </>
  )
}

export default App
