var products = [
  {
    id: 1,
    imgSrc: 'img/item-1.jpeg',
    name: 'Black Fashion Zapdram',
    discount: 11,
    oldPrice: 500,
    price: 449.99,
    rating: 5
  },

  {
    id: 2,
    imgSrc: 'img/item-2.jpeg',
    name: 'Coneco Product Sample',
    oldPrice: 0,
    price: 310,
    rating: 0
  },

  {
    id: 3,
    imgSrc: 'img/item-3.jpeg',
    name: 'Daltex Product Example',
    discount: 20,
    oldPrice: 250,
    price: 200,
    rating: 0
  },

  {
    id: 7,
    imgSrc: 'img/item-7.jpeg',
    name: 'Kaydex Product Sample',
    discount: 11,
    oldPrice: 500,
    price: 450.00,
    rating: 0
  },

  {
    id: 8,
    imgSrc: 'img/item-8.jpeg',
    name: 'Kelend Metus Sample',
    oldPrice: 400,
    price: 330,
    rating: 5
  },

  {
    id: 9,
    imgSrc: 'img/item-9.jpeg',
    name: 'Daltex Product Example',
    discount: 20,
    price: 320,
    rating: 0
  },

  {
    id: 10,
    imgSrc: 'img/img_small1.jpeg',
    name: 'Kaydex Product Sample',
    discount: 11,
    oldPrice: 500,
    price: 450.00,
    rating: 0
  },

  {
    id: 11,
    imgSrc: 'img/img_small2.jpeg',
    name: 'Kelend Metus Sample',
    oldPrice: 400,
    price: 330,
    rating: 5
  },

  {
    id: 12,
    imgSrc: 'img/img_small3.jpeg',
    name: 'Daltex Product Example',
    discount: 20,
    price: 320,
    rating: 0
  },

  {
    id: 13,
    imgSrc: 'img/img_small4.jpeg',
    name: 'Kelend Metus Sample',
    oldPrice: 400,
    price: 330,
    rating: 5
  },

  {
    id: 14,
    imgSrc: 'img/img_small5.jpeg',
    name: 'Daltex Product Example',
    discount: 20,
    price: 320,
    rating: 0
  }
];

