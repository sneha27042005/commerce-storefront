import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Topbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user'));

  const [search, setSearch] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [noResult, setNoResult] = useState(false);

  const recognitionRef = useRef(null);

  const slugify = (str) => str.toLowerCase().replace(/\s+/g, "-");

  const scrollToSlug = (raw) => {
    const slug = slugify(raw.trim());
    const target = document.getElementById(slug);
    if (!slug) return;

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.classList.add("highlight");
      setTimeout(() => {
        target.classList.remove("highlight");
      }, 1600);
      setNoResult(false);
    } else {
      setNoResult(true);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearch(params.get('query') || '');
  }, [location]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recog = new SpeechRecognition();
    recog.lang = 'en-US';
    recog.interimResults = false;

    recog.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      console.log("✅ Voice Result:", transcript);
      setSearch(transcript);
      scrollToSlug(transcript);
    };

    recog.onerror = (e) => {
      console.error("❌ Speech Recognition Error:", e.error);
      setIsListening(false);
    };

    recog.onstart = () => console.log("🟢 Recognition started");
    recog.onspeechstart = () => console.log("🗣️ Voice detected");
    recog.onspeechend = () => console.log("🔇 Speech ended");
    recog.onend = () => {
      console.log("🛑 Recognition ended");
      setIsListening(false);
    };

    recognitionRef.current = recog;
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    scrollToSlug(search);
  };
  const handleVoiceSearch = async () => {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });
    console.log("✅ Microphone access granted");
  } catch (err) {
    console.error("❌ getUserMedia error:", err);
    alert("Microphone access is still blocked at system or browser level.");
    return; // Stop voice recognition from starting
  }

  // Your existing logic
  if (!recognitionRef.current) {
    alert("Voice search not supported in your browser");
    return;
  }

  setNoResult(false);
  recognitionRef.current.start();
  setIsListening(true);
};


  

    
  return (
    <header className="bg-[#5d4037] px-6 py-3 shadow sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center text-white">
        <Link to="/">
          <img src="/logo-white.svg" className="w-[150px]" alt="Logo" />
        </Link>

        <form
          onSubmit={handleSearchSubmit}
          className="w-full max-w-2xl flex items-center bg-white border border-gray-300 rounded-full shadow-sm focus-within:ring-1 focus-within:ring-blue-500 transition"
        >
          <div className="relative flex-1">
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setNoResult(false);
              }}
              placeholder="Search products…"
              className="w-full px-5 py-2.5 rounded-l-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={handleVoiceSearch}
              title="Voice Search"
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full 
                ${isListening ? 'animate-pulse bg-red-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              🎤
            </button>
          </div>

          <button
            type="submit"
            className="bg-gray-100 hover:bg-gray-200 px-5 py-2.5 rounded-r-full border-l border-gray-300"
          >
            🔍
          </button>
        </form>

        {noResult && (
          <p className="text-red-300 text-sm mt-2">No results found</p>
        )}

        <div className="flex gap-3 items-center flex-wrap justify-center">
          <Link to="/cart" className="font-semibold whitespace-nowrap">My Cart</Link>

          {user?.address && (
            <span className="text-sm hidden md:inline">
              📍 {user.address.length > 25 ? `${user.address.slice(0, 25)}…` : user.address}
            </span>
          )}

          {user && (
            <button
              onClick={() => navigate('/select-address')}
              className="bg-white text-[#5d4037] font-semibold px-3 py-1.5 rounded text-sm hover:bg-gray-100 whitespace-nowrap"
            >
              {user.address ? 'Change Address' : 'Set Address'}
            </button>
          )}

          {user ? (
            <button
              onClick={() => {
                localStorage.removeItem('user');
                navigate('/signin');
              }}
              className="bg-white text-[#5d4037] font-semibold px-4 py-1.5 rounded hover:bg-gray-100 whitespace-nowrap"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/signin"
              className="bg-white text-[#5d4037] font-semibold px-4 py-1.5 rounded hover:bg-gray-100 whitespace-nowrap"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
