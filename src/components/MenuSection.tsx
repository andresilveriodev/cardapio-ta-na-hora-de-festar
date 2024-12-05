import React from 'react';

interface MenuSectionProps {
  title: string;
  children: React.ReactNode;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ title, children }) => {
  return (
    <section className="mb-12">
      <h2 className="menu-section-title text-[#dcb02d] text-3xl mb-6 border-b-2 border-[#dcb02d] pb-2">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
};