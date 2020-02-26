import React from 'react';
import {
  Button, InputItem, List,
} from 'antd-mobile';
import { FaRocket } from 'react-icons/fa';
import NodeZip from 'node-zip';
//import QRCode from 'qrcode';
import CommonList from '../../Components/CommonList';
import Print from '../Print';


class Settings extends CommonList {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPrint() {
    // this.setState({ print: 1 });
    this.print.print();
  }

  async onShare() {
    const zip = new NodeZip();
    zip.file('character.zip', JSON.stringify(this.props.data));
    const data = zip.generate({ base64: true, compression: 'DEFLATE' });
    const shareLink = `${document.location.href.split(/\?/)[0]}?${data}`;
    await this.setState({ shareLink });

    const copyEvent = new ClipboardEvent('copy', { dataType: 'text/plain', shareLink });
    document.dispatchEvent(copyEvent);
    this.input.inputRef.inputRef.select()
    document.execCommand('COPY')
//    QRCode.toCanvas(this.qrcode, shareLink);
  }

  onChange(a, b) {
    const { data = {} } = this.props;
    data[a] = b;
    this.props.onSave && this.props.onSave(data);
  }

  onMusic() {
    this.onChange('music', 1);
  }

  render() {
    const { onPrint, onShare, onMusic } = this;
    const { music, shareLink } = this.state;

    return (
      <div>
        <h1>Settings</h1>
        <List renderHeader={(e) => <h4>Настройки</h4>}>
          {this.ItemCheck('Новостная бегущая строка')}
          {this.ItemCheck('Музыка')}
          {this.ItemString('URL_character')}
          {this.ItemString('URL_background')}
          <List.Item>
            <div className="d-flex flex-auto justify-content-around">
              <Button onClick={onPrint.bind(this)} className="pl-3 pr-3">Печать</Button>
              <Button onClick={onShare.bind(this)} className="pl-3 pr-3">Поделиться</Button>
              {/*
              <Button onClick={onMusic.bind(this)} className="pl-3 pr-3">Музыка</Button>
*/}
            </div>
          </List.Item>
          <List.Item><InputItem label="Link" className="link" value={shareLink} hidden={!shareLink} ref={(ref) => this.input = ref} /></List.Item>
          <List.Item>
            <div className="d-flex justify-content-center">
              <canvas className="qrcode" hidden={!shareLink} ref={(ref) => this.qrcode = ref} />
            </div>
          </List.Item>
        </List>
        <Print data={this.props.data} ref={(ref) => this.print = ref} />
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
