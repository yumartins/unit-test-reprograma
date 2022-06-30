import type { InputProps } from './types'

export const Input: React.FC<InputProps> = ({
  label,
  ...rest
}) => (
  <div className="flex">
    <label htmlFor={rest.id} className="sr-only">{label}</label>
    <input {...rest} className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
  </div>
)