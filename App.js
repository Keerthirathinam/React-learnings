// import React from 'react';
// import ReactDOM from 'react-dom/client';

// //React.createElement => Object => HTMLElement(render)

// // const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");
// // console.log(heading);

// //JSX- HTML like or XML like syntax in JS
// //JSX ( transpiled before it reaches the JS engine )- parcel does this using babel

// // this is a React Element
// const jsxheading = <h1 id="jsx-heading">This is a JSX heading</h1>
// // console.log(jsxheading);

// const Title = function(){
//     return (
//         <h1 id="title">This is a title component</h1>
//     )
// }

// // This is react component
// //Component composition
// const Heading = ()=> (
//     <div>
//     <h1 id="functional-heading">This is a functional component</h1>
//     <Title />
//     </div>
// )

// console.log(Heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(jsxheading); //this is how we render a react element
// root.render(<><Heading />
//     {jsxheading}
//     <Title />
//     </>
// ); //this is how we render a react component
