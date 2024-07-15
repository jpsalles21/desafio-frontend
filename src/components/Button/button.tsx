import './style.css';

interface ButtonProps {
    onClick?: (value: any) => any;
    label: string;
    variant: 'login' | 'addUser' | 'save' | 'back';
    width?: string;
    height?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({ onClick, label, variant, width, height, disabled = false, type }: ButtonProps) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <button
            className={variant}
            onClick={handleClick}
            type={type}
            style={{ width: `${width}`, height: `${height}` }}
            disabled={disabled}
        >
            {label}
        </button>
    );
};
