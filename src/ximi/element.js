import React, { Component } from 'react';
import './element.css';
class element extends Component {
    constructor(props) {
        super(props);
    }
    buttonClicked = (event) => {
        this.props.buttonClicked(event.target.name)
    }
    render() {
        return (
            <div className={"elements"}>
                <table class="үелэх_систем">
                    <tr>
                    </tr>
                    <tr className={"1"}>
                        <td className={"үе"}>1</td>
                        <td><td className={"Бүлэг"}>IA</td><button className={"хий"} name={"H"} onClick={this.buttonClicked}><span className={"number"}>1</span>H</button></td>
                        <td></td><td></td><td></td><td></td><td></td>
                        <td></td><td></td><td></td><td></td>
                        <td></td><td></td><td></td><td></td>
                        <td></td><td></td><td></td>
                        <td><td className={"Бүлэг"}>VIIIA</td><button className={"хий"} name={"He"} onClick={this.buttonClicked}><span className={"number"}>2</span>He</button></td>

                    </tr>
                    <tr className={"2"}>
                        <td className={"үе"}>2</td>
                        <td><button className={"шүлтийн_метал"} name={"Li"} onClick={this.buttonClicked}><span className={"number"}>3</span>Li</button></td>
                        <td><td className={"Бүлэг"}>IIA</td><button className={"газрын_шүлтийн_метал"} name={"Be"} onClick={this.buttonClicked}><span className={"number"}>4</span>Be</button></td>
                        <td></td><td></td><td></td><td></td>
                        <td></td><td></td><td></td><td></td><td></td><td></td>
                        <td><td className={"Бүлэг"}>IIIA</td><button className={"хагас_метал"} name={"B"} onClick={this.buttonClicked}><span className={"number"}>5</span>B</button></td>
                        <td><td className={"Бүлэг"}>IVA</td><button className={"метал_бус_элемэнт"} name={"C"} onClick={this.buttonClicked}><span className={"number"}>6</span>C</button></td>
                        <td><td className={"Бүлэг"}>VA</td><button className={"метал_бус_элемэнт"} name={"N"} onClick={this.buttonClicked}><span className={"number"}>7</span>N</button></td>
                        <td><td className={"Бүлэг"}>VIA</td><button className={"метал_бус_элемэнт"} name={"O"} onClick={this.buttonClicked}><span className={"number"}>8</span>O</button></td>
                        <td><td className={"Бүлэг"}>VIIA</td><button className={"галгоген"} name={"F"} onClick={this.buttonClicked}><span className={"number"}>9</span>F</button></td>
                        <td><button className={"хий"} name={"Ne"} onClick={this.buttonClicked}><span className={"number"}>10</span>Ne</button></td>
                    </tr>
                    <tr className={"3"}>
                        <td className={"үе"}>3</td>
                        <td><button className={"шүлтийн_метал"} name={"Na"} onClick={this.buttonClicked}><span className={"number"}>11</span>Na</button></td>
                        <td><button className={"газрын_шүлтийн_метал"} name={"Mg"} onClick={this.buttonClicked}><span className={"number"}>12</span>Mg</button></td>
                        <td></td><td></td><td></td><td></td><td></td><td>
                        </td><td></td><td></td><td></td><td></td>
                        <td><button className={"метал"} name={"Al"} onClick={this.buttonClicked}><span className={"number"}>13</span>Al</button></td>
                        <td><button className={"хагас_метал"} name={"Si"} onClick={this.buttonClicked}><span className={"number"}>14</span>Si</button></td>
                        <td><button className={"метал_бус_элемэнт"} name={"P"} onClick={this.buttonClicked}><span className={"number"}>15</span>P</button></td>
                        <td><button className={"метал_бус_элемэнт"} name={"S"} onClick={this.buttonClicked}><span className={"number"}>16</span>S</button></td>
                        <td><button className={"галгоген"} name={"Cl"} onClick={this.buttonClicked}><span className={"number"}>17</span>Cl</button></td>
                        <td><button className={"хий"} name={"Ar"} onClick={this.buttonClicked}><span className={"number"}>18</span>Ar</button></td>
                    </tr>
                    <tr className={"4"}>
                        <td className={"үе"}>4</td>
                        <td><button className={"шүлтийн_метал"} name={"K"} onClick={this.buttonClicked}><span className={"number"}>19</span>K</button></td>
                        <td><button className={"газрын_шүлтийн_метал"} name={"Ca"} onClick={this.buttonClicked}><span className={"number"}>20</span>Ca</button></td>
                        <td><td className={"Бүлэг"}>IIIB</td><button className={"шилжилтийн_метал"} name={"Sc"} onClick={this.buttonClicked}><span className={"number"}>21</span>Sc</button></td>
                        <td><td className={"Бүлэг"}>IVB</td><button className={"шилжилтийн_метал"} name={"Ti"} onClick={this.buttonClicked}><span className={"number"}>22</span>Ti</button></td>
                        <td><td className={"Бүлэг"}>VB</td><button className={"шилжилтийн_метал"} name={"V"} onClick={this.buttonClicked}><span className={"number"}>23</span>V</button></td>
                        <td><td className={"Бүлэг"}>VIB</td><button className={"шилжилтийн_метал"} name={"Cr"} onClick={this.buttonClicked}><span className={"number"}>24</span>Cr</button></td>
                        <td><td className={"Бүлэг"}>VIIB</td><button className={"шилжилтийн_метал"} name={"Mn"} onClick={this.buttonClicked}><span className={"number"}>25</span>Mn</button></td>
                        <td><td className={"Бүлэг"}>VIIIB</td><button className={"шилжилтийн_метал"} name={"Fe"} onClick={this.buttonClicked}><span className={"number"}>26</span>Fe</button></td>
                        <td><td className={"Бүлэг"}>VIIIB</td><button className={"шилжилтийн_метал"} name={"Co"} onClick={this.buttonClicked}><span className={"number"}>27</span>Co</button></td>
                        <td><td className={"Бүлэг"}>VIIIB</td><button className={"шилжилтийн_метал"} name={"Ni"} onClick={this.buttonClicked}><span className={"number"}>28</span>Ni</button></td>
                        <td><td className={"Бүлэг"}>IB</td><button className={"шилжилтийн_метал"} name={"Cu"} onClick={this.buttonClicked}><span className={"number"}>29</span>Cu</button></td>
                        <td><td className={"Бүлэг"}>IIB</td><button className={"шилжилтийн_метал"} name={"Zn"} onClick={this.buttonClicked}><span className={"number"}>30</span>Zn</button></td>
                        <td><button className={"метал"} name={"Ga"} onClick={this.buttonClicked}><span className={"number"}>31</span>Ga</button></td>
                        <td><button className={"хагас_метал"} name={"Ge"} onClick={this.buttonClicked}><span className={"number"}>32</span>Ge</button></td>
                        <td><button className={"хагас_метал"} name={"As"} onClick={this.buttonClicked}><span className={"number"}>33</span>As</button></td>
                        <td><button className={"метал_бус_элемэнт"} name={"Se"} onClick={this.buttonClicked}><span className={"number"}>34</span>Se</button></td>
                        <td><button className={"галгоген"} name={"Br"} onClick={this.buttonClicked}><span className={"number"}>35</span>Br</button></td>
                        <td><button className={"хий"} name={"Kr"} onClick={this.buttonClicked}><span className={"number"}>36</span>Kr</button></td>
                    </tr>
                    <tr className={"5"}>
                        <td className={"үе"}>5</td>
                        <td><button className={"шүлтийн_метал"} name={"Rb"} onClick={this.buttonClicked}><span className={"number"}>37</span>Rb</button></td>
                        <td><button className={"газрын_шүлтийн_метал"} name={"Sr"} onClick={this.buttonClicked}><span className={"number"}>38</span>Sr</button></td>
                        <td><button className={"шилжилтийн_метал"} name={"Y"} onClick={this.buttonClicked}><span className={"number"}>39</span>Y</button></td>
                        <td><button className={"шилжилтийн_метал"} name={"Zr"} onClick={this.buttonClicked}><span className={"number"}>40</span>Zr</button></td>
                        <td><button className={"шилжилтийн_метал"} name={"Nb"} onClick={this.buttonClicked}><span className={"number"}>41</span>Nb</button></td>
                        <td><button className={"шилжилтийн_метал"} name={"Mo"} onClick={this.buttonClicked}><span className={"number"}>42</span>Mo</button></td>
                        <td><button className={"лантаниод"} name={"Tc"} onClick={this.buttonClicked}><span className={"number"}>43</span>Tc</button></td>
                        <td><button className={"шилжилтийн_метал"} name={"Ru"} onClick={this.buttonClicked}><span className={"number"}>44</span>Ru</button></td>
                        <td><button className={"шилжилтийн_метал"} name={"Rh"} onClick={this.buttonClicked}><span className={"number"}>45</span>Rh</button></td>
                        <td><button className={"шилжилтийн_метал"} name={"Pd"} onClick={this.buttonClicked}><span className={"number"}>46</span>Pd</button></td>
                        <td><button className={"шилжилтийн_метал"} name={"Ag"} onClick={this.buttonClicked}><span className={"number"}>47</span>Ag</button></td>
                        <td><button className={"шилжилтийн_метал"} name={"Cd"} onClick={this.buttonClicked}><span className={"number"}>48</span>Cd</button></td>
                        <td><button className={"метал"} name={"In"} onClick={this.buttonClicked}><span className={"number"}>49</span>In</button></td>
                        <td><button className={"метал"} name={"Sn"} onClick={this.buttonClicked}><span className={"number"}>50</span>Sn</button></td>
                        <td><button className={"хагас_метал"} name={"Sb"} onClick={this.buttonClicked}><span className={"number"}>51</span>Sb</button></td>
                        <td><button className={"хагас_метал"} name={"Te"} onClick={this.buttonClicked}><span className={"number"}>52</span>Te</button></td>
                        <td><button className={"галгоген"} name={"I"} onClick={this.buttonClicked}><span className={"number"}>53</span>I</button></td>
                        <td><button className={"хий"} name={"Xe"} onClick={this.buttonClicked}><span className={"number"}>54</span>Xe</button></td>
                    </tr>
                    <tr className={"6"}>
                        <td className={"үе"}>6</td>
                        <td><button className={"шүлтийн_метал"} name={"Cs"} onClick={this.buttonClicked}><span className={"number"}>55</span>Cs</button></td>
                        <td><button className={"газрын_шүлтийн_метал"} name={"Ba"} onClick={this.buttonClicked}><span className={"number"}>56</span>Ba</button></td>
                        <td><button className={"baixgvi"} name={"baixgvi"} onClick={this.buttonClicked}>57-71</button></td>
                        <td><button className={"шилжилтийн_метал"} name={"Hf"} onClick={this.buttonClicked}><span className={"number"}>72</span>Hf</button></td>
                        <td><button className={"шилжилтийн_метал"} name={"Ta"} onClick={this.buttonClicked}><span className={"number"}>73</span>Ta</button></td>
                        <td><button className={"шилжилтийн_метал"} name={"W"} onClick={this.buttonClicked}><span className={"number"}>74</span>W</button></td>
                        <td><button className={"шилжилтийн_метал"} name={"Re"} onClick={this.buttonClicked}><span className={"number"}>75</span>Re</button></td>
                        <td><button className={"шилжилтийн_метал"} name={"Os"} onClick={this.buttonClicked}><span className={"number"}>76</span>Os</button></td>
                        <td><button className={"шилжилтийн_метал"} name={"Ir"} onClick={this.buttonClicked}><span className={"number"}>77</span>Ir</button></td>
                        <td><button className={"шилжилтийн_метал"} name={"Pt"} onClick={this.buttonClicked}><span className={"number"}>78</span>Pt</button></td>
                        <td><button className={"шилжилтийн_метал"} name={"Au"} onClick={this.buttonClicked}><span className={"number"}>79</span>Au</button></td>
                        <td><button className={"шилжилтийн_метал"} name={"Hg"} onClick={this.buttonClicked}><span className={"number"}>80</span>Hg</button></td>
                        <td><button className={"метал"} name={"Tl"} onClick={this.buttonClicked}><span className={"number"}>81</span>Tl</button></td>
                        <td><button className={"метал"} name={"Pb"} onClick={this.buttonClicked}><span className={"number"}>82</span>Pb</button></td>
                        <td><button className={"метал"} name={"Bi"} onClick={this.buttonClicked}><span className={"number"}>83</span>Bi</button></td>
                        <td><button className={"хагас_метал"} name={"Po"} onClick={this.buttonClicked}><span className={"number"}>84</span>Po</button></td>
                        <td><button className={"галгоген"} name={"At"} onClick={this.buttonClicked}><span className={"number"}>85</span>At</button></td>
                        <td><button className={"хий"} name={"Rn"} onClick={this.buttonClicked}><span className={"number"}>86</span>Rn</button></td>
                    </tr>
                    <tr className={"7"}>
                        <td className={"үе"}>7</td>
                        <td><button className={"шүлтийн_метал"} name={"Fr"} onClick={this.buttonClicked}><span className={"number"}>87</span>Fr</button></td>
                        <td><button className={"газрын_шүлтийн_метал"} name={"Ra"} onClick={this.buttonClicked}><span className={"number"}>88</span>Ra</button></td>
                        <td><button className={"baixgvi"} name={"baixgvi"} onClick={this.buttonClicked}>89-103</button></td>
                        <td><button className={"лантаниод"} name={"Rf"} onClick={this.buttonClicked}><span className={"number"}>104</span>Rf</button></td>
                        <td><button className={"лантаниод"} name={"Db"} onClick={this.buttonClicked}><span className={"number"}>105</span>Db</button></td>
                        <td><button className={"лантаниод"} name={"Sg"} onClick={this.buttonClicked}><span className={"number"}>106</span>Sg</button></td>
                        <td><button className={"лантаниод"} name={"Bh"} onClick={this.buttonClicked}><span className={"number"}>107</span>Bh</button></td>
                        <td><button className={"лантаниод"} name={"Hs"} onClick={this.buttonClicked}><span className={"number"}>108</span>Hs</button></td>
                        <td><button className={"лантаниод"} name={"Mt"} onClick={this.buttonClicked}><span className={"number"}>109</span>Mt</button></td>
                        <td><button className={"лантаниод"} name={"Ds"} onClick={this.buttonClicked}><span className={"number"}>110</span>Ds</button></td>
                        <td><button className={"лантаниод"} name={"Rg"} onClick={this.buttonClicked}><span className={"number"}>111</span>Rg</button></td>
                        <td><button className={"лантаниод"} name={"Cn"} onClick={this.buttonClicked}><span className={"number"}>112</span>Cn</button></td>
                        <td><button className={""} name={"Nh"} onClick={this.buttonClicked}><span className={"number"}>113</span>Nh</button></td>
                        <td><button className={""} name={"Fi"} onClick={this.buttonClicked}><span className={"number"}>114</span>Fi</button></td>
                        <td><button className={""} name={"Mc"} onClick={this.buttonClicked}><span className={"number"}>115</span>Uup</button></td>
                        <td><button className={""} name={"Lv"} onClick={this.buttonClicked}><span className={"number"}>116</span>Lv</button></td>
                        <td><button className={""} name={"Uus"} onClick={this.buttonClicked}><span className={"number"}>117</span>Uus</button></td>
                        <td><button className={""} name={"Uuo"} onClick={this.buttonClicked}><span className={"number"}>118</span>Uuo</button></td>
                    </tr>
                    <tr className={"bottom"}><td></td>
                    </tr>
                </table>
                <div className={"torol"}>
                    <p className={"лантаниод p"}>лантаниод</p>
                    <p className={"шилжилтийн_метал p"}>шилжилтийн метал</p>
                    <p className={"метал p"}>метал</p>
                    <p className={"шүлтийн_метал p"}>шүлтийн метал</p>
                    <p className={"газрын_шүлтийн_метал p"}>газрын шүлтийн метал</p>
                    <p className={"галгоген p"}>галгоген</p>
                    <p className={"хий p"}>хий</p>
                    <p className={"метал_бус_элемэнт p"}>метал бус элемент</p>
                </div>
            </div >
        );
    }

}
export default element; 