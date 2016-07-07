
var App = React.createClass({

  render: function () {

    return (
      <div className="app">

        <footer className="footer">
          <div className="footer__top">
            <div className="container">
              <Social />
            </div>
          </div>
          <div className="footer__bottom container">
            <Title size="4">
              Who we are
            </ Title>
            <Logo src='img/logo.png'/>
            <Contacts />
          </div>
        </footer>

        <Btn color="is-blue">Subscribe!</Btn>
        <Btn color="is-green">accept</Btn>
        <Btn color="is-transparent">no thanks</Btn>

      </div>
    );
  }
});

var Logo = React.createClass({

  render: function () {

    return (
      <div className="logo">
        <a>
          <img className="logo__img" src={this.props.src} alt="logo"/>
        </a>
      </div>
    );
  }
});

var Social = React.createClass({

  render: function () {

    return (
      <div className="social">
        <div className="social__left">
          <Title size="4">
            Let’s connect:
          </ Title>
        </div>

        <div className="social__right">
          <SocialLinks />
        </div>
      </div>
    );
  }
});

var SocialLinks = React.createClass({

  render: function () {

    return (
      <div className="social-links">
        <ul className="social-links__list">
          <li className="social-links__el">
            <SocialIcon url='#' title='facebook' ico='facebook'/>
          </li>
          <li className="social-links__el">
            <SocialIcon url='#' title='linkedin' ico='linkedin'/>
          </li>
          <li className="social-links__el">
            <SocialIcon url='#' ico='twitter'/>
          </li>
          <li className="social-links__el">
            <SocialIcon url='#' ico='google-plus'/>
          </li>
          <li className="social-links__el">
            <SocialIcon url='#' ico='instagram'/>
          </li>
          <li className="social-links__el">
            <SocialIcon url='#' ico='github'/>
          </li>
          <li className="social-links__el">
            <SocialIcon url='#' ico='rss'/>
          </li>
          <li className="social-links__el">
            <SocialIcon url='#' ico='pinterest'/>
          </li>
          <li className="social-links__el">
            <SocialIcon url='#' ico='flickr'/>
          </li>
          <li className="social-links__el">
            <SocialIcon url='#' ico='bitbucket'/>
          </li>
          <li className="social-links__el">
            <SocialIcon url='#' ico='tumblr'/>
          </li>
          <li className="social-links__el">
            <SocialIcon url='#' ico='dribbble'/>
          </li>
          <li className="social-links__el">
            <SocialIcon url='#' ico='vimeo'/>
          </li>
          <li className="social-links__el">
            <SocialIcon url='#' ico='delicious'/>
          </li>
          <li className="social-links__el">
            <SocialIcon url='#' ico='skype'/>
          </li>
          <li className="social-links__el">
            <SocialIcon url='#' ico='digg'/>
          </li>
          <li className="social-links__el">
            <SocialIcon url='#' ico='behance'/>
          </li>
        </ul>
      </div>
    );
  }
});

var Icon = React.createClass ({

  render: function() {
    var cls = 'fa',
      ico = this.props.ico;

    return (
      <i className={ico ? cls + ' ' + cls + '-' + ico : cls}></i>
    );
  }
});

var SocialIcon = React.createClass ({

  render: function() {

    return (
      <a className="social-icon" href={this.props.url} title={this.props.title}>
        <Icon ico={this.props.ico} />
      </a>
    );
  }
});

var Title = React.createClass({

  render: function () {
    var size = this.props.size,
        text = this.props.children;

    return (
      <div className="title">
        {size == 1 ?
          <h1>{text}</h1>
          : size == 2 ?
          <h2>{text}</h2>
          : size == 3 ?
          <h3>{text}</h3>
          : size == 4 ?
          <h4>{text}</h4>
          : size == 5 ?
          <h5>{text}</h5>
          : size == 6 ?
          <h6>{text}</h6>
          : null
        }
      </div>
    );
  }
});

var Contact = React.createClass({

  render: function () {

    return (
      <div className="contact">
        <Icon ico={this.props.ico} />
        <span>{this.props.text}</span>
      </div>
    );
  }
});

var Contacts = React.createClass({

  render: function () {

    return (
      <div className="contacts">
        <ul className="contacts__list">
          <li className="contacts__el">
            <Contact ico="phone" text="111112336"/>
          </li>
          <li className="contacts__el">
            <Contact ico="envelope-o" text="contact@bitcode.guru"/>
          </li>
          <li className="contacts__el">
            <Contact ico="map-marker" text="102580 Santa Monica BLVD Los Angeles"/>
          </li>
        </ul>
      </div>
    );
  }
});

var Btn = React.createClass ({

  render: function() {
    var cls = 'btn ',
      color = this.props.color;

    return (
      <button className={color ? cls + color : cls}>
        {this.props.children}
      </button>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('content')
);


