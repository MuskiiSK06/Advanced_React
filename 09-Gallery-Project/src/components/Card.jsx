import React from 'react'

function Card(props) {
  return (
    <div>
        <a href={props.elem.url} target='_blank'>
                <div className='h-60 w-60'>
                    <img className='h-full w-full overflow-hidden object-cover rounded-xl' src={props.elem.download_url} alt='images' />
                </div>
                <h4 className='text-[1rem] font-bold'>{props.elem.author}</h4>
           </a>
    </div>
  )
}

export default Card