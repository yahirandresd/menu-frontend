import React from 'react';

type FoodCardProps = {
  image: string;
  title: string;
  description: string;
  price: string;
};

const FoodCard: React.FC<FoodCardProps> = ({ image, title, description, price }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img className="rounded-t-lg w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2 text-mompri2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <p className="text-lg font-bold text-pink-600">${price}</p>
      </div>
    </div>
  );
};

export default FoodCard;
