import React from 'react'
import { useId } from 'react'
function Input({
  label,
  type="text",
  className="",
  placeholder,
  ...props
}, ref) {
 const id = useId()
  return (
    <div>
      {label && <label
      htmlFor={id}
      >
        {label}
        </label>}
        <input type={type}
        placeholder={placeholder}
        className={`outline-none rounded-lg p-2 text-lg w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
        />
      
    </div>
  )
}

export default React.forwardRef(Input)
