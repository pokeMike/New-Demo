// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';

const SellerList = () => {
    const [items, setItems] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/c/70ef-5d44-4675-ae64');
                const data = await response.json();

                const formattedData = data.rows.map(item => ({
                    id: item["items.id"],
                    name: item["items.name"],
                    description: item["items.descriptor"]?.long_desc || 'No description available',
                    image: item["items.descriptor"]?.images ? item["items.descriptor"].images[0] : 'https://via.placeholder.com/150',
                    price: item["items.price"]
                }));

                setItems(formattedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!items) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {items.map(item => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default SellerList;
