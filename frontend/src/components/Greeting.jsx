import { useState } from "react";

function getTimeOfDay() {
  const h = new Date().getHours();
  return h < 12 ? "morning" : h < 18 ? "afternoon" : "evening";
}

function Greeting({ name = "Shashwat", subtext = "What's the plan for today?" }) {
  const [part] = useState(getTimeOfDay());

  return (
    <>
      <div className="greeting">
        Good {part}, <span>{name}</span>
      </div>

      <div className="subtext">{subtext}</div>
    </>
  );
}

export default Greeting;