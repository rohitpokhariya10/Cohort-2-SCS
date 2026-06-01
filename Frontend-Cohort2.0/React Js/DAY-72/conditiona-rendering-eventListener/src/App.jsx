import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Card name="Rohit" role="FD" />
      <Card name="Sam" role="BD" />
       <Navbar title="bixi" color="pink" links = {["Home" ,"About" , "Hero"    ]}/>
              <Navbar title="Rohit" color="yellow" links = {["Product" ,"About" , "Footer"    ]}/>
    </div>
  );
};

export default App;

