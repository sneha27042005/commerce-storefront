import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, useLoadScript, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"];

const SelectAddress = () => {
  const navigate = useNavigate();
  const autocompleteRef = useRef(null);
  const [address, setAddress] = useState("");

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    if (place?.formatted_address) {
      setAddress(place.formatted_address);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!address) return alert("Please select an address");

    const user = JSON.parse(localStorage.getItem("user")) || {};
    localStorage.setItem("user", JSON.stringify({ ...user, address }));
    navigate("/");
  };

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#d1a8a1] ">
      <form
        onSubmit={handleSubmit}
        className="bg-white  p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Select Your Address</h2>

        <Autocomplete
          onLoad={(ref) => (autocompleteRef.current = ref)}
          onPlaceChanged={handlePlaceChanged}
        >
          <input
            type="text"
            placeholder="Enter your address"
            className="w-full px-4 py-2 border rounded mb-4"
          />
        </Autocomplete>

        <button
          type="submit"
          className="w-full bg-[#1e4a4f] text-white py-2 rounded hover:bg-[#16383c]"
        >
          Save Address
        </button>
      </form>
    </div>
  );
};

export default SelectAddress;
