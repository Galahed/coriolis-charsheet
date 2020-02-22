import React from 'react';
import {
  Button, InputItem, List,
} from 'antd-mobile';
import { FaRocket } from 'react-icons/fa';
import NodeZip from 'node-zip';
import QRCode from 'qrcode';
import CommonList from '../../Components/CommonList';


class Settings extends CommonList {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPrint() {
    const {
      URL_character, URL_background, char = 1, bg = 1,
    } = this.props.data;
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
    const cabin = seria('Снаряжение') + seria('Прочее');
    const items = seria('Предмет');
    const notes = 'Заметки';

    const f = this.iframe;
    f.contentWindow.contents = `
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en"><head>
      <style>
        @page{size:auto;margin:0;} 
        html,body{margin:0;width:100%;min-height:100%;} 
        .main,.char{width:100%;height:100%}
        .text{display:flex;margin:auto;position: fixed;left:0;top:0;flex-wrap: wrap;justify-content: space-between;flex:1 1;}
        .text .row{display:flex;flex-direction:row;justify-content:space-between;flex:1 1;}
        .text div.block{width:200px;overflow:hidden;border:1px solid #aaa;border-radius:5px;margin:20px;padding:5px;}
      </style>
    </head><body>
      <div class="main" style="background:radial-gradient(rgba(100,100,100,0.7),rgba(255,255,255,1)),${bgLink};background-size:cover">
        <div class="char" style="background: ${charLink};">
        </div>
        <div class="text">
         <div class="row">
           <div class="block">${print(attr)}</div>
           <div class="block">${print(appears)}</div>
           <div class="block">${print(gears)}</div>
         </div>
         <div class="row">
           <div class="block">${print(tallents)}</div>
           <div class="block">${print(contacts)}</div>
         </div>
         <div class="row">
           <div class="block">${print(cabin)}</div>
           <div class="block">${print(items)}</div>
         </div>
         <div class="row">
           <div class="block">${print(notes)}</div>
           <div class="block">${print(notes)}</div>
         </div>
        </div>
      </div>
      <script>const printPage=()=>{ window.focus(); window.print();return;};setTimeout(printPage,200)</script>
    </body></html>
    `;
    f.src = 'javascript:window["contents"]';
    f.contentWindow.print();
  }

  async onShare() {
    const zip = new NodeZip();
    zip.file('character.zip', JSON.stringify(this.props.data));
    const data = zip.generate({ base64: true, compression: 'DEFLATE' });
    const shareLink = `${document.location.href.split(/\?/)[0]}?${data}`;
    await this.setState({ shareLink });
    const copyEvent = new ClipboardEvent('copy', { dataType: 'text/plain', shareLink });
    document.dispatchEvent(copyEvent);
    QRCode.toCanvas(this.qrcode, shareLink);
  }

  onChange(a, b) {
    const { data = {} } = this.props;
    data[a] = b;
    this.props.onSave && this.props.onSave(data);
  }

  onMusic() {
    this.onChange('music',1)
  }

  render() {
    const { onPrint, onShare, onMusic } = this;
    const { music, shareLink } = this.state;

    return (
      <div>
        <h1>Settings</h1>
        <List renderHeader={(e) => <h4>Настройки</h4>}>
          {this.ItemString('URL_character')}
          {this.ItemString('URL_background')}
          <List.Item>
            <div className="d-flex flex-auto justify-content-around">
              <Button onClick={onPrint.bind(this)} className="pl-3 pr-3">Печать</Button>
              <Button onClick={onShare.bind(this)} className="pl-3 pr-3">Поделиться</Button>
              <Button onClick={onMusic.bind(this)} className="pl-3 pr-3">Музыка</Button>
            </div>
          </List.Item>
          <List.Item><InputItem label="Link" className="link" value={shareLink} hidden={!shareLink} /></List.Item>
          <List.Item>
            <div className="d-flex justify-content-center">
              <canvas className="qrcode" hidden={!shareLink} ref={(ref) => this.qrcode = ref} />
            </div>
          </List.Item>
        </List>
        <div className="utils d-none">
          <iframe src="about:blank" id="f1" ref={(ref) => this.iframe = ref} />
        </div>
        <List renderHeader={(e) => <h4>О программе</h4>}>
          <List.Item>приложение компаньон для НРИ Кориолис</List.Item>
          <List.Item>2019, Innopolis</List.Item>
          <List.Item>
tlg: @launch_photon_torpedoes
            <FaRocket className="ml-3 color-red" />
          </List.Item>
        </List>
      </div>
    );
  }
}

export default Settings;
