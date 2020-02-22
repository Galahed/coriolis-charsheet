import React from 'react';
import { InputItem, List, Stepper } from 'antd-mobile';
import CommonList from '../../Components/CommonList';

class Skills extends CommonList {
  render() {
    return (
      <div>
        <h1>Talents & Skills</h1>
        <List renderHeader={(e) => <h4>Достоинства</h4>}>
          {this.ItemString('Талант 1')}
          {this.ItemString('Талант 2')}
          {this.ItemString('Талант 3')}
          {this.ItemString('Талант 4')}
        </List>
        <List renderHeader={(e) => <h4>Общие навыки:</h4>}>
          {this.ItemNumber('Ближний бой (сила)')}
          {this.ItemNumber('Влияние (эмпатия)')}
          {this.ItemNumber('Выживание (смекалка)')}
          {this.ItemNumber('Наблюдательность (смекалка)')}
          {this.ItemNumber('Проворство (смекалка)')}
          {this.ItemNumber('Сила (телосложение)')}
          {this.ItemNumber('Скрытность (ловкость)')}
          {this.ItemNumber('Стрельба (ловкость)')}
        </List>
        <List renderHeader={(e) => <h4>Специальные навыки:</h4>}>
          {this.ItemNumber('Инфоматика (смекалка)')}
          {this.ItemNumber('Лидерство (эмпатия)')}
          {this.ItemNumber('Медикургия (смекалка)')}
          {this.ItemNumber('Мудрость (эмпатия)')}
          {this.ItemNumber('Наука (смекалка)')}
          {this.ItemNumber('Пилотирование (ловкость)')}
          {this.ItemNumber('Психомистицизм (эмпатия)')}
          {this.ItemNumber('Технологика (смекалка)')}
        </List>
      </div>
    );
  }
}

export default Skills;
