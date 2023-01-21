import React from "react";

const MyHeading = () => {
  const a = 5;
  return (
    <div>
      <h2>This rendered compo</h2>
      <p>lemme use this {a}</p>
    </div>
  );
};

// export const b = () => {
//   <p> this is b in para</p>;
// };
// export const c = () => {
//   <p> this is c in para</p>;
// };
// export const d = () => {
//   <p> this is d in para</p>;
// };

export default MyHeading;
