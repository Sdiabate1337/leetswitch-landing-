import React from 'react';

const PremiumCard = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div 
      className={`
        relative overflow-hidden rounded-2xl
        bg-gradient-to-br from-white/[0.05] to-white/[0.02]
        border border-white/[0.08]
        backdrop-blur-xl
        shadow-[0_4px_24px_rgba(0,0,0,0.12)]
        transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
        ${hoverEffect ? 'hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(59,130,246,0.2)] hover:border-primary/40' : ''}
        ${className}
      `}
    >
      {/* Inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PremiumCard;