var App = React.createClass({

  render: function () {
    var list = this.props.arr.map(function(el) {

      return (
        <Product imgSrc={el.imgSrc}
                 imgSrc2={el.imgSrc2}
                 name={el.name}
                 discount={el.discount}
                 oldPrice={el.oldPrice}
                 price={el.price}
                 rating={el.rating}
                 key={el.id}/>
      );
    });

    var list2 = this.props.arr.map(function(el) {

      return (
        <ProductSmall imgSrc={el.imgSrc}
                      imgSrc2={el.imgSrc2}
                      name={el.name}
                      oldPrice={el.oldPrice}
                      price={el.price}
                      key={el.id}/>
      );
    });

    return (
      <div className="app">
        <div className="header">
          <div className="header__top">
            <div className="top-line">
              <div className="container">
                <div className="top-line__wrap">
                  <div className="top-line__left">
                    <div className="user-menu">
                      <ul className="user-menu__list">
                        <li className="user-menu__el">
                          <UserLink href="#" ico="fa-user">
                            Login
                          </UserLink>
                        </li>
                        <li className="user-menu__el">
                          <UserLink href="#" ico="fa-heart">
                            Wishlist
                          </UserLink>
                        </li>
                        <li className="user-menu__el">
                          <UserLink href="#" ico="fa-shopping-cart">
                            Checkout
                          </UserLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="top-line__center">
                    <div className="address">
                      <Contact ico="fa-map-marker"
                               text="102580 Santa Monica BLVD Los Angeles"/>
                    </div>
                  </div>
                  <div className="top-line__right">
                    <div className="register">
                      <UserLink href="#" ico="fa-pencil">Register</UserLink>
                    </div>
                    <div className="currency">
                      <span>usd</span>
                      <Icon ico="fa-angle-down"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* end top-line */}
          </div>{/* end header__top */}

          <div className="header__center container">
            <Logo src="img/logo.png" />
            <SearchBox />
            <Item ico='fa-phone'
                  text='Online Consultation'
                  details='Call: + 0123 456 789' />
          </div>

          <div className="header__bottom container">
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__el">
                  <MainNav href="#">home</MainNav>
                </li>
                <li className="nav__el">
                  <div className="badge">new</div>
                  <MainNav href="#">shop
                    <Icon ico="fa-angle-down"/>
                  </MainNav>
                </li>
                <li className="nav__el">
                  <MainNav href="#">blog</MainNav>
                </li>
                <li className="nav__el">
                  <MainNav href="#">pages
                    <Icon ico="fa-angle-down"/>
                  </MainNav>
                </li>
                <li className="nav__el">
                  <MainNav href="#">vendors</MainNav>
                </li>
                <li className="nav__el">
                  <div className="badge">new</div>
                  <MainNav href="#">new posts
                    <Icon ico="fa-angle-down"/>
                  </MainNav>
                </li>
                <li className="nav__el">
                  <div className="badge">new</div>
                  <MainNav href="#">features</MainNav>
                </li>
                <li className="nav__el">
                  <MainNav href="#">contact us</MainNav>
                </li>
                <li className="nav__el">
                  <MainNav href="#">download now</MainNav>
                </li>
              </ul>
            </nav>
          </div>{/* end header__bottom */}
        </div>{/* end header */}

        <div className="main container">
          <div className="main__left">
            <Sidebar />
          </div>
          <div className="main__right">
            <Title size="3">New products</ Title>
            <div className="products">
              <div className="products__list">
                {list[0]}
                {list[1]}
                {list[2]}
              </div>
            </div>

            <Title size="3">Top sellers</ Title>
            <div className="products">
              <div className="products__list">
                {list[3]}
                {list[4]}
                {list[5]}
              </div>
            </div>

            <ItemPost imgSrc="img/post-1.jpg"
                      href="#"
                      title="Post with images"
                      author="Arena Themes"
                      date="May 16, 2016"
                      comments="0"/>

            <ItemPost imgSrc="img/post-2.jpg"
                      href="#"
                      title="Post with images"
                      author="Arena Themes"
                      date="May 16, 2016"
                      comments="0"/>

            <ItemPost imgSrc="img/post-3.jpg"
                      href="#"
                      title="Post with images"
                      author="Arena Themes"
                      date="May 16, 2016"
                      comments="0"/>

          </div>
        </div>{/* end main */}

        <div className="row container">

          <div className="products">
            <div className="products__col">
              <Title size="4">Sale Products</ Title>
              {list2[3]}
              {list2[4]}
              {list2[5]}
            </div>
            <div className="products__col">
              <Title size="4">Latest Products</ Title>
              {list2[0]}
              {list2[1]}
              {list2[2]}
            </div>
            <div className="products__col">
              <Title size="4">Trendy Products</ Title>
              {list2[6]}
              {list2[7]}
              {list2[8]}
            </div>
            <div className="products__col">
              <Title size="4">Top Rated</ Title>
              {list2[9]}
              {list2[7]}
              {list2[10]}
            </div>
          </div>

        </div>

        <div className="partner">
          <div className="container">
            <Title size="3">Our Brands</ Title>

            <ul className="partner__list">
              <li className="partner__el">
                <Image src="img/partner_1.png"/>
              </li>
              <li className="partner__el">
                <Image src="img/partner_2.png"/>
              </li>
              <li className="partner__el">
                <Image src="img/partner_3.png"/>
              </li>
              <li className="partner__el">
                <Image src="img/partner_4.png"/>
              </li>
              <li className="partner__el">
                <Image src="img/partner_5.png"/>
              </li>
              <li className="partner__el">
                <Image src="img/partner_6.png"/>
              </li>
            </ul>
          </div>
        </div>

        <footer className="footer">

          <div className="footer__top">
            <div className="container">
              <Social />
            </div>
          </div>
          <div className="footer__bottom container">
            <div className="footer__wrap">
              <div className="footer__col">
                <Title size="4">Who we are</ Title>
                <Logo src='img/logo.png'/>
                <Contacts />
              </div>

              <div className="footer__col">
                <Title size="4">Twitter</ Title>
                <Item src="img/profile.jpg"
                      text='@Shopify'
                      details='@twitter' />
                <p>Posted 30 minutes ago</p>
                <Item src="img/profile.jpg"
                      text='@Shopify'
                      details='#SideHustle' />
                <p>Posted 2 hours ago</p>
              </div>

              <div className="footer__col">
                <Title size="4" color="is-white">Information</Title>
                <Item ico='fa-phone'
                      text='Online Consultation'
                      details='Call: + 0123 456 789' />
                <Item ico='fa-life-ring'
                      text='Customer Support'
                      details='Check our documentation' />
                <Item ico='fa-question-circle'
                      text='F.A.Q.'
                      details='Check our F.A.Q.' />
                <Item ico='fa-thumbs-up'
                      text='Big Community'
                      details='We have 245 positive reviews' />
              </div>

              <div className="footer__col">
                <Title size="4"
                       color="is-white">
                  Subscribe To Our Newsletter
                </Title>
                <Btn color="btn-blue">Subscribe!</Btn>
              </div>
            </div>
          </div>
        </footer>{/* end footer */}

        <Btn color="btn-blue">Subscribe!</Btn>
        <Btn color="btn-green">accept</Btn>
        <Btn color="btn-transparent">no thanks</Btn>
        <Btn color="btn-white">shop now</Btn>
        <Btn color="btn-white">shop now</Btn>
        <Btn color="btn-cart" circle="btn-circle">
          <Icon url='#' ico="fa-shopping-cart"/>
        </Btn>
      </div>
    );
  }
});

