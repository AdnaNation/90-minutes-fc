import { useEffect, useState } from "react";

const NavigateSection = () => {
  const [logos, setLogos] = useState([]);
  useEffect(() => {
    fetch("logo.json")
      .then((res) => res.json())
      .then((data) => setLogos(data));
  }, []);
  return (
    <div className="bg-gray-800">
      <div className="grid gap-8 pt-4 grid-cols-1 md:grid-cols-3 justify-center max-w-3xl mx-auto">
        {logos.map((item) => (
          <div
            className="flex flex-col justify-center text-center"
            key={item.idx}
          >
            <img className="w-48 mx-auto" src={item.image} alt="" />
            <p className="bg-white mt-3 mx-4 md:mx-0">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigateSection;
