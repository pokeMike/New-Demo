// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const ItemCard = ({ item }) => {
    return (
        <div className="bg-white mr-4 ml-4 mt-4 shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={item.image} alt={item.name} />
            <div className="p-4">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-800 font-semibold mt-2">Price: ₹{item.price}</p>
                <button className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

// Define PropTypes for the component
ItemCard.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default ItemCard;

