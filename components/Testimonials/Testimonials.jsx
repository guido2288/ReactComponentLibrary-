import TestimonialWithImage from "./TestimonialWithImage"
import { TestimonialWithoutImage } from "./TestimonialWithoutImage"


const Testimonials = () => {
  return (
    <div>
        <h2>Testimonials</h2>
        <p>with pic</p>
        <TestimonialWithImage />
        <p>no pic</p>
        <TestimonialWithoutImage />
    </div>
  )
}

export default Testimonials