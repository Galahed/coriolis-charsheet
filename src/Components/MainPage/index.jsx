import React from 'react';
import {
  Button, Icon, NoticeBar, TabBar,
} from 'antd-mobile';
import {
  FaBraille, FaCogs,
  FaDollyFlatbed,
  FaProjectDiagram,
  FaRegAddressCard,
  FaShower, FaStickyNote,
  FaStopwatch, FaTools,
  FaUserAstronaut,
} from 'react-icons/fa';
import Selector from '../Selector';
import Appearance from '../../Cases/Appearance';
import Attributes from '../../Cases/Attributes';
import Skills from '../../Cases/Skills';
import Equipment from '../../Cases/Equipment';
import Contacts from '../../Cases/Contacts';
import Cabin from '../../Cases/Cabin';
import Items from '../../Cases/Items';
import Notes from '../../Cases/Notes';
import Settings from '../../Cases/Settings';
import NewsLine from '../../Cases/NewsLine';
import NewsBoard from '../../Cases/NewsBoard';
import NewsStorage from '../../Data/news';

// const Tab = function (props) { return <TabBar.Item {...props} icon={<Icon type={props.icon} />} />; };

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = { data: {} };
  }

  componentDidMount() {
    if (localStorage.coriolis) {
      const data = JSON.parse(localStorage.coriolis);
      this.setState({ data });
    }
    setTimeout((e) => this.setState({ loaded: 1 }), 100);
  }

  onPress(selected) { return (e) => this.setState({ selected }); }

  Tab(props) {
    return <TabBar.Item {...props} ico={<Icon type={props.icon} />} icon={props.icon} />;
  }

  onChange(data) {
    this.setState({ data });
    localStorage.coriolis = JSON.stringify(data);
  }

  changeCharacter(d) {
    const { data } = this.state;
    let { char = 0 } = data;
    char += d;
    if (char < 0) { char = 27; }
    if (char > 27) { char = 0; }
    data.char = char;
    this.onChange(data);
  }

  changeBackground(d) {
    const { data } = this.state;
    let { bg = 0 } = data;
    bg += d;
    if (bg < 0) { bg = 22; }
    if (bg > 22) { bg = 0; }
    data.bg = bg;
    this.onChange(data);
  }


  render() {
    const { onPress, Tab } = this;
    const { data, loaded, music } = this.state;
    const { char = 0, bg = 0 } = data;
    const { news } = NewsStorage;

    const { URL_character, URL_background } = data;
    const charLink = `URL(${URL_character || `/coriolis/Images/Characters/${char}.png`}) center bottom/auto 90% no-repeat`;
    const bgLink = `black URL(${URL_background || `/coriolis/Images/Backgrounds/bg${bg}.jpg`}) center no-repeat`;

    return (
      <div className="mainpage" style={{ background: bgLink, backgroundSize: 'cover', opacity: loaded ? 1 : 0 }}>
        <TabBar
          unselectedTintColor="gray"
          tintColor="white"
          barTintColor="#111"
          tabBarPosition="top"
        >
          {Tab({ title: 'Overview', icon: <FaBraille size="2rem" />, onPress: this.onPress(0) })}
          {Tab({ title: 'Appearance', icon: <FaUserAstronaut size="2rem" />, onPress: this.onPress(1) })}
          {Tab({ title: 'Attributes & Health', icon: <FaRegAddressCard size="2rem" />, onPress: this.onPress(2) })}
          {Tab({ title: 'Tallents & Skills', icon: <FaTools size="2rem" />, onPress: this.onPress(3) })}
          {Tab({ title: 'Weapon & Gears', icon: <FaDollyFlatbed size="2rem" />, onPress: this.onPress(4) })}
        </TabBar>
        <div className="character animated" style={{ background: charLink }}>
          <div className="flex-column w-100 h-100 flex-auto" hidden={this.state.selected}>
            <Button onClick={(e) => this.changeBackground(-1)} />
            <div className="d-flex flex-auto sides">
              <Button onClick={(e) => this.changeCharacter(-1)} />
              <Button onClick={(e) => this.changeCharacter(+1)} />
            </div>
            <Button onClick={(e) => this.changeBackground(+1)} />
          </div>
          <NewsLine news={news} onClick={this.onPress(10)} />
        </div>
        <Selector selected={this.state.selected} className="pane">
          <div hidden />
          <Appearance data={data} onSave={(data) => this.onChange(data)} />
          <Attributes data={data} onSave={(data) => this.onChange(data)} />
          <Skills data={data} onSave={(data) => this.onChange(data)} />
          <Equipment data={data} onSave={(data) => this.onChange(data)} />
          <Contacts data={data} onSave={(data) => this.onChange(data)} />
          <Cabin data={data} onSave={(data) => this.onChange(data)} />
          <Items data={data} onSave={(data) => this.onChange(data)} />
          <Notes data={data} onSave={(data) => this.onChange(data)} />
          <Settings data={data} onSave={(data) => this.onChange(data)} />
          <NewsBoard news={news} data={data} onSave={(data) => this.onChange(data)} />
        </Selector>
        <TabBar
          unselectedTintColor="gray"
          tintColor="white"
          barTintColor="#111"
          tabBarPosition="bottom"
          className="bottom"
        >
          {Tab({ title: 'People & Contacts', icon: <FaProjectDiagram size="2rem" />, onPress: this.onPress(5) })}
          {Tab({ title: 'Personal cabin', icon: <FaShower size="2rem" />, onPress: this.onPress(6) })}
          {Tab({ title: 'Small items', icon: <FaStopwatch size="2rem" />, onPress: this.onPress(7) })}
          {Tab({ title: 'Notes', icon: <FaStickyNote size="2rem" />, onPress: this.onPress(8) })}
          {Tab({ title: 'Settings', icon: <FaCogs size="2rem" />, onPress: this.onPress(9) })}
        </TabBar>
      </div>
    );
  }
}

export default MainPage;
