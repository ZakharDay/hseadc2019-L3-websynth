import React, { PureComponent } from 'react'

import Slider from '../control_components/Slider'

export default class ToneSynth extends PureComponent {
  constructor(props) {
    super(props)
  }

  updateNodeParams = () => {
    const { node, settings } = this.props
    const { volume, oscillator } = settings
    const { type } = oscillator

    node.volume.value = volume
    node.oscillator.type = type
  }

  render() {
    const { settings } = this.props
    const { volume } = settings

    const oscillatorTypes = ['sine', 'square', 'triangle', 'sawtooth']

    return (
      <div className="ToneSynth">
        <Slider
          name="Volume"
          property={['volume']}
          min={-20}
          max={10}
          step={0.01}
          value={volume}
          handleChange={this.props.handlePropertyValueChange}
        />
      </div>
    )
  }
}
