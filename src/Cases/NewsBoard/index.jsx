import React from 'react';

class NewsBoard extends React.Component {
  render() {
    const { news = [] } = this.props;

    return (
      <div className="NewsBoard">
        {news.reverse().map((s, i) => (
          <div className="p-3 text-justify" key={i}>
            {s.split(/\n/).map((a) => <p>{a}</p>)}
          </div>
        ))}
      </div>
    );
  }
}

export default NewsBoard;
