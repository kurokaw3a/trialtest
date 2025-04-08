export interface ButtonModel {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant: "default" | "navigation";
}