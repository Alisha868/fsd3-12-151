
const User = () => {
  return (
    <>
      <h2>Alisha Singh</h2>
      <h3>2500320100151</h3>
    </>
  );
};

const Book = () => {
  return (
    <>
      <p>Let us C</p>
      <img
        src="https://m.media-amazon.com/images/I/71-9hOd61iL._AC_UF1000,1000_QL80_.jpg"
        alt="Let Us C Book Cover"
        width="200"
        height="250"
      />
    </>
  );
};

function App() {
  return (
    <>
      <h1>Welcome to React</h1>
      <User />
      <Book />
    </>
  );
}

export default App;
