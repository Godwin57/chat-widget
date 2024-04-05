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
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    className?: string;
    disabled?: boolean;
    withLeftElement?: boolean;
    leftElement?: JSX.Element;
    withRightElement?: boolean;
    rightElement?: JSX.Element;
    label?: string;
    withLabel?: boolean;
}
