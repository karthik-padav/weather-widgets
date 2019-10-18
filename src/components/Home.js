import React from 'react';
import { NavLink } from 'react-router-dom';

function Home(props) {
    return (
        <div className="container">
            <br /><br />
            {props.widgetsListArray.length > 0 ?
                <div className="row">
                    {props.widgetsListArray.map((widgets, index) =>
                        <div key={index} className="col-sm-3">
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
                            </div>
                        </div>
                    )}
                </div> :
                <div className="addWidgits_home">
                    <NavLink exact to="/settings">
                        <div className="btn_w">
                            <span className="glyphicon glyphicon-plus"></span>
                        </div>
                    </NavLink>
                    <h4>Add widgets</h4>
                </div>
            }
        </div>
    )
}

export default Home;