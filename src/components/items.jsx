import {useState} from 'react'
import '../Styles/items.css'


const Itemes = () => {

    let food=[
        {
            img:"images/items1.jpg",
            name:"tikka",
            RS:200,
            id:2,
        },
        {
            img:"images/item2.jpg",
            name:"biryani",
            RS:150,
            id:2,
        },
        {
            img:"images/item3.jpg",
            name:"meals",
            RS:80,
            id:3,
        },
        {
            img:"images/item4.jpg",
            name:"Shawarma",
            RS:100,
            id:4,
        },{
            img:"images/item5.jpg",
            name:"kabab",
            RS:200,
            id:5,
        },
        {
            img:"images/item6.jpg",
            name:"tandoori Roti",
            RS:100,
            id:6,
        },
        {
            img:"images/item7.jpg",
            name:"chicken pizza",
            RS:500,
            id:7,
        },
        {
            img:"images/item7.jpg",
            name:"weeknight BBQ chicken pizza",
            RS:400,
            id:8,
        }
    ]
    let[starsData,setData]=useState(food)
    let handleRemove=(id,name)=>{
        setData(starsData.filter(x=>x.id!=id))
        alert(`${name} is deleted`)
    }
    return ( 
        <div className="items">
            <h1>Top Food</h1>
            {starsData.map(data=>(
                <div className="items_list">
                    <div className="image">
                        <img src={data.img} alt="" />
                    </div>
                    <div className="info">
                        <h3>{data.name}</h3>
                        <button className='b2' onClick={()=>handleRemove(data.id,data.name)}>Remove</button>
                    </div>
                </div>
            ))

            }

        </div>

     );
}
 
export default Itemes;