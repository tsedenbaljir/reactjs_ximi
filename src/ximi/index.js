import React, { Component } from 'react';
import './index.css';
import Element from './element';
import Result from './result';
import Element_name from './Element.json';
import Reaction from './Reactions'
import Calculator from './Calculator'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                Lab_Element: 'Lab',
                //эхний юу эсвэл дараачийн элемент үү гэдэгийг тодорхойлно//
                Element: '',
                //үр дүн//
                result: ''
            },
            //Ямар элементийг харуулах гэж байгааг эндээс заана///
            Result_element: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (name) => {
        const { value } = this.state;
        this.setState({ value: { ...value, result: name } });
    }
    buttonClicked = (name) => {
        const { value } = this.state;
        //элемент дээр дархад түүнийг ямар элемент вэ гэдгийг энд авана//
        if (this.state.value.Lab_Element == "Calculator") {
            this.setState({ value: { ...value, result: name } });
        } else {
            this.setState({ Result_element: name });
        }
    }
    Lab_Element = (name) => {
        //Лаб ажил эсвэл Элементийн тухай харах гэдгийг сонгоно//
        const name2 = name.target.name;
        const { value } = this.state;
        this.setState({ value: { ...value, Lab_Element: name2 } });
    }

    render() {
        const Lab_Element = this.state.value.Lab_Element
        return (
            <div className={"body"}>
                {//////////солих////////////
                }

                <button className={"button Lab"} name="Lab" onClick={this.Lab_Element}>Лаборатори</button>
                <button className={"button Element"} name="Element" onClick={this.Lab_Element}>Элемент</button>
                <button className={"button Calculator"} name="Calculator" onClick={this.Lab_Element}>Тоглоом</button>
                {////////урвал сонгох//////////
                }
                {/*тооны машин */Lab_Element == "Calculator" &&
                    <div className={"element"}>
                        <div className={"urwal"}>
                            <Calculator buttonClicked={this.buttonClicked} />
                        </div>
                    </div> ///////элементүүд////////
                }

                <Result Lab_Element={this.state.value.Lab_Element}
                    Result_element={this.state.Result_element}
                    result={this.state.value.result} />
                {///урвалд орох лабын хэсэг////
                }
                {Lab_Element == "Lab" &&
                    <Reaction Lab_Element={this.state.value.Lab_Element} />}
                <div>{Lab_Element == "Element" &&
                    < Element buttonClicked={this.buttonClicked} />}</div>
            </div>
        );
    }
}
export default index;