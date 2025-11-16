import React, { useState } from "react";

const Text = () => {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const circle = e.currentTarget.getBoundingClientRect();
    const size = circle.width > circle.height ? circle.width : circle.height;
    const x = e.clientX - circle.left - size / 2;
    const y = e.clientY - circle.top - size / 2;

    const newRipple = { x, y, size, key: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.key !== newRipple.key));
    }, 600);
  };

  return (
    <button
      onClick={createRipple}
      className="relative overflow-hidden rounded-full w-32 h-32 bg-sky-500 flex items-center justify-center text-white font-bold"
    >
      Click Me
      {ripples.map((ripple) => (
        <span
          key={ripple.key}
          className="absolute rounded-full bg-white opacity-50 animate-ping"
          style={{
            width: ripple.size,
            height: ripple.size,
            top: ripple.y,
            left: ripple.x,
          }}
        />
      ))}
    </button>
  );
};

export default Text;
