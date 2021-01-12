import React from "react";

const Sample: React.FC = () => {
  return (
    <div>
      <button className="button" onClick={() => console.log("hello")}>
        ボタン
      </button>
    </div>
  );
};

export default Sample;
