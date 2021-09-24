import React, { PureComponent } from 'react'

export default class Oscillator extends PureComponent {
  constructor(props) {
    super(props)

    const { audioContext, oscillatorNode, frequency } = props

    oscillatorNode.frequency.setValueAtTime(frequency, audioContext.currentTime)
    oscillatorNode.type = 'square'

    this.state = {
      started: false
    }
  }

  start = () => {
    const { audioContext, oscillatorNode } = this.props
    const { started } = this.state

    oscillatorNode.connect(audioContext.destination)

    if (started === false) {
      oscillatorNode.start()

      this.setState({
        started: true
      })
    }
  }

  stop = () => {
    const { audioContext, oscillatorNode } = this.props

    oscillatorNode.disconnect(audioContext.destination)
  }

  render() {
    const { frequency } = this.props

    return (
      <div>
        <div onClick={this.start}>START</div>
        <div onClick={this.stop}>STOP</div>
      </div>
    )
  }
}
