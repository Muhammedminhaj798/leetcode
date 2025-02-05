// import React from "react";

// function Example(){
//     return(
//         <React.Fragment>
//             <div>
//                 <p>this another component</p>
//             </div>

//         </React.Fragment>
//     )
// }

// export default Example


function calculate(operation, a ,b){
    return operation(a,b)
}

const add = (x,y)=> x+y;
console.log(calculate(add, 5,3));
