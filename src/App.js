import React, { Suspense } from "react";

const Buscador = React.lazy(()=> import('../src/Buscador'));


function App() {

  return (
    <div >
         <Suspense fallback={<div>Loading...</div>}  >
           <Buscador />
         </Suspense>
        

    </div>
  );
}

export default App;
