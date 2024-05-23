import Button from "./Button"
import "./Badges.css"

const Badges = () => {

  const colors = ["gray", "red", "yellow" , "green" , "blue" , "indigo" , "purple", "pink"]

  return (
    <div>
        <h2>Badges</h2>
        <div className="buttons-container">
          <p>Square</p>
          {
            colors.map( color => {
              return(
                <Button color={color} rounded={"square"}/>
              )
            } )
          }


        </div>

        <div className="buttons-container">
          <p>Pill</p>
          {
            colors.map( color => {
              return(
                <Button color={color} rounded={"pill"}/>
              )
            } )
          }


        </div>
    </div>
  )
}

export default Badges