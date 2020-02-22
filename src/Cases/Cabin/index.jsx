import React from 'react';
import { InputItem, List, Stepper } from 'antd-mobile';
import CommonList from '../../Components/CommonList';

class Cabin extends CommonList {
  render() {
    return (
      <div>
        <h1>Personal cabin</h1>
        <List renderHeader={(e) => <h4>Описание</h4>}>
          {this.ItemText('')}
        </List>
        <List renderHeader={(e) => <h4>Снаряжение</h4>}>
          {this.ItemString('Снаряжение 1')}
          {this.ItemString('Снаряжение 2')}
          {this.ItemString('Снаряжение 3')}
          {this.ItemString('Снаряжение 4')}
          {this.ItemString('Снаряжение 5')}
          {this.ItemString('Снаряжение 6')}
          {this.ItemString('Снаряжение 7')}
          {this.ItemString('Снаряжение 8')}
          {this.ItemString('Снаряжение 9')}
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
