import React, { Component } from 'react';
import './try-glass.css';

const listGlass = [
  {
    id: 1,
    price: 30,
    name: 'GUCCI G8850U',
    url: '../../public/images/v1.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',
  },
  {
    id: 2,
    price: 50,
    name: 'GUCCI G8759H',
    url: '../../public/images/v2.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',
  },
  {
    id: 3,
    price: 30,
    name: 'DIOR D6700HQ',
    url: '../../public/images/v3.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',
  },
  {
    id: 4,
    price: 70,
    name: 'DIOR D6005U',
    url: '../../public/images/v4.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',
  },
  {
    id: 5,
    price: 40,
    name: 'PRADA P8750',
    url: '../../public/images/v5.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',
  },
  {
    id: 6,
    price: 60,
    name: 'PRADA P9700',
    url: '../../public/images/v6.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',
  },
  {
    id: 7,
    price: 80,
    name: 'FENDI F8750',
    url: '../../public/images/v7.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',
  },
  {
    id: 8,
    price: 100,
    name: 'FENDI F8500',
    url: '../../public/images/v8.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',
  },
  {
    id: 9,
    price: 60,
    name: 'FENDI F4300',
    url: '../../public/images/v9.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',
  },
];

export default class TryGlass extends Component {
  state = {
    thongTin: {
      id: 1,
      name: 'GUCCI G8850U',
      price: 80,
      url: '../../public/images/v1.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',
    },
  };

  handleChangeGlass = (id) => {
    const glass = listGlass.find((item) => item.id === id);
    if (glass) {
      this.setState({
        thongTin: glass,
      });
    }
  };

  render() {
    return (
      <>
        <div className="background">
          <div className="container">
            <header>
              <h1>TRY GLASS APP ONLINE</h1>
            </header>
            <section className="content">
              <div className="contentImg">
                <img src="../../public/images/model.jpg" alt="" />
                <div className="imageGlass">
                  <ThuGlass thuGlass={this.state.thongTin} />
               </div>
                <div className="imageTitle">
                  <ChiTiet infoGlass={this.state.thongTin} />
                </div>
              </div>
            </section>
            <section className="glasser">
              <div className="row">
                {listGlass.map((item) => (
                  <GlassItem
                    glass={item}
                    key={item.id}
                    handleChangeGlass={this.handleChangeGlass}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

class GlassItem extends Component {
    
  render() {
    const item = this.props.glass;
    return (
      <>
        <div className="glassImg col-2">
          <a href="#" onClick={() => this.props.handleChangeGlass(item.id)}>
            <img className="imgItem" src={item.url} alt="" />
          </a>
        </div>
      </>
    );
  }
}

class ChiTiet extends Component {
  render() {
    const info = this.props.infoGlass;
    return (
      <>
        <div className="bgInfo bg-danger">
          <h4 className="text-warning">{info.name}</h4>
          <p className="text-white">{info.desc}</p>
        </div>
      </>
    );
  }
}

class ThuGlass extends Component {
  render() {
    const thu = this.props.thuGlass;
    return (
      <>
        <div className="bgGlass">
          <img src={thu.url} alt="" />
        </div>
      </>
    );
  }
}