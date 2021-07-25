import React from "react";

export default function Loader(props) {
  return (
    <div className="loader">
      <div></div>
      <div></div>
      <div></div>
      <style jsx>{`
        @keyframes load {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1);
          }
          70%,
          100% {
            transform: scale(0);
          }
        }

        .loader > div {
          animation: load infinite linear;
          animation-delay: 0.25s;
          animation-duration: 2s;
          animation-fill-mode: both;
          display: inline-block;
          background-color: #2e5052;
          width: 25px;
          height: 25px;
        }

        .loader > div:nth-child(1) {
        }
        .loader > div:nth-child(2) {
          animation-delay: 0.5s;
        }
        .loader > div:nth-child(3) {
          animation-delay: 0.75s;
        }
      `}</style>
    </div>
  );
}
