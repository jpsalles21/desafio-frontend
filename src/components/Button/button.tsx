import './style.css'

interface ButtonProps {
    onClick?: (value: any) => any;
    label: string
    variant: 'login' | 'addUser' | 'save' | 'back';
    width?: string
    height?: string
    disabled?: boolean;
    type?: "button" | "submit" | "reset" | undefined
}
export const Button = ({ onClick, label, variant, width, height, disabled = false, type }: ButtonProps) => {
    return (
        <button
            className={variant}
            onClick={onClick}
            type={type}
            style={{ width: `${width}`, height: `${height}` }}
        >
            {label}
        </button>
    );
}