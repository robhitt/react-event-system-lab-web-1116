import React from 'react'

class EyesOnMe extends React.Component {
  constructor() {
    super()
  }

  focusHandler () {
    console.log("Good!")
  }

  blurHandler () {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return (
      <form>
        <button
          onFocus={this.focusHandler}
          onBlur={this.blurHandler}>
        </button>
      </form>
    )
  }
}

module.exports = EyesOnMe