var Product = React.createClass ({

  render: function() {
    var rating = this.props.rating,
      oldPrice = this.props.oldPrice,
      discount = this.props.discount;

    return (
      <div className="product">
        <div className="product__top">
          <Image src={this.props.imgSrc} alt=""/>
          {discount ? <div className="product__discount"><span>{discount}%</span></div> : null}
        </div>

        <div className="product__bottom">
          <div className="product__left">
            <Title size="4">{this.props.name}</Title>
            {rating == 0 ?
              <div className="rating">
                <Icon ico="fa-star is-gray" />
                <Icon ico="fa-star is-gray" />
                <Icon ico="fa-star is-gray" />
                <Icon ico="fa-star is-gray" />
                <Icon ico="fa-star is-gray" />
              </div> : rating == 5 ?
              <div className="rating">
                <Icon ico="fa-star is-green" />
                <Icon ico="fa-star is-green" />
                <Icon ico="fa-star is-green" />
                <Icon ico="fa-star is-green" />
                <Icon ico="fa-star is-green" />
              </div> : null}
            {oldPrice ? <span className="product__old-price">{oldPrice}</span> : null}
            <span className="product__price">{this.props.price}</span>

          </div>
          <div className="product__right">
            <Btn color="btn-cart" circle="btn-circle">
              <Icon url='#' ico="fa-shopping-cart"/>
            </Btn>
          </div>
        </div>

      </div>
    );
  }
});

var ProductSmall = React.createClass ({

  render: function() {
    var oldPrice = this.props.oldPrice
    return (
      <div className="product-small">
        <div className="product-small__left">
          <div className="product-small__img">
            <Image src={this.props.imgSrc} alt=""/>
          </div>
        </div>
        <div className="product-small__right">
          <Title size="4">{this.props.name}</Title>
          {oldPrice ? <p className="product__old-price">{oldPrice}</p> : null}
          <p className="product__price">{this.props.price}</p>
        </div>
      </div>
    );
  }
});

var ItemPost = React.createClass({

  render: function () {
    var imgSrc = this.props.imgSrc,
      href = this.props.href,
      title = this.props.title,
      author = this.props.author,
      date = this.props.date,
      comments = this.props.comments;

    return (
      <div className="item-post">
        <div className="item-post__top">
          <Image cls="item-post__img" src={imgSrc}/>
        </div>
        <div className="item-post__center">
          <a className="item-post__link" href={href}>{title}</a>
          <p>
            <span className="item-post__author">By: {author}</span>
            <span className="item-post__author"> | </span>
            <span className="item-post__date">{date}</span>
          </p>
          <p className="item-post__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue
            lectus, interdum ut lorem eu, interdum mattis massa. Donec
            consectetur...
          </p>
        </div>
        <div className="item-post__bottom">
          <span>
            <Icon ico="fa-comments is-gray"/>
            ({comments})
          </span>
          <span>
            <Icon ico="fa-chevron-right is-gray"/>
          </span>
        </div>
      </div>
    );
  }
});

var Test = React.createClass ({

  render: function() {
    var cls = 'ico',
      mod = this.props.color;

    if (mod) {
      cls += ' ' + mod.split(' ').map(function(x) {
          return x;
        }).join(' ');
    }

    return (
      <div className={cls}></div>
    );
  }
});

