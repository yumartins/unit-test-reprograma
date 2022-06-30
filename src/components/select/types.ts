import { InputHTMLAttributes } from 'react'

export interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  options: string[];
}