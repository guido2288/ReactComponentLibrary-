import Icon from "./Icon"

const Banner = ({type , title , paragraph , singleLine}) => {

  return (
    <div className={`banner ${type} ${singleLine && "line"}`}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
        <Icon type={type}/>
      </svg>
        <div className="banner-title">
            <h3>{title}</h3>
        </div>
        {paragraph && <p>{paragraph}</p>}
    </div>
  )
}

export default Banner