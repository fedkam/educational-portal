import { DetailedHTMLProps, ParamHTMLAttributes } from "react";

export interface PProps extends DetailedHTMLProps<ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size: 's' | 'm' | 'l'
}