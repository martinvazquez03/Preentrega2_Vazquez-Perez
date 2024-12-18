import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { getProducts } from "../firebase/firebase";



export default function ProductListComponent({greeting}) {


    const [myProds, setMyProds]=useState([])

    useEffect(()=>{
        getProducts().then((products)=>setMyProds(products))
    },[])


    return (
        <>
            <div style={{height:'90vh'}}>
                <h1 style={{marginBottom:65}}>{greeting}</h1>
                <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
                {myProds.map((producto)=> (
                    <CardComponent key={producto.id} product={producto}/>
                ))}
                </div>
            </div>
        </>
    )
}

