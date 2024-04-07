import React from 'react'
import logo from '../logo.svg'
import{FacebookOutlined,TwitterOutlined,YoutubeOutlined,PinterestOutlined,InstagramOutlined,TikTokOutlined,LinkedinOutlined} from '@ant-design/icons'


const Footers = () => {
    const product = [
        "Templates",
        "Explore",
        "Features",
        "Website Builder",
        "Web Accessibility",
        "Velo",
        "Wix Playground",
        "My Sites Premium Plans",
        "Wix SEO",
        "Logo Maker",
        "Create a Blog",
        "Online Store",
        "Wix Bookings",
        "Restaurants",
        "App Market",
        "Domains",
        "Business Email",
        "Web Hosting",
        "Developers",
        "Enterprise",
        "Email Marketing",
        "Website Design",
        "Professional Tools"
      ];
      
      const company = [
        "PRODUCT",
        "Templates",
        "Explore",
        "Features",
        "Website Builder",
        "Web Accessibility",
        "Velo",
        "Wix Playground",
        "My Sites Premium Plans",
        "Wix SEO",
        "Logo Maker",
        "Create a Blog",
        "Online Store",
        "Wix Bookings",
        "Restaurants",
        "App Market",
        "Domains",
        "Business Email",
        "Web Hosting",
        "Developers",
        "Enterprise",
        "Email Marketing",
        "Website Design",
        "Professional Tools"
      ];

      const community = [
        "Wix Blog",
        "Wix Marketplace",
        "Student Website",
        "Wix Encyclopedia",
        "Partner Community"
      ];

      const support = [
        "Wix Blog",
        "Wix Marketplace",
        "Student Website",
        "Wix Encyclopedia",
        "Partner Community"
      ];
      
  return (
    <div className='flex xl:w-[75vw]  md:flex-row flex-col justify-start lg:justify-around  lg:py-[10vh] min-h-[120vh]  gap-y-1 px-2 py-2 container mx-auto' >
      <div className='mt-3 text-gray-600 w-fit'>
        PRODUCT
        <div className='grid grid-cols-2 md:grid-cols-1  tab:grid-cols-3 justify-around gap-y-2 gap-x-2 mt-3   text-sm flex-wrap text-start text-gray-500'>
        {product.map((item,index)=>(
            <div key={index} className=' min-w-[94px] hover:text-blue-600 px-2 overflow-hidden'>{item}</div>
        ))}     
        </div> 
        </div> 
      <div className='mt-3 text-gray-600 w-fit'>
        COMPANY
        <div className='grid grid-cols-2 md:grid-cols-1 gap-y-2 gap-x-2 mt-3 tab:grid-cols-3   text-sm flex-wrap text-start text-gray-500'>
        {company.map((item,index)=>(
            <div key={index} className=' min-w-[94px] hover:text-blue-600 px-2 overflow-hidden'>{item}</div>
        ))}     
        </div> 
        </div> 
      <div className='mt-3 text-gray-600 w-fit'>
        COMMUNITY
        <div className='grid grid-cols-2 md:grid-cols-1 justify-around tab:grid-cols-3 gap-y-2 gap-x-2 mt-3   text-sm flex-wrap text-start text-gray-500'>
        {community.map((item,index)=>(
            <div key={index} className=' min-w-[94px] hover:text-blue-600 px-2 overflow-hidden'>{item}</div>
        ))}     
        </div> 
        </div> 
      <div className='mt-3 text-gray-600 w-fit'>
        SUPPORT
        <div className='grid grid-cols-2 md:grid-cols-1 justify-around tab:grid-cols-3 gap-y-2 gap-x-2 mt-3   text-sm flex-wrap text-start text-gray-500'>
        {support.map((item,index)=>(
            <div key={index} className=' min-w-[94px] hover:text-blue-600 px-2 overflow-hidden'>{item}</div>
        ))}     
        </div> 
        </div> 
        <div className='my-5 text-gray-500 text-sm md:mt-3 md:w-[20rem]'>
          <img src={logo} alt="" className='w-16 my-2 mb-4 ' />
          <div>
          The Wix website builder offers a complete solution from enterprise- grade infrastructure and business features to advanced SEO and marketing tools-enabling anyone to create and grow online.
          </div>
          <div className='mt-3'>
          &#169; 2006-2022 Wix.com, Inc
          </div>
          <div className='flex flex-row md:gap-x-2 text-xl mt-4 gap-x-4'>
          <FacebookOutlined />
          <TwitterOutlined />
          <YoutubeOutlined />
          <PinterestOutlined />
          <InstagramOutlined />
          <LinkedinOutlined />
          <TikTokOutlined />
          </div>
        </div>
    </div>
  )
}

export default Footers;
