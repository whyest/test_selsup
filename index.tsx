import React, { useState } from 'react'

interface Param {
  id: number
  name: string
  type: 'string'
}

interface ParamValue {
  paramId: number
  value: string
}

interface Model {
  paramValues: ParamValue[]
  colors: Color[]
}

const ParamEditor: React.FC<{ params: Param[]; model: Model }> = ({
  params,
  model,
}) => {
  const [paramValues, setParamValues] = useState<ParamValue[]>(
    model.paramValues
  )

  const handleParamChange = (paramId: number, value: string) => {
    setParamValues((prevParamValues) =>
      prevParamValues.map((paramValue) =>
        paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
      )
    )
  }

  return (
    <div>
      {params.map((param) => (
        <div key={param.id}>
          <label htmlFor={`param-${param.id}`}>{param.name}</label>
          <input
            id={`param-${param.id}`}
            type='text'
            value={
              paramValues.find((paramValue) => paramValue.paramId === param.id)
                ?.value || ''
            }
            onChange={(e) => handleParamChange(param.id, e.target.value)}
          />
        </div>
      ))}
      <button onClick={() => console.log(paramValues)}>Get Model</button>
    </div>
  )
}

export default ParamEditor
