import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Practice = () => {
   const [category,setCategory] = useState([]);
   const [products,setProducts] = useState([]);
   const [filteredProduct,setFilteredProduct] = useState([]);

   const FetchCategoty=async()=>{
           try {
                 const response = await axios.get('https://dummyjson.com/products/categories');
                 const data = await response.data;
                 setCategory(data);
           } catch (error) {
               console.log(error);
           }
   }
   const ShowProduct=async(e)=>{
           if(e.target.value)
           {
            try {
                const response = await axios.get(`https://dummyjson.com/products/category/${e.target.value}`);
                const data = await response.data.products;
                setProducts(data);
                setFilteredProduct(data);
          } catch (error) {
              console.log(error);
          }
           }
   }
   const filterproduct =(sort)=>{
           if(sort === 'price')
           {
               const data = [...filteredProduct];
                const filterddata = data.sort((a,b)=>b.price-a.price)
                setFilteredProduct(filterddata);
                return
           }else{
            const data = [...filteredProduct];
            const filterddata = data.sort((a,b)=>b.rating-a.rating)
            setFilteredProduct(filterddata);
            return
           }
   }
   useEffect(()=>{
        FetchCategoty();
   },[])
  return (
    <>
        <select name="" id="" onChange={ShowProduct}>
             <option value="" hidden>select category</option>
             {
                 category && category.map((cat)=>{
                        return <option value={cat}>{cat}</option>
                 })
             }
        </select>

        <table>
              <thead>
                    <tr>
                        <th>SR.NO</th>
                        <th>Brand</th>
                        <th>Title</th>
                        <th>description</th>
                        <th onClick={()=>filterproduct('price')}>price</th>
                        <th onClick={()=>filterproduct('rating')}>rating</th>
                    </tr>
              </thead>
              <tbody>
                   {
                       products.length>0&&<>
                       {
                           filteredProduct.map((pro,index)=>{
                                return <tr>
                                       <td>{index+1}</td>
                                       <td>{pro.brand}</td>
                                       <td>{pro.title}</td>
                                       <td>{pro.description}</td>
                                       <td>{pro.price}</td>
                                       <td>{pro.rating}</td>
                                </tr>
                           })
                       }
                       </>
                   }
              </tbody>
        </table>

        <div className='practice'>
              <div className="one">

              </div>
              <div className="two">
                
              </div>
        </div>
    </>
  )
}

export default Practice