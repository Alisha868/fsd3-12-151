
const User = () => {
  const data = {
    name: "Alisha Singh",
    rollNumber: "2500320100151",
    isAdmin: true,
    theme: "dark",
  };

  return (
    <>
      <h2>{data.name}</h2>
      <h3>{data.rollNumber}</h3>
      <p>{data.isAdmin ? "Admin User" : "Normal User"}</p>
      <p>Theme: {data.theme}</p>
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
