import React from 'react'

const cards = ({title, img, precio}) => {

  return (
    <>
    
				<div className='item'>
					<figure>
						<img src={img} />
					</figure>
					<div className='info-product'>
						<h2>{title}</h2>
						<p className='price'>{precio}</p>
					

					</div>
				</div>
		
    
    </>
  )
}

export default cards