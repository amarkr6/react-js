/*
// * <div id="parent">
//     <div id="child">
//         <h1>I am H1 Tag.</h1>
//         <h2>I am h2 tag.</h2>
//     </div>
//     <div id="child2">
//         <h1>I am H1 Tag.</h1>
//         <h2>I am h2 tag.</h2>
//     </div>
// </div>
* ReactElement(Object) => HTML(Browser underastands)*
*
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am H2 Tag"),
  ]),
]);
//console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React"
// );
// console.log(heading); // Return Object, and Object is a React element.
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);