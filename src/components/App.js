import React from 'react'
import store from '../store'
import { getData } from '../api/etsy'


getData()

export default React.createClass({

  getInitialState() {

    return {

     etsyData: []

    }
  },



  componentWillMount() {

    store.subscribe(() => {

      const appState = store.getState()

      this.setState({

        etsyData: appState.etsyData[0]

      })
    })
  },

  componentWillUnmount(){

    store.unsubscribe()

  },


  

  render() {

    return (

      <div id="app">

    {
      this.state.etsyData.map((value, i) => {

        return (

          <div key={'id' + i} className="desc">
              
            <img src={value.Images[0].url_170x135} />
            
            <p>{value.title}</p> <p>{value.Shop.shop_name + ' $' + value.price }</p>
          
          </div>



        )

      })
      
     } 
     </div>
    

    )

  }

}) 