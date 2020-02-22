import React from 'react';
import { InputItem, List, Stepper } from 'antd-mobile';
import CommonList from '../../Components/CommonList';

class Contacts extends CommonList {
  render() {
    return (
      <div>
        <h1>People & Contacts</h1>
        <List renderHeader={(e) => <h4>Люди, которых я знаю</h4>}>
          {this.ItemString('Контакт 1')}
          {this.ItemString('Контакт 2')}
          {this.ItemString('Контакт 3')}
          {this.ItemString('Контакт 4')}
          {this.ItemString('Контакт 5')}
          {this.ItemString('Контакт 6')}
          {this.ItemString('Контакт 7')}
          {this.ItemString('Контакт 8')}
          {this.ItemString('Контакт 9')}
        </List>
      </div>
    );
  }
}

export default Contacts;
