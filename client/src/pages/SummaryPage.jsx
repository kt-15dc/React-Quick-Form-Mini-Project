import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header";

export default function SummaryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email, selectedMovie, message } = location.state || {};

  const handleReset = () => {
    navigate("/");
  };

  if (!name || !email || !selectedMovie) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-100 to-purple-100">
        <div className="w-full max-w-xl p-8 bg-white rounded-2xl shadow-lg text-center">
          <Header />
          <p className="text-lg mb-4">ไม่พบข้อมูล กรุณากรอกแบบฟอร์มใหม่</p>
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            onClick={handleReset}
          >
            กลับไปกรอกแบบฟอร์ม
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-100 to-purple-100">
      <div className="w-full max-w-xl p-8 bg-white rounded-2xl shadow-lg space-y-8">
        <Header />
        <div className="flex items-center gap-2 text-green-600">
          <span className="text-3xl">✅</span>
          <h2 className="text-2xl font-semibold">ส่งแบบสำรวจสำเร็จ!</h2>
        </div>
        <div className="space-y-4 text-gray-700 text-lg">
          <p><strong>ชื่อ:</strong> {name}</p>
          <p><strong>อีเมล:</strong> {email}</p>
          <p><strong>หนังที่เลือก:</strong> <span className="text-purple-600 underline">{selectedMovie}</span></p>
          {message && (
            <div>
              <hr className="my-4" />
              <p className="text-sm text-gray-600">ความคิดเห็น:</p>
              <div className="p-4 bg-gray-100 rounded-md text-sm">
                {message}
              </div>
            </div>
          )}
        </div>
        <button
          onClick={handleReset}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v6h6M20 20v-6h-6M4 10a8 8 0 0115.31-2.906M20 14a8 8 0 01-15.31 2.906"
            />
          </svg>
          ทำแบบสำรวจใหม่
        </button>
      </div>
    </div>
  );
}
