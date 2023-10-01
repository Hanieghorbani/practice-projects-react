import React from "react"
import "./Ticket.css"

export default class Ticket extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      countriesData: {
        Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
        Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
        US: ["Los Angles", "San Diego", "Chicago"],
      },

      mainCountryCities: [],
    }
  }

  selectHandler(e) {
    if (e.target.value != -1) {
      this.setState({
        mainCountryCities: this.state.countriesData[e.target.value],
      })
    } else {
      this.setState({
        mainCountryCities: [],
      })
    }
  }

  render() {
    return (
      <div className="container row">
        <div className="col-md-6 box">
          <input className="fnameInput" placeholder="First Name" />
        </div>

        <div className="col-md-6 box">
          <input className="lnameInput" placeholder="Last Name" />
        </div>
        <div className="col-md-6 box">
          <input className="phoneInput" placeholder="Phone Number" />
        </div>
        <div className="col-md-6 box">
          <input className="emailInput" placeholder="Email" />
        </div>
        <div className="col-md-6 box">
          <select
            className="countrySelect text-dark"
            onChange={this.selectHandler.bind(this)}
          >
            <option value="-1" className="optionT">
              Please Select ...
            </option>
            <option className="option" value="Iran">
              Iran
            </option>
            <option className="option" value="Turkey">
              Turkey
            </option>
            <option className="option" value="US">
              United State
            </option>
          </select>
        </div>
        <div className="col-md-6 box">
          <select className="citySelect text-dark">
            {this.state.mainCountryCities.length ? (
              this.state.mainCountryCities.map((city) => (
                <option value={city} className="optionT">
                  {city}
                </option>
              ))
            ) : (
              <option value="-1" className="optionT">
                Please Select ...
              </option>
            )}
          </select>
        </div>
        <div className="col-md-2 box mx-auto">
          <button className="btn">Book a ticket</button>
        </div>
      </div>
    )
  }
}
