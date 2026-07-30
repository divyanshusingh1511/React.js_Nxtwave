import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onToggle = () => {
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed,
    }))
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="Container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>

        <button
          type="button"
          className="button-1"
          onClick={this.onToggle}
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    )
  }
}

export default Welcome