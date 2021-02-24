import React from "react";

export default function Loader(props) {
  return (
    <div className="loader">
      rapplicatin ...
      <style jsx>{`
        @keyframes load {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .loader {
          border: 4px solid rgba(255, 255, 255, 0.2);
          border-left: 4px solid;
          animation: load 1s infinite linear;
          border-radius: 50%;
          width: 25px;
          height: 25px;
        }
      `}</style>
    </div>
  );
}
