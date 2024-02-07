import { useState } from 'react'
import './App.css'

function ShopItemFunc (props) {
  return (
    <div className="main-content">
      <h2>{props.value.brand}</h2>
      <h1>{props.value.title}</h1>
      <h3>{props.value.description}</h3>
      <div className="description">{props.value.descriptionFull}</div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{props.value.currency}{props.value.price}.00</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}

function App(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc value={props.value}/>
      </div>
    </div>
  )
}

export default App
