// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyDetails
  return (
    <li className="list-item-container">
      <div className="log-container">
        <img src={currencyLogo} alt={currencyName} className="logo-img" />
        <p className="currency-details-para">{currencyName} </p>
      </div>
      <div className="list-item-para-container">
        <p className="currency-details-para">{usdValue} </p>
        <p className="currency-details-para">{euroValue} </p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