var Banner = React.createClass({

  render: function () {

    return (
      <div className="banner">

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

var UserLink = React.createClass({

  render: function () {

    return (
      <a className="user-link" href={this.props.href}>
        <Icon ico={this.props.ico}/>
        <span>{this.props.children}</span>
      </a>
    );
  }
});

var Slider = React.createClass({

  render: function () {

    return (
      <div className="slider">

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

var SearchBox = React.createClass ({

  render: function() {

    return (
      <form className="search">
        <input className="search__el" type="search" placeholder="Search"/>
        <div className="search__action">
          <Btn color="btn-grey"><Icon ico="fa-search"/></Btn>
        </div>
      </form>
    );
  }
});

var Icon = React.createClass ({

  render: function() {
    var cls = 'fa',
      mod = this.props.ico;

    if (mod) {
      cls += ' ' + mod.split(' ').map(function(x) {
          return x;
        }).join(' ');
    }

    return (
      <i className={cls}></i>
    );
  }
});

var Image = React.createClass ({

  render: function() {

    return (
      <img className={this.props.cls} src={this.props.src} />
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
            <Contact ico="fa-phone" text="111112336"/>
          </li>
          <li className="contacts__el">
            <Contact ico="fa-envelope-o" text="contact@bitcode.guru"/>
          </li>
          <li className="contacts__el">
            <Contact ico="fa-map-marker" text="102580 Santa Monica BLVD Los Angeles"/>
          </li>
        </ul>
      </div>
    );
  }
});

var Btn = React.createClass ({

  render: function() {
    var cls = 'btn ',
        color = this.props.color,
        circle = this.props.circle;

    return (
      <button className={( color ? cls + color : cls ) + ( circle ? ' ' + circle : '' )}>
        {this.props.children}
      </button>
    );
  }
});

var Sidebar = React.createClass({

  render: function () {

    return (
      <div className="sidebar">
        <Title size="4">Categories</Title>
        <ul className="sidebar__list">
          <li className="sidebar__el">
            <Category src="img/gift.png" name="Birthday Gifts" amount="17"/>
          </li>
          <li className="sidebar__el">
            <Category src="img/decor-art.png" name="Decor Art" amount="5"/>
          </li>
          <li className="sidebar__el">
            <Category src="img/every-day.png" name="Every Day" amount="8"/>
          </li>
          <li className="sidebar__el">
            <Category src="img/chair.png" name="Furniture" amount="5"/>
          </li>
          <li className="sidebar__el">
            <Category src="img/lamp.png" name="Illumination" amount="10"/>
          </li>
          <li className="sidebar__el">
            <Category src="img/pan.png" name="Kitchen Things" amount="8"/>
          </li>
          <li className="sidebar__el">
            <Category src="img/stemware.png" name="Party" amount="2"/>
          </li>
          <li className="sidebar__el">
            <Category src="img/personal.png" name="personal" amount="1"/>
          </li>
          <li className="sidebar__el">
            <Category src="img/personals.png" name="personals" amount="6"/>
          </li>
          <li className="sidebar__el">
            <Category src="img/extinguisher.png" name="extinguisher" amount="4"/>
          </li>
          <li className="sidebar__el">
            <Category src="img/toy.png" name="toy" amount="5"/>
          </li>
          <li className="sidebar__el">
            <Category src="img/variables.png" name="variables" amount="11"/>
          </li>
          <li className="sidebar__el">
            <Category src="img/vintage.png" name="vintage" amount="11"/>
          </li>
        </ul>
      </div>
    );
  }
});

var Category = React.createClass({

  render: function () {

    return (
      <div className="category">
        <Image cls="category__img" src={this.props.src}/>
        <span className="category__name">{this.props.name}</span>
        <span className="category__amount">({this.props.amount})</span>
      </div>
    );
  }
});

var MainNav = React.createClass({

  render: function () {

    return (
      <a className="main-nav" href={this.props.href}>{this.props.children}</a>
    );
  }
});

var Item = React.createClass({

  render: function () {
    var ico = this.props.ico,
        src = this.props.src;

    return (
      <div className="item">
        <div className="item__left">
          {ico ?
            <div className="item__ico">
              <Icon ico={this.props.ico}/>
            </div>
            : src ?
            <div className="item__ico">
              <Image src={this.props.src}/>
            </div>
            : null
          }
        </div>
        <div className="item__right">
          <p className="item__text">
            {this.props.text}
          </p>
          <p className="item__details">
            {this.props.details}
          </p>
        </div>
      </div>
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

//var React = require('react');
//var Slider = require('react-slick');
//
//var SimpleSlider = React.createClass({
//  render: function () {
//    var settings = {
//      dots: true,
//      infinite: true,
//      speed: 500,
//      slidesToShow: 1,
//      slidesToScroll: 1
//    };
//    return (
//      <Slider {...settings}>
//        <div><h3>1</h3></div>
//        <div><h3>2</h3></div>
//        <div><h3>3</h3></div>
//        <div><h3>4</h3></div>
//        <div><h3>5</h3></div>
//        <div><h3>6</h3></div>
//      </Slider>
//    );
//  }
//});

ReactDOM.render(
  <App arr={products} />,
  document.getElementById('content')
);


