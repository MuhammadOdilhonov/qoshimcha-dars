import React, { useEffect, useState } from 'react'
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
export default function Like() {
    const [data, setData] = useState([])
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("like"))
        setData(data)
    }, []);

    

    function RemoveToLiked(item) {
        // Get the existing liked items from localStorage
        let likedItems = JSON.parse(localStorage.getItem("like")) || [];

        // Filter out the item that needs to be removed
        likedItems = likedItems.filter(likedItem => likedItem.name !== item.name);

        // Save the updated liked items array back to localStorage
        localStorage.setItem("like", JSON.stringify(likedItems));
        setData(likedItems);
    }
    return (
        <div>
            {
                data.length > 0 ?
                data.map((item, index) => {
                    return (
                        <div className='card w-25 p-3 m-3' key={item.name}>
                                    <FcLike onClick={() => { RemoveToLiked(item) }} style={{ fontSize: "25px", margin: "5px", position: "absolute" }} />
                            <img src={item.img} alt={item.name} />
                            <h2>{item.name}</h2>
                            <button className='btn btn-primary'>Karzinkaga qo`shish</button>
                        </div>
                    )
                    })
                    :
                    <p>No likes</p>
            }
        </div>
    )
}
