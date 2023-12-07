// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    currencyList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCurrencyList()
  }

  renderLoader = () => (
    <div className="loader-bg" data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderListItem = () => {
    const {currencyList} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-currency-img"
        />
        <div className="crypto-currency-item-container">
          <ul className="list-heading-container">
            <p className="currency">Coin Type</p>
            <div className="crypto-text-container">
              <p className="currency">USD</p>
              <p className="currency">EURO</p>
            </div>
          </ul>
          <ul className="currency-list-container">
            {currencyList.map(eachItem => (
              <CryptocurrencyItem
                key={eachItem.id}
                currencyDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updateData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    this.setState({
      currencyList: updateData,
      isLoading: false,
    })
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? this.renderLoader() : this.renderListItem()
  }
}
export default CryptocurrenciesList
