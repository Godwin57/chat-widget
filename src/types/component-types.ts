import React, {
    ButtonHTMLAttributes,
    ChangeEvent,
    DetailedHTMLProps,
    MouseEventHandler,
} from "react";

export interface HeaderType {
    title?: string;
    description?: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    activeStatus?: boolean;
}

export interface TextAreaProps {
    error?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    valueChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
    disabled?: boolean;
    withLeftElement?: boolean;
    leftElement?: JSX.Element;
    withRightElement?: boolean;
    rightElement?: JSX.Element;
    label?: string;
    withLabel?: boolean;
    fixedAtBottom?: boolean;
}

export interface MessageCardProps {
    message?: string;
    className?: string;
    sender?: boolean;
    senderName?: string;
}

export interface CardViewProps {
    children?: JSX.Element;
    className?: string;
    closeModal?: () => void;
    open?: boolean;
    withCloseIcon?: boolean;
    closeIcon?: JSX.Element;
    title?: string;
    closeOnWindowClick?: boolean;
    modalWidth?: string;
    positionClass?: string;
}

export interface InputProps {
    error?: string;
    name?: string;
    value?: string;
    type?: string;
    placeholder?: string;
    valueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    disabled?: boolean;
    label?: string;
    withLabel?: boolean;
    width?: string;
    labelStyles?: string;
}

export interface ButtonProps {
    name?: string;
    type?: "button" | "submit";
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    width?: string;
}
