import React, { Component } from 'react';
import jsonData from '../data/city_list.json';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityList: JSON.parse(JSON.stringify(jsonData)),
            widgetList: this.props.widgetsListArray
        }
    }

    render() {
        const { cityList, widgetList } = this.state;
        return (
            <div className="container setting">
                <div className="add_city_widget">
                    <p>Select city:</p><br />
                    <div className="form-group">
                        <select className="form-control" onChange={this.selecedCity}>
                            <option value={0}>Select</option>
                            {cityList.map((item, index) => {
                                return <option key={index} value={item.id}>{item.name} - {item.country}</option>
                            })}
                        </select>
                    </div>
                </div>
                <br />
                <div className="row">
                    {widgetList.map((widgets, index) => {
                        return (
                            <div className="col col-md-4" key={index}>
                                <div className="widget_list_w shadow">
                                    <div className="left_b">
                                        <div className="icon_w">
                                            <i className={`wi wi-owm-${widgets.weather[0].id}`}></i>
                                        </div>
                                        <div className="title">
                                            <p><b>City:</b> {widgets.name}</p>
                                            <p><b>Temp:</b> {widgets.main.temp}&deg; C</p>
                                        </div>
                                    </div>
                                    <button type="button" onClick={() => this.props.removeWidget(widgets.id)} className="close" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    selecedCity = (e) => {
        this.props.addWidget(parseInt(e.target.value));
    }
}

export default Settings;