import React, { useEffect, useState } from 'react';
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import axios from 'axios';

export default function CardsPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://6646181a51e227f23aadc112.mockapi.io/book/iphon-shop")
            .then(res => {
                console.log(res);

                // Get the liked items from localStorage
                const likedItems = JSON.parse(localStorage.getItem("like")) || [];

                // Update data to include isLiked boolean for each item in array
                const updatedData = res.data.map(category => {
                    const updatedArray = category.array.map(item => {
                        const isLiked = likedItems.some(likedItem => likedItem.name === item.name);
                        return { ...item, isLiked: isLiked };
                    });
                    return { ...category, array: updatedArray };
                });

                setData(updatedData);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    function AddToLiked(item) {
        // Get the existing liked items from localStorage
        let likedItems = JSON.parse(localStorage.getItem("like")) || [];

        // Check if the item is already liked to avoid duplicates
        if (!likedItems.some(likedItem => likedItem.name === item.name)) {
            likedItems.push(item);

            // Save the updated liked items array back to localStorage
            localStorage.setItem("like", JSON.stringify(likedItems));

            // Update local state to reflect the change
            updateLikedState(item.name, true);
        }
    }

    function RemoveToLiked(item) {
        // Get the existing liked items from localStorage
        let likedItems = JSON.parse(localStorage.getItem("like")) || [];

        // Filter out the item that needs to be removed
        likedItems = likedItems.filter(likedItem => likedItem.name !== item.name);

        // Save the updated liked items array back to localStorage
        localStorage.setItem("like", JSON.stringify(likedItems));

        // Update local state to reflect the change
        updateLikedState(item.name, false);
    }

    function updateLikedState(itemName, isLiked) {
        // Update local state to reflect the change in like status
        const updatedData = data.map(category => {
            const updatedArray = category.array.map(arrayItem => {
                if (arrayItem.name === itemName) {
                    return { ...arrayItem, isLiked: isLiked };
                }
                return arrayItem;
            });
            return { ...category, array: updatedArray };
        });
        setData(updatedData);
    }

    return (
        <div>
            <div>
                {
                    data.length > 0 ?
                        data.map(category => (
                            <div key={category.id}>
                                <b>{category.name}</b>
                                <div className='row justify-content-around'>
                                    {
                                        category.array.map(item => (
                                            <div className='card w-25 p-3 m-3' key={item.name}>
                                                {
                                                    item.isLiked ?
                                                        <FcLike onClick={() => { RemoveToLiked(item) }} style={{ fontSize: "25px", margin: "5px", position: "absolute" }} />
                                                        :
                                                        <FaRegHeart onClick={() => { AddToLiked(item) }} style={{ fontSize: "25px", margin: "5px", position: "absolute" }} />
                                                }
                                                <img src={item.img} alt={item.name} />
                                                <h2>{item.name}</h2>
                                                <button className='btn btn-primary'>Karzinkaga qo`shish</button>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                        :
                        <>Loading...</>
                }
            </div>
        </div>
    );
}
