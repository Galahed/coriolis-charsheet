import { NoticeBar } from 'antd-mobile';
import React from 'react';

class News extends React.Component {
  render() {
    const { news = [], onClick = () => {} } = this.props;
    const styling = {
      loop: true, leading: 500, trailing: 500, fps: 40, style: { padding: '0 7.5px' },
    };

    return (
      <div className="marquee-container">
        <NoticeBar marqueeProps={styling}>
          {news.map((s, i) => <span key={i} onClick={e=>onClick(i)}>{s}</span>)}
        </NoticeBar>
      </div>
    );
  }
}

export default News;
