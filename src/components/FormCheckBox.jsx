import React from 'react'

const FormCheckBox = ({ label, name, defaultValue, size }) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={label} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        className={`checkbox checkbox-primary ${size}`}
        defaultChecked={defaultValue}
      />
    </div>
  )
}

export default FormCheckBox
