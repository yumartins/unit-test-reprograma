import type { CheckboxProps } from './types'

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  ...rest
}) => (
  <div className="flex items-center">
    <input {...rest} type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
    <label htmlFor={rest.id} className="ml-2 block text-sm text-gray-900">{label}</label>
  </div>
)
