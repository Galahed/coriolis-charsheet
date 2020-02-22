import React from 'react';
import { InputItem, List, Stepper } from 'antd-mobile';
import CommonList from '../../Components/CommonList';

class Appearance extends CommonList {
  render() {
    return (
      <div>
        <h1>Appearance</h1>
        <List renderHeader={(e) => <h4>Общие данные</h4>}>
          {this.ItemString('Имя')}
          {this.ItemString(<small>Амплуа (Роль)</small>)}
          {this.ItemString(<small>Амплуа команды</small>)}
          {this.ItemString(<small>Личная проблема</small>)}
                {this.ItemString(<small>Происхождение</small>)}
          {this.ItemString('Лик')}
          {this.ItemNumber('Репутация')}
          {this.ItemNumber('Биры')}
        </List>
        <List renderHeader={(e) => <h4>Внешний вид:</h4>}>
          {this.ItemString('Лицо')}
          {this.ItemString('Одежда')}
        </List>
      </div>
    );
  }
}

export default Appearance;
