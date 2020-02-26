import React from 'react';
import PropTypes from 'prop-types';

class Print extends React.Component {
  componentDidMount() {}

  print() {
    const { data } = this.props;
    const {
      URL_character, URL_background, char = 1, bg = 1,
    } = data;
    const charLink = `URL(${URL_character || `/coriolis/Images/Characters/${char}.png`}) center bottom/auto 80% no-repeat`;
    const bgLink = `black URL(${URL_background || `/coriolis/Images/Backgrounds/bg${bg}.jpg`}) center no-repeat`;

    const print = (text) => text.split(/\n/)
      .filter((a) => a.trim())
      .map((s) => {
        const d = this.props.data[s.trim()];

        return d ? `${s} ${d}` : '';
      }).filter((a) => a)
      .join('<br>');

    const seria = (s, m = 9) => (new Array(m)).fill(8).map((a, i) => `\n${s} ${i}\n`).join('');

    const attr = `
    Телосложение
    Ловкость
    Смекалка
    Эмпатия
    Опыт
    Пункты здоровья
    Пункты рассудка
    Радиация
    Травма 1
    Травма 2
    Травма 3`;

    const appears = `
Имя
Лицо
Одежда
Амплуа (Роль)
Амплуа команды
Личная проблема
Происхождение
Лик
Репутация
Биры`;

    const gears = `Броня${seria('Оружие', 4)}Снаряжение`;

    const tallents = `${seria('Талант', 4)}
Ближний бой (сила)
Влияние (эмпатия)
Выживание (смекалка)
Наблюдательность (смекалка)
Проворство (смекалка)
Сила (телосложение)
Скрытность (ловкость)
Стрельба (ловкость)

Инфоматика (смекалка)
Лидерство (эмпатия)
Медикургия (смекалка)
Мудрость (эмпатия)
Наука (смекалка)
Пилотирование (ловкость)
Психомистицизм (эмпатия)
Технологика (смекалка)
`;
    const contacts = seria('Контакт');
    const cabin = `Описание${seria('Оснащение')}${seria('Прочее')}`;
    const items = seria('Предмет');
    const notes = 'Заметки';
    const history = 'История';

    const f = this.iframe;
    f.contentWindow.contents = `
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en"><head>
      <style>
        @page{size:auto;margin:0;} 
        html,body{margin:0;width:100%;min-height:100%;} 
        .main,.char{width:100%;height:100%;-webkit-print-color-adjust: exact;}
        .text{display:flex;margin:auto;position: fixed;left:0;top:0;flex-wrap: wrap;justify-content: space-between;flex:1 1;}
        .text .row{display:flex;flex-direction:row;justify-content:space-between;flex:1 1;}
        .text div.block{width:230px;overflow:hidden;border:1px solid rgba(200,200,200,0.3);border-radius:5px;margin:5px;padding:5px;}
        pre{white-space: pre-line}
        pre,.text{font-size:14px;font-family:Monospace}
      </style>
    </head><body>
      <div class="main" style="background:radial-gradient(rgba(100,100,100,0.7),rgba(255,255,255,1)),${bgLink};background-size:cover">
        <div class="char" style="background: ${charLink};">
        </div>
        <div class="text">
         <div class="row">
           <div class="block">
              ${print(appears)}
              <hr/>
              ${print(gears)}
              <hr/>
              ${print(cabin)}
              <hr/>
              <pre>${print(history)}</pre>
            </div>
           <div class="block">${print(attr)}</div>
           <div class="block">
              ${print(tallents)}
              <hr/>
              ${print(items)}
              <hr/>
              ${print(contacts)}
              <hr/>
              <pre>${print(notes)}</pre>
           </div>
         </div>
        </div>
      </div>
      <script>const printPage=()=>{ window.focus(); window.print();return;};setTimeout(printPage,200)</script>
    </body></html>
    `;
    f.src = 'javascript:window["contents"]';
    f.contentWindow.print();
  }

  render() {
    return (
      <div className="print d-none">
        <iframe src="about:blank" id="f1" ref={(ref) => this.iframe = ref} />
      </div>
    );
  }
}

Print.propTypes = {
  data: PropTypes.shape({
    URL_character: PropTypes.string,
    URL_background: PropTypes.string,
    char: PropTypes.number,
    bg: PropTypes.number,
  }),
};

export default Print;
