import React from 'react';
import { InputItem, List, Stepper } from 'antd-mobile';
import CommonList from '../../Components/CommonList';

class Items extends CommonList {
  render() {
    return (
      <div>
        <h1>Small items</h1>
        <List renderHeader={(e) => <h4>Маленькие предметы</h4>}>
          {this.ItemString('Предмет 1')}
          {this.ItemString('Предмет 2')}
          {this.ItemString('Предмет 3')}
          {this.ItemString('Предмет 4')}
          {this.ItemString('Предмет 5')}
          {this.ItemString('Предмет 6')}
          {this.ItemString('Предмет 7')}
          {this.ItemString('Предмет 8')}
          {this.ItemString('Предмет 9')}
        </List>
      </div>
    );
  }
}

export default Items;
