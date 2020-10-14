import React, { Component } from 'react';
import './Reactions.css';
import lonh from './image/lonh.png'
import gal from './image/gal.png'
import tawiur from './image/tawiur.png'
//import Element_name from './Element.json';
const GUINEAPATHS = [lonh, gal];
class element extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rightContainer: [],
            leftContainer: [],
            Reactions: [],
            water: [],
            Cels: 0,
            Usmass: 100

        }
    }
    //  buttonClicked = (event) => {
    //    this.props.buttonClicked(event.target.name)
    //}
    onDragStart = (e, v) => {
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData("text/plain", v)
    }

    allowDrop = ev => {
        ev.preventDefault();
    }
    onDropReact = e => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        let { Reactions } = this.state;
        if (Reactions.length <= 13) {
            Reactions.push(data);
            this.setState({ Reactions });
        } else {
            alert('ширээ дүүрсэн байна')
        }
    }
    onDropTawiur = e => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        let { water } = this.state;
        if (water.length < 2) {
            if (water[0] != data) {
                water.push(data);
                this.setState({ water });
            } else {
                alert('тавиурт тависан байна')
            }
        } else {
            alert('тавиур дүүрсэн байна')
        }
    }

    render() {
        const { water, Reactions } = this.state;
        //tempratur 100 C xvrex ved xalalt zogsono
        if (water.length == 2 && this.state.Cels != 100) {
            setTimeout(() => { if (water.length == 2) { this.setState({ Cels: this.state.Cels + 1 }) } }, 1000)
        }
        if (this.props.Lab_Element != "Element") {
            return (
                <div>
                    <div className={"Tools"}><div>
                        <div class="tools" style={{ display: 'inline-block' }}>
                            <img className={"Rtool"}
                                style={{ width: 80, height: 100 }} src={GUINEAPATHS[1]}
                                onDragStart={(e) => this.onDragStart(e, gal)} />
                            <img className={"Rtool"}
                                style={{ width: 80, height: 100 }} src={GUINEAPATHS[0]}
                                onDragStart={(e) => this.onDragStart(e, lonh)} />
                        </div>
                    </div>
                    </div>

                    <div className={"Reactions"} onDragOver={this.allowDrop}
                        onDrop={this.onDropTawiur}
                        onDragStart={(e) => this.onDragStart(e, water.length)} >
                        {
                            water.map(itm => {
                                if (itm == "/static/media/gal.46cb89af.png") {
                                    return (
                                        <img style={{
                                            width: 80, height: 100,
                                            position: 'absolute', marginTop: 100, marginLeft: 25
                                        }} src={itm} />
                                    );
                                } else if (itm == "/static/media/lonh.f2e68a1e.png") {
                                    return (<div><p style={{ position: "absolute", marginTop: -10 }}>
                                        <h5>{this.state.Cels}<sup>o</sup>C</h5></p>
                                        <img style={{
                                            width: 80, height: 100,
                                            position: 'absolute', marginTop: -15, marginLeft: 20
                                        }} src={itm} />
                                    </div>
                                    );
                                }
                            })

                        }
                        < img src={tawiur}
                            style={{ width: 150, height: 220 }} >
                        </img>
                    </div>
                    <div className={"table"}
                        onDragOver={this.allowDrop}
                        onDrop={this.onDropReact}>
                        {
                            Reactions.map(itm => {
                                return (
                                    <img className={"talbeTools"}
                                        style={{ width: 80, height: 100 }}
                                        src={itm} />
                                );
                            })
                        }
                    </div>
                    <div className={"xol"}></div>
                    <div className={"xol"} style={{ marginLeft: 1050 }}></div>
                    <div className={"xol xoid"} style={{ marginLeft: 1210, marginTop: -170 }}></div>
                    <p className={"Ширээ"} style={{}}>Туршилтын тавцан</p>

                </div >
            );
        }
    }
}
export default element;