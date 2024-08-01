import React, { useState } from "react";
import "./App.css";
import MultilevelSidebar from "react-multilevel-sidebar";
import "react-multilevel-sidebar/src/Sidebar.css";

const options = [
  {
    content: [
      { id: 1, name: "JAVA", children: [
        { content: [{ id: 11, name: "Basics" }, { id: 12, name: "OOP" }, { id: 13, name: "Collections" }] },
        { content: [{ id: 14, name: "Exceptions Handling" }, { id: 15, name: "Multithreading" }, { id: 16, name: "Generics" }] },
        { content: [{ id: 17, name: "File Handling" }, { id: 18, name: "Networking" }, { id: 19, name: "GUI Development" }] }
      ] },
      { id: 2, name: "JAVASCRIPT", children: [
        { content: [{ id: 21, name: "ES6" }, { id: 22, name: "DOM Manipulation" }, { id: 23, name: "Async Programming" }] },
        { content: [{ id: 24, name: "Promises" }, { id: 25, name: "Callbacks" }, { id: 26, name: "Modules" }] },
        { content: [{ id: 27, name: "JSON Handling" }, { id: 28, name: "API Fetching" }, { id: 29, name: "Error Handling" }] }
      ] },
      { id: 3, name: "REACTJS", children: [
        { content: [{ id: 31, name: "Components" }, { id: 32, name: "State and Props" }, { id: 33, name: "Hooks" }] },
        { content: [{ id: 34, name: "Lifecycle Methods" }, { id: 35, name: "Context API" }, { id: 36, name: "Routing" }] },
        { content: [{ id: 37, name: "Forms Handling" }, { id: 38, name: "Authentication" }, { id: 39, name: "Testing" }] }
      ] },
      { id: 4, name: "NODEJS", children: [
        { content: [{ id: 41, name: "Express" }, { id: 42, name: "RESTful APIs" }, { id: 43, name: "Authentication" }] },
        { content: [{ id: 44, name: "Middleware" }, { id: 45, name: "Database Integration" }, { id: 46, name: "Websockets" }] },
        { content: [{ id: 47, name: "Deployment" }, { id: 48, name: "Testing" }, { id: 49, name: "Microservices" }] }
      ] },
      { id: 5, name: "MONGODB", children: [
        { content: [{ id: 51, name: "CRUD Operations" }, { id: 52, name: "Indexes and Queries" }, { id: 53, name: "Aggregation" }] },
        { content: [{ id: 54, name: "Data Modeling" }, { id: 55, name: "Transactions" }, { id: 56, name: "Replication" }] },
        { content: [{ id: 57, name: "Sharding" }, { id: 58, name: "Security" }, { id: 59, name: "Backup and Recovery" }] }
      ] }
    ]
  }
];

function App() {
  const [open, setOpen] = useState(false);
  const [homeText, setHomeText] = useState("Welcome to the home screen.");

  const handleItemClick = (item) => {
    setHomeText(`You are seeing  ${item.name} page.`);
  };

  return (
    <div>
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      
      <MultilevelSidebar
        open={open}
        onToggle={() => setOpen(!open)}
        options={options}
        header="sidebar"
        onItemClick={handleItemClick}
      />
      
      <div className="centered-text">
        <p>{homeText}</p>
      </div>
    </div>
  );
}

export default App;
