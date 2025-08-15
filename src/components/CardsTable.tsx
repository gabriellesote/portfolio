import Card from "./Card";

function CardsTable(){
    return(
        <div className="
        w-full
        h-full
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-1
        p-0
        ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
    )
}

export default CardsTable;