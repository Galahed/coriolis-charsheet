import React from 'react';
import {
  InputItem, List, TextareaItem,
} from 'antd-mobile';
import Stepper from '../Stepper';

class CommonList extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange(a, b) {
    const { data = {} } = this.props;
    data[a] = b;
    this.props.onSave && this.props.onSave(data);
  }

  getAttrib(node) {
    return node.props ? Object.values(node.props)[0] : node;
  }

  ItemNumber(props, min = -999999, max = 999999, defaultValue = 0) {
    const { data = {} } = this.props;
    const attrib = this.getAttrib(props);

    return (
      <List.Item
        wrap
        extra={(
          <Stepper
            defaultValue={data[attrib] || defaultValue}
            style={{ width: '100%', minWidth: '100px' }}
            showNumber
            min={min}
            max={max}
            onChange={(v) => this.onChange(attrib, v)}
          />
            )}
      >
        {props}
      </List.Item>
    );
  }

  ItemString(props) {
    const { data = {} } = this.props;
    const attrib = this.getAttrib(props);

    return (
      <InputItem
        placeholder="пусто"
        defaultValue={data[attrib] || ''}
        onChange={(v) => this.onChange(attrib, v)}
      >
        {props}
      </InputItem>
    );
  }

  ItemText(props) {
    const { data = {} } = this.props;
    const attrib = this.getAttrib(props);

    return (
      <TextareaItem
        placeholder="пусто"
        autoHeight
        defaultValue={data[attrib] || ''}
        onChange={(v) => this.onChange(attrib, v)}
      >
        {props}
      </TextareaItem>
    );
  }

  render() {
    return null;
  }
}

export default CommonList;
