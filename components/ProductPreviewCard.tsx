import Image from 'next/image'
import React from 'react'

const ProductPreviewCard = () => {
  return (
    <>
    <div className='bg-[#FD5E53] w-full h-full overflow-hidden'>
     <div>
       <Image
        src="https://i.pinimg.com/736x/40/9b/4d/409b4ddeb66441335d24458543443d9a.jpg"
        alt='product'
        width={900}
        height={900}
      />
     </div>
    </div>
    </>
  )
}

export default ProductPreviewCard