import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: "a <span style='color: #b562d6;'>Computer Science Graduate</span> passionate about building reliable and impactful digital solutions.",
        autoStart: true,
        delay: 30,
      }}
    />
  );
}

export default Type;