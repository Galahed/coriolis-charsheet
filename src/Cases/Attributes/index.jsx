import React from 'react';
import { InputItem, List, Stepper } from 'antd-mobile';
import CommonList from '../../Components/CommonList';

class Attributes extends CommonList {

  render() {
    return (
      <div>
        <h1>Attributes</h1>
        <List renderHeader={(e) => <h3>Характеристики:</h3>}>
          {this.ItemNumber('Телосложение',1,5)}
          {this.ItemNumber('Ловкость',1,5)}
          {this.ItemNumber('Смекалка',1,5)}
          {this.ItemNumber('Эмпатия',1,5)}
        </List>
        <List renderHeader={(e) => <h3>Опыт:</h3>}>
          {this.ItemNumber('Опыт')}
        </List>
        <List renderHeader={(e) => <h3>Урон:</h3>}>
          {this.ItemNumber('Пункты здоровья')}
          {this.ItemNumber('Пункты рассудка')}
          {this.ItemNumber('Радиация')}
        </List>
        <List renderHeader={(e) => <h3>Травмы:</h3>}>
          {this.ItemString('Травма 1')}
          {this.ItemString('Травма 2')}
          {this.ItemString('Травма 3')}
        </List>
      </div>
    );
  }
}

export default Attributes;
