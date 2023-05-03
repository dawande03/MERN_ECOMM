import React from 'react'

const RatingPage = ({value,text}) => {
  return (
    <div className='rating'>
      <span>
        <i className={value>=1 ? 'fa-sharp fa-solid fa-star': value>=0.5 ? 'fa fa-star-half-alt':'fa fa-start'}></i>
      </span>
      <span>
        <i className={value>=2 ? 'fa-sharp fa-solid fa-star': value>=1.5 ? 'fa fa-star-half-alt':'fa fa-start'}></i>
      </span>
      <span>
        <i className={value>=3 ? 'fa-sharp fa-solid fa-star': value>=2.5 ? 'fa fa-star-half-alt':'fa fa-start'}></i>
      </span>
      <span>
        <i className={value>=4 ? 'fa-sharp fa-solid fa-star': value>=3.5 ? 'fa fa-star-half-alt':'fa fa-start'}></i>
      </span>
      <span>
        <i className={value>=5 ? 'fa-sharp fa-solid fa-star': value>=4.5 ? 'fa fa-star-half-alt':'fa fa-start'}></i>
      </span>
      <span>
        {text && text}
      </span>
    </div>
  )
}

export default RatingPage