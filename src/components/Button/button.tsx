import './style.css'

interface ButtonProps {
    onClick?: () => any;
    label: string
    type: 'login' | 'addUser' | 'save' | 'back';
    width?: string
    height?: string
    disabled?: boolean;
}
export const Button = ({ onClick, label, type, width, height, disabled = false }: ButtonProps) => {
    return (
        <button
            className={type}
            onClick={onClick}
            style={{ width: `${width}`, height: `${height}` }}
        >
            {label}
        </button>
    );
}