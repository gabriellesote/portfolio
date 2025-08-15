function Card() {
  return (
    <section
      className="
    bg-background-100 h-[16rem] w-[25rem] 
    box-border rounded-[1rem] p-[1rem] 
    flex flex-col justify-center items-center 
    border-2 border-accent-800 m-[1rem] overflow-hidden
    cursor-pointer "
    
    >
      <header className="text-text-800">
        <h1 className="text-[1.5rem] text-accent-700">Titulo do projeto</h1>
        <h3> descrição (api, ou qualquer coisa)</h3>
      </header>
      <div className="flex flex-col justify-center items-center">
        <img
          src="/src/assets/images/cat2.jpg"
          alt="placeholder cat"
          className="h-[8rem] w-[20rem] rounded-[1rem]"
        />
      </div>

      <footer className="text-text-900 text-justify">
       
      </footer>
    </section>
  );
}

export default Card;
