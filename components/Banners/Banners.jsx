import Banner from "./Banner"
import "./Bannerstyle.css"

const Banners = () => {

  return (
    <div>
        <h2>Banners</h2>

        <div className="banners-container">
            <div className="banner-row">
                <p>MULTI LINE</p>
                <p>SINGLE LINE</p>
            </div>
            <div className="banner-row"> 
                <p className="side">SUCCESS</p>
                <Banner type={"success"} title={"Congratulations!"} paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."}/>
                <Banner type={"success"} title={"Congratulations!"} singleLine={true}/>

            </div>
            <div className="banner-row">
                <p className="side">WARNING</p>
                <Banner type={"warning"} title={"Attention"} paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."}/>
                <Banner type={"warning"} title={"Attention"} singleLine={true}/>

            </div>
            <div className="banner-row">
                <p className="side">ERROR</p>
                <Banner type={"error"} title={"There is a problem with your application"} paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."}/>
                <Banner type={"error"} title={"There is a problem with your application"} singleLine={true}/>

            </div>
            <div className="banner-row">
                <p className="side">NEUTRAL</p>
                <Banner type={"neutral"} title={"Update available"} paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."}/>
                <Banner type={"neutral"} title={"Update available"} singleLine={true}/>

            </div>

        </div>

    </div>
  )
}

export default Banners