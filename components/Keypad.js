import React from 'react'

class Keypad extends React.Component {
  constructor() {
    super()
  }

  keyUpHandler () {
    console.log("Entering password...")
  }

  render() {
    return (
      <form>
        <input type="password" onKeyUp={this.keyUpHandler} />
      </form>
    )
  }
}

module.exports = Keypad
