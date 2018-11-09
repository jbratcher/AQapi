import React, { Component } from 'react';
import Clothing from '../data/Clothing';

class ClothesData extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    const { currentTempIndex } = this.props;


    return(

            <section id="clothesData">
            
              <p>What to wear</p>
              
              <nav className="column">
            
                <ul id="clothing">
                  {Clothing[currentTempIndex].head.text ? 
                    <React.fragement>            
                      <li id="head">
                        <img alt="head" src={Clothing[currentTempIndex].head.imgsrc} />
                        <p>{Clothing[currentTempIndex].head.text}</p>
                      </li>
                    </React.fragement>
                  : null }
                  <li id="torso">
                    <img alt="torso" src={Clothing[currentTempIndex].torso.imgsrc} />
                    <p>{Clothing[currentTempIndex].torso.text}</p>
                  </li>
                  <li id="legs">
                    <img alt="legs" src={Clothing[currentTempIndex].legs.imgsrc} />
                    <p>{Clothing[currentTempIndex].legs.text}</p>
                  </li>
                  <li id="feet">
                    <img alt="feet" src={Clothing[currentTempIndex].feet.imgsrc} />
                    <p>{Clothing[currentTempIndex].feet.text}</p>
                  </li>
                </ul>
              
              </nav>
              
            </section>
    );

  }

}

  export default ClothesData;