import React from 'react'

export default function ItemsHeader() {
  return (
    <div className='container-flex card'>
        <div className="container d-flex  justify-content-around">
            <div>
                <img src={require('../img/top_offers.png')} alt=""  style={{width:"80px",height:"80px"}} />
                <p className='fw-bold'>Top offers</p>
            </div>
            <div>
                <img src={require('../img/grocery.png')} alt=""  style={{width:"80px",height:"80px"}} />
                <p className='fw-bold'>Grocery</p>
            </div>
            <div>
                <img src={require('../img/mobile.png')} alt=""  style={{width:"80px",height:"80px"}} />
                <p className='fw-bold'>Mobiles</p>
            </div>
            <div>
                <img src={require('../img/fashion.png')} alt=""  style={{width:"80px",height:"80px"}} />
                <p className='fw-bold'>Fashion</p>
            </div>
            <div>
                <img src={require('../img/electronics.png')} alt=""  style={{width:"80px",height:"80px"}} />
                <p className='fw-bold'>Electronics</p>
            </div>
            <div>
                <img src={require('../img/home.png')} alt=""  style={{width:"80px",height:"80px"}} />
                <p className='fw-bold'>Home</p>
            </div>
            <div>
                <img src={require('../img/application.png')} alt=""  style={{width:"80px",height:"80px"}} />
                <p className='fw-bold'>Applications</p>
            </div>
            <div>
                <img src={require('../img/travel.png')} alt=""  style={{width:"80px",height:"80px"}} />
                <p className='fw-bold'>Travels</p>
            </div>
            <div>
                <img src={require('../img/beauty_toys.png')} alt=""  style={{width:"80px",height:"80px"}} />
                <p className='fw-bold'>Beauty,Toys & More</p>
            </div>

        </div>
    </div>
  )
}
