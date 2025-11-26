import { ReactNode } from 'react';

interface BorderBeamCardProps {
  children: ReactNode;
  className?: string;
}

const BorderBeamCard = ({ children, className = '' }: BorderBeamCardProps) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated border beam */}
      <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
        <div 
          className="absolute inset-0 rounded-2xl opacity-75"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.4), transparent)',
            animation: 'borderBeam 3s linear infinite',
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>
      
      {/* Keyframe animation styles */}
      <style jsx>{`
        @keyframes borderBeam {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(0deg);
          }
          25% {
            transform: translateX(100%) translateY(-100%) rotate(0deg);
          }
          50% {
            transform: translateX(100%) translateY(100%) rotate(0deg);
          }
          75% {
            transform: translateX(-100%) translateY(100%) rotate(0deg);
          }
          100% {
            transform: translateX(-100%) translateY(-100%) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default BorderBeamCard;

