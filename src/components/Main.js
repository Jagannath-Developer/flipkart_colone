 

 import React,{useState,useEffect} from 'react'
 
 export default function Main() {
    const[products,setProducts]=useState([]);
    
    function LoadProducts()
    {
        fetch(`http://fakestoreapi.com/products`)
        .then(response=>response.json())
        .then(data=> {
            setProducts(data)
            console.log("item added");
        }
        )
       
    }
    useEffect(()=>{
       // LoadCategories();
        LoadProducts('http://fakestoreapi.com/products');
    },[]);
    
   return (
     <div  className='container d-flex flex-wrap'>
        {
            products.map(product=>
                <div key={product.id} className="card m-2 p-2 w-25">
                    
                    <img src={product.image} alt="" className="card-img-top"  height="200px" />
                    <div className="card-header fw-bold" style={{height:"100px",textAlign:"center"}}>
                            <p>{product.title}</p>
                    </div>
                    <div className="card-body" style={{height:"150px"}}>
                            <dl>
                                <dt>Price</dt>
                                <dd>{product.price}</dd>
                                <dt>Rating</dt>
                                <dd>
                                    <span className="bi bi-star-fill text-success"></span>
                                    {product.rating.rate} <span>[{product.rating.count}]</span>
                                </dd>
                            </dl>
                    </div>
                    <div className="card-footer">
                        <button id={product.id}  className="btn btn-danger w-100">
                            <span className="bi bi-cart4"></span>Add to Cart
                        </button>
                    </div>
                        
                    

                </div>
                )
        }
        
     </div>
   )
 }
 