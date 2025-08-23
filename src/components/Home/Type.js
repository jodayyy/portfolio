import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: "a <span style='color: #c770f0;'>Computer Science Graduate</span> passionate about building reliable and impactful digital solutions.",
        autoStart: true,
        delay: 30,
      }}
    />
  );
}

export default Type;