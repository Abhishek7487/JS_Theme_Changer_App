import React, { useState } from "react";

export default function App() {
  let [currentTheme, setCurrentTheme] = useState("light");

  // Function to set Dark Theme
  const setDarkTheme = () => {
    document.documentElement.style.setProperty("--bg-color", "#2b2c34");
    document.documentElement.style.setProperty("--text-color", "#fffffe");
    document.querySelector(".button").textContent = "Try Light Mode";
  };

  // Function to set Light Theme
  const setLightTheme = () => {
    document.documentElement.style.setProperty("--bg-color", "#fffffe");
    document.documentElement.style.setProperty("--text-color", "#2b2c34");
    document.querySelector(".button").textContent = "Try Dark Mode";
  };

  return (
    <div className="container">
      <h1 className="heading">Theme Changer App</h1>
      <p className="description">
        It’s basically a theme changer app which changes the theme on click of
        the button.
      </p>
      <button
        className="button"
        onClick={() => {
          if (currentTheme === "light") {
            setDarkTheme();
            setCurrentTheme("dark");
          } else if (currentTheme === "dark") {
            setLightTheme();
            setCurrentTheme("light");
          }
        }}
      >
        Try dark mode!
      </button>
      <p className="instagramId">@abhishekpatil7770</p>
    </div>
  );
}
