import React from 'react';
import { InputItem, List, Stepper } from 'antd-mobile';
import CommonList from '../../Components/CommonList';

class Cabin extends CommonList {
  render() {
    return (
      <div>
        <h1>Personal cabin</h1>
        <List renderHeader={(e) => <h4>Описание</h4>}>
          {this.ItemText('Описание')}
        </List>
        <List renderHeader={(e) => <h4>Оснащение</h4>}>
          {this.ItemString('Оснащение 1')}
          {this.ItemString('Оснащение 2')}
          {this.ItemString('Оснащение 3')}
          {this.ItemString('Оснащение 4')}
          {this.ItemString('Оснащение 5')}
          {this.ItemString('Оснащение 6')}
          {this.ItemString('Оснащение 7')}
          {this.ItemString('Оснащение 8')}
          {this.ItemString('Оснащение 9')}
        </List>
        <List renderHeader={(e) => <h4>Прочее</h4>}>
          {this.ItemString('Прочее 1')}
          {this.ItemString('Прочее 2')}
          {this.ItemString('Прочее 3')}
          {this.ItemString('Прочее 4')}
          {this.ItemString('Прочее 5')}
          {this.ItemString('Прочее 6')}
          {this.ItemString('Прочее 7')}
          {this.ItemString('Прочее 8')}
          {this.ItemString('Прочее 9')}
        </List>
      </div>
    );
  }
}

export default Cabin;
