import React from 'react'
import ListingB2 from '@/components/ListingB2'
import ProductListComponent from '@/components/ProductListComponent'
import Image from 'next/image'


const ProductListing2 = () => {
  return (
    <div>
        <div>
            <Image
            src={"/images/Frame 143.svg"}
            alt='frame'
            width={1440}
            height={209}
            className='w-full'/>

        </div>
        <ListingB2/>
        <ProductListComponent/>
        <ListingB2/>

      
    </div>
  )
}

export default ProductListing2
