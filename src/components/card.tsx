import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div
            className={`border-2 border-gray-200 rounded-xl p-5 ${className || ''}`}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
        >
            {children}
        </div>
    );
};

export default Card;