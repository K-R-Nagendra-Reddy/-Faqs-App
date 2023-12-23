// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isclickedOrNot: false}

  onClickPlusButton = () => {
    this.setState(prevState => ({
      isclickedOrNot: !prevState.isclickedOrNot,
    }))
  }

  render() {
    const {isclickedOrNot} = this.state
    const {details} = this.props
    const {id, questionText, answerText} = details

    const plusImage = isclickedOrNot
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altImage = isclickedOrNot ? 'minus' : 'plus'
    return (
      <li className="list-container">
        <div className="li-container">
          <h1>{questionText}</h1>
          <button
            type="button"
            className="button"
            onClick={this.onClickPlusButton}
          >
            <div>
              <img src={plusImage} alt={altImage} />
            </div>
          </button>
        </div>

        {isclickedOrNot && (
          <div>
            <hr className="separator" />
            <p>{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
