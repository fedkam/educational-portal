import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ChipProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 's' | 'm'
    color?: 'secondary' | 'red' | 'grey' | 'green' | 'primary'
    href?: string
}