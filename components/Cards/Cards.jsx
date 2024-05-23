import Card from "./Card"
import CardIcon from "./CardIcon"
import "./Cards.css"

export const Cards = () => {
  return (
    <div>
        <h2>Cards</h2>
        <div className="cards-container">
            <Card />  
            <Card icon={<CardIcon/>}/>  
            <Card />  

        </div>
    </div>
  )
}
