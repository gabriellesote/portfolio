function Card() {
  return (
    <section
    className="
    bg-secondary-100 h-max w-[20rem] 
    box-border rounded-[1rem] p-[1rem] 
    flex flex-col justify-center items-center 
    border-2 border-accent-800 m-[1rem]"
    >
      <header className="text-text-800">
        <h1 className="text-3xl">Titulo do projeto</h1>
        <h3> descrição (api, ou qualquer coisa)</h3>
      </header>
      <div className="flex flex-col justify-center items-center">
        <img
          src="/src/assets/images/cat2.jpg"
          alt="placeholder cat"
          className="h-30 w-200 rounded-[1rem]"
        />
      </div>

      <footer className="text-text-900 text-justify"> 
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit in odit, eum, excepturi ipsa labore itaque, quia minus
          bl
        </p>
      </footer>
    </section>
  );
}

export default Card;
