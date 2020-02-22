import React from 'react';
import { InputItem, List, Stepper } from 'antd-mobile';
import CommonList from '../../Components/CommonList';

class Equipment extends CommonList {
  render() {
    return (
      <div>
        <h1>Weapon & Gears</h1>
        <List renderHeader={(e) => <h4>Броня</h4>}>
          {this.ItemString('Броня')}
        </List>
        <List renderHeader={(e) => <h4>Оружие</h4>}>
          {this.ItemString('Оружие 1')}
          {this.ItemString('Оружие 2')}
          {this.ItemString('Оружие 3')}
          {this.ItemString('Оружие 4')}
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
      </div>
    );
  }
}

export default Equipment;
