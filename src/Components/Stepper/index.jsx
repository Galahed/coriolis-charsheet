import React from 'react';
import StepperAnt from 'antd-mobile/lib/stepper';
import Icon from 'antd-mobile/lib/icon';

class Stepper extends React.Component {
  onClick = (e, d) => {
    const { onChange } = this.props;
    e.preventDefault();

    const { value = 1, step = 1 } = this.stepper.props;
    if (!window.navigator.maxTouchPoints) { onChange(value + d * step); }
  }

  render() {
    const {
      value, onChange, min = -999999, max = 999999, defaultValue,
    } = this.props;

    const actualValue = value !== undefined && value !== null ? value
      : defaultValue !== undefined && defaultValue !== null ? defaultValue : min;

    return (
      <StepperAnt
        ref={(node) => this.stepper = node}
        value={actualValue}
        min={min}
        max={max}
        onChange={onChange}
        showNumber
        upHandler={<Icon style={{ width: 30, height: 30, padding: 8 }} type="plus" size="xxs" onMouseUp={(e) => this.onClick(e, 1)} />}
        downHandler={<Icon style={{ width: 30, height: 30, padding: 8 }} type="minus" size="xxs" onMouseUp={(e) => this.onClick(e, -1)} />}
      />
    );
  }
}

export default Stepper;
