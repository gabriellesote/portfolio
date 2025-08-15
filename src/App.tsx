import "./App.css";
import CardsTable from "./components/CardsTable";
import Section from "./components/Section";
import Title from "./components/Title";

function App() {
  return (
    <div className=" h-screen overflow-y-scroll snap-y snap-mandatory overflow-auto bg-background-50">

      <Section bgColor="bg-red-500">
        <Title text="Bio"/>
      </Section>

      <Section bgColor="bg-background-50">
       <Title text="Projetos"/>
        <CardsTable />
      </Section>

      <Section bgColor="bg-blue-500">
       <Title text="Contato"/>
      </Section>

    </div>
  );
}
export default App;
