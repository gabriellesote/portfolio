import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div
    className="
    h-screen overflow-y-scroll snap-y snap-mandatory
    overflow-auto bg-background-50"
    >
      <section className="h-screen snap-start bg-red-500">
        <h1> Intro</h1>
         
       
      </section>

      <section className="h-screen snap-start bg-green-500 ">
        <h1>Projetos</h1>
        <div className="bg-accent-50 
        
        table ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
       
        
        </div>
      </section>

      <section className="h-screen snap-start bg-blue-500">
        <h3>contato</h3>
     
      </section>
    </div>
  );
}

export default App;
