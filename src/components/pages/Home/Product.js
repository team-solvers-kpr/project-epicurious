import React from 'react';
import Information from '../../SectionTitle';

export default function Product({
    heading = '',
    title = '',
    author = '',
    img = '',
}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <Information heading={heading} title={title} author= {author}/>
  </div>
</div>
  )
}
