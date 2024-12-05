import React from 'react';

interface MenuItemProps {
  title: string;
  description?: string;
  price?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, description, price }) => {
  return (
    <div className="border-b border-[#dcb02d]/30 py-2">
      <h3 className="text-[#dcb02d] font-bold text-xl mb-2">{title}</h3>
      {description && <p className="text-white mb-9">{description}</p>}
      {price && <p className="text-white italic">{price}</p>}
    </div>
  );
};