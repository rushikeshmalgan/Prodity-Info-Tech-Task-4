import { useState, useEffect } from "react";

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50"
      style={{
        transform: `translate(${position.x - 150}px, ${position.y - 150}px)`,
      }}
    >
      <div className="w-[300px] h-[300px] rounded-full bg-purple-500 opacity-20 blur-3xl"></div>
    </div>
  );
};

export default MouseGlow;
