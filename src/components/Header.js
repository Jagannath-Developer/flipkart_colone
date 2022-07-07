
import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className='container-fluid bg-primary p-2 '>
                <div className='container d-flex '>
                    <h5 className='text-light'>Flipkart</h5>
                    <form className="d-flex mx-4" role="search">
                        <input className="form-control me-2 " style={{width:"500px"}} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                    <div className="container d-flex  justify-content-end text-light fw-bold align-content-center">
                        <div className='mx-4 '>Jagannath</div>
                        <div className='mx-4'>Become a Seller</div>
                        <div className='mx-4'>More</div>
                        <div className='mx-4'><span className='bi bi-cart'></span>Cart</div>
                    </div>


                </div>



            </div>
        )
    }
}

export default Header