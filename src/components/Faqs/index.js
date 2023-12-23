// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {isClickedPlus: false}

  render() {
    const {faqsList} = this.props

    const {isClickedPlus} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">FAQs</h1>
          <ul className="ul-container">
            {faqsList.map(each => (
              <FaqItem details={each} key={each.id} isClicked={isClickedPlus} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
