import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieSelection from "./MovieSelection";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleResetForm = () => {
    setName("");
    setEmail("");
    setSelectedMovie("");
    setMessage("");
    setErrors({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "โปรดใส่ชื่อของคุณ";
    }

    if (!email.trim()) {
      newErrors.email = "โปรดใส่อีเมลของคุณ";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }

    if (!selectedMovie) {
      newErrors.selectedMovie = "กรุณาเลือกหนังที่คุณชอบ";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/summary", {
        state: { name, email, selectedMovie, message },
      });
    }
  };

  return (
    <div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            ชื่อ <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`mt-1 block w-full border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            placeholder="กรุณากรอกชื่อของคุณ"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            อีเมล <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`mt-1 block w-full border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            placeholder="example@email.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div
          className={`p-3 rounded-md border ${
            errors.selectedMovie ? "border-red-500" : "border-gray-300"
          }`}
        >
          <MovieSelection
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
          {errors.selectedMovie && (
            <p className="text-red-500 text-sm mt-1">{errors.selectedMovie}</p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            ความคิดเห็นเกี่ยวกับหนัง
          </label>
          <textarea
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="พิมพ์ความคิดเห็นของคุณที่นี่…"
          ></textarea>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={handleResetForm}
            className="w-full sm:w-auto py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-all"
          >
            รีเซ็ตฟอร์ม
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
          >
            ส่งแบบสำรวจ
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
