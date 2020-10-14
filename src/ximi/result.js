import React, { Component } from 'react';
import './result.css';
import str from 'string-length'
import Element_name from './Element.json';
class element extends Component {
    constructor(props) {
        super(props);
    }
    Valent(val) {
        const re = /^[0-9\b]+$/;
        const first = '';
        for (var i = 1; i < val.length; i++) {
            if (re.test(val.substr(i, i + 1))) {
                return (
                    <sub>
                        {console.log(val.substr(i, i + 1))}
                    </sub>
                )
            } else {
                return (
                    <div>
                        {console.log(val.substr(i, i + 1))}
                    </div>
                )
            }
        }
    }
    render() {
        if (this.props.Lab_Element == "Element") {
            return (
                <div>
                    <div className={"element_result result"} style={{/*/ height: 200/*/ }}>
                        {//элементийг хэвлэж харуулах//
                        }
                        {Element_name.map((Elem, index) => {
                            return <div className={"Element_name"} sty>
                                {this.props.Lab_Element == "Element" && this.props.Result_element == Elem.signal &&
                                    <div className={"Result_element"}>
                                        <div className={"Elements_order"}>
                                            {"Дэс дугаар :" + Elem.id}
                                        </div>
                                        <div className={"Elements_order"}>
                                            {"Химийн тэмдэг :" + Elem.signal}
                                        </div>
                                        <div className={"Elements_order"}>
                                            {"Элементийн нэр :" + Elem.name}
                                        </div>
                                        <div className={"Elements_order"}>
                                            {"Х.Ц.С.Ч :" + Elem.resister}
                                        </div>
                                        <div className={"Elements_order"}>
                                            {"Атомын радиус, нм :" + Elem.atom_radius}
                                        </div>
                                        <div className={"Elements_order"}>
                                            {"Валентийн электрон байгууламж :" + Elem.valent.toUpperCase()}
                                        </div>
                                        <div className={"Elements_order"}>
                                            {"Харьцангуй атом масс :" + Elem.atom_mass}
                                        </div>
                                    </div>
                                }
                            </div>
                        })}
                    </div>

                </div>
            );
        } else if (this.props.Lab_Element == "Calculator") {
            return (
                <div className={"Cresult"}>
                    {//this.props.result.toUpperCase()
                    }
                    <iframe src="https://phet.colorado.edu/sims/html/balancing-chemical-equations/latest/balancing-chemical-equations_en.html" width="100%" height="100%" scrolling="no" allowfullscreen></iframe>
                </div>
            );
        } else {
            return (
                <div className={"empty"}>
                </div>
            );
        }
    }
}
export default element;