import React, { useState } from 'react'
import Classes from '../../scss/AccordianItem.module.scss'
import { ReactComponent as CarrotUp } from '../../../assets/svg/carrotUp.svg'
import { ReactComponent as CarrotDown } from '../../../assets/svg/carrotDown.svg'

const AccordianItem = (props) => {
  const { title ,description } = props
  const [showAccordianBody, setShowAccordianBody] = useState(false)
  return (
    <div className={`${Classes.AccordianItemWrapper} p-4 mb-3`}>
      <div
        className='d-flex justify-content-between align-items-center'
        onClick={() => setShowAccordianBody(!showAccordianBody)}
        style={{ cursor: 'pointer' }}
      >
        <h1 className={`text-white mb-0 ${Classes.title}`}>{title}</h1>
        <span className='text-center'>
          {showAccordianBody ? <CarrotUp /> : <CarrotDown />}
        </span>
      </div>
      {showAccordianBody && (
        <div className='pt-3'>
          <p className={`${Classes.description} mb-0`}>{description}</p>
        </div>
      )}
    </div>
  )
}

export default AccordianItem
