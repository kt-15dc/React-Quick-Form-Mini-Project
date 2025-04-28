import React, { useState } from "react";

const movies = [
  { title: "Avatar", year: "2009", director: "James Cameron" },
  { title: "Inception", year: "2010", director: "Christopher Nolan" },
  { title: "Interstellar", year: "2014", director: "Christopher Nolan" },
  { title: "The Shawshank Redemption", year: "1994", director: "Frank Darabont" },
  { title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino" },
  { title: "Parasite", year: "2019", director: "Bong Joon-ho" }
];

export default function MovieSelection({ selectedMovie, setSelectedMovie }) {
  const handleChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4 mb-6">
      <label className="font-semibold">
        เลือกหนังที่คุณชอบ <span className="text-red-500">*</span>
      </label>
      
      {movies.map((movie, index) => (
        <label
          key={index}
          className={`flex flex-col p-3 border rounded-lg cursor-pointer ${
            selectedMovie === `${movie.title} (${movie.year})` ? "bg-gray-100" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="favoriteMovie"
              value={`${movie.title} (${movie.year})`}
              checked={selectedMovie === `${movie.title} (${movie.year})`}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <span className="font-medium">
              {movie.title} ({movie.year})
            </span>
          </div>
          <span className="ml-7 text-gray-500 text-sm">
            Director: {movie.director}
          </span>
        </label>
      ))}
    </div>
  );
}
