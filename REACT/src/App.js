import "./App.css";

let name = "M Hammad";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sapiente
          quis nulla repudiandae corrupti cum excepturi ipsa similique? Qui,
          obcaecati illum molestiae sit magni sunt voluptatibus ex? Nisi hic
          esse commodi ullam nulla!
        </p>
      </div>
    </>
  );
}

export default App;
