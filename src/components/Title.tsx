interface TitleProps{
    text: string
    
}

function Title({text}:TitleProps){
    return(
    <h1 className="text-3xl p-[1rem] text-text-950"> {text} </h1>
    )}

export default Title;