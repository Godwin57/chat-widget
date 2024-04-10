import React, { ChangeEvent, FocusEvent } from "react";

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
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
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
