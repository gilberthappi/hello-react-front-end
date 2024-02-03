// import React from 'react';

// function Greeting({ username }) {
//   return (
//     <div>
//       <h1>Hello, {username}!</h1>
//     </div>
//   );
// }

// export default Greeting;


import React from 'react';

function Greeting({ greeting }) {
  return (
    <div>
      <h2>{greeting.title}</h2>
      <p>{greeting.message}</p>
    </div>
  );
}

export default Greeting;
