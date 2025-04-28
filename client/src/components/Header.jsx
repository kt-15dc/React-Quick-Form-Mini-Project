import React from "react";


export default function Header() {
    return (
      <header className="flex items-center gap-2 mb-6">
        <span className="text-3xl">🎬</span>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          Movie Survey
        </h1>
      </header>
    );
  }
  