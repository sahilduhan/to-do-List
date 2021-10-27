import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
function App() {
  const onDelete = () => {
    console.log("I am on delete ", todos);
  };
  let todos = [
    {
      sno: 1,
      title: "Go to Gym",
      description: "Go to the Gym to get fit!",
    },
    {
      sno: 2,
      title: "Go to Pick Mummy",
      description: "Pick up mummy!",
    },
    {
      sno: 3,
      title: "Go to Study",
      description: "Study to get sucessfull!",
    },
  ];
  return (
    <>
      <Header title="To Do List" searchBar={false} />
      <Footer />
      <Todos todos={todos} onDelete={onDelete} />
    </>
  );
}

export default App;
