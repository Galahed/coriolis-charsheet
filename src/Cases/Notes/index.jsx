import React from 'react';
import { InputItem, List, Stepper } from 'antd-mobile';
import CommonList from '../../Components/CommonList';

class Notes extends CommonList {
  render() {
    return (
      <div>
        <h1>Notes</h1>
        <List renderHeader={(e) => <h4>Заметки и примечания</h4>}>
          {this.ItemText('Заметки')}
        </List>
      </div>
    );
  }
}

export default Notes;
