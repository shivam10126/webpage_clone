import React from "react";
import {SearchOutlined,DownOutlined} from '@ant-design/icons'
import {Input} from 'antd'
import images from '../assets/index'
import Pagination from '@mui/material/Pagination';

const Home = () => {
  const templates = [
    {title:'coming soon landing page',image:images.comingSoon},
    {title:'chef restaurant',image:images.chef},
    {title:'wedding invitation',image:images.wedding},
    {title:'canned drink store',image:images.canned_drink},
    {title:'coming soon landing page',image:images.comingSoon2},
    {title:'buisness consultancy comapny',image:images.buisness},
    {title:'enviromental webinar',image:images.enviroment},
    {title:'coaching proffesional',image:images.coaching},
    {title:'wellness shop',image:images.wellness},
    {title:'women empowerment NGO',image:images.women},
    {title:'creative CV',image:images.cv},
    {title:'AI company',image:images.ai},
  ]
  return (
    <div className=" bg-gray-100 py-5 mx-auto w-full z-[-1] relative ">
      <div className="flex z-auto flex-col md:flex-row justify-around items-center align-middle h-[10rem] ">
        <span className="text-black bigtab:text-4xl lg:w-[50%] xl:text-5xl text-3xl md:w-[60%] text-center mb-3 font-bold px-1">WIX Pick the Website Template You Love</span>
        <div className="flex z-auto flex-row md:-translate-y-4 justify-center items-center align-middle search-input my-5">
        <Input placeholder="Search all the templates.."  /><SearchOutlined className="-translate-x-4 z-auto" />
        </div>
      </div>
      <div className="flex z-auto bigtab:flex-row xl:px-12 justify-around lg:justify-between lg:px-4 lg:text-lg flex-col gap-y-4 bg-white w-full py-4 drop-shadow-lg shadow-gray-500 text-gray-600 px-1 border-gray-400/45 border-t border-b">
        <div className={`flex flex-row flex-wrap gap-x-4 justify-center gap-y-3 `}>
          <div className="flex flex-row items-center tab:justify-between justify-center align-middle  text-sm lg:text-lg  cursor-pointer hover:text-blue-400 ">
            <span className="capitalize mr-1">buisness & services</span>
            <DownOutlined className="text-[10px] translate-y-[2px]" />
          </div>
          <div className="flex flex-row items-center justify-center align-middle text-sm lg:text-lg  cursor-pointer hover:text-blue-400">
            <span className="capitalize mr-1">store</span>
            <DownOutlined className="text-[10px] translate-y-[2px]" />
          </div>
          <div className="flex flex-row items-center justify-center align-middle text-sm lg:text-lg cursor-pointer hover:text-blue-400">
            <span className="capitalize mr-1">creative</span>
            <DownOutlined className="text-[10px] translate-y-[2px]" />
          </div>
          <div className="flex flex-row items-center justify-center align-middle text-sm lg:text-lg  cursor-pointer hover:text-blue-400">
            <span className="capitalize mr-1">community</span>
            <DownOutlined className="text-[10px] translate-y-[2px]" />
          </div>
          <div className="flex flex-row items-center justify-center align-middle text-sm lg:text-lg  cursor-pointer hover:text-blue-400">
            <span className="capitalize mr-1">blog</span>
            <DownOutlined className="text-[10px] translate-y-[2px]" />
          </div>
        </div>
        <div className={`flex flex-row flex-wrap tab:justify-center  justify-around gap-y-3`}>
        <div className="flex flex-row items-center justify-center align-middle text-sm lg:text-lg
            cursor-pointer hover:text-blue-400 border-gray-400 border-r px-3">
            <span className="capitalize ">all templaes</span>
          </div>
        <div className="flex flex-row items-center justify-center align-middle text-sm lg:text-lg
            cursor-pointer hover:text-blue-400 border-gray-400 border-r px-3">
            <span className="capitalize ">blank templates</span>
          </div>
        <div className="flex flex-row items-center justify-center align-middle text-sm lg:text-lg
            cursor-pointer hover:text-blue-400 px-3">
            <span className="capitalize mr-1">collections</span>
            <DownOutlined className="text-[10px] translate-y-[2px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-row z-auto justify-between px-[3vw] mt-[10vh] mx-auto ">
        <div className="capitalize font-bold text-black/85 text-sm lg:text-lg">All website templates</div>
        <div className="capitalize text-black/85 text-sm lg:text-lg">sort by: <span className="font-bold"> recommended <DownOutlined /></span></div>
      </div>
      <div className="flex md:flex-row flex-wrap flex-col xl:justify-around justify-center md:gap-x-4 px-4 gap-y-7 mt-7">
        {
          templates.map((template,index)=>(
            <div key={index} className="flex flex-col  md:w-[20rem] xl:container xl:mx-auto  lg:w-[25rem] ">
              <div className="shadow-lg shadow-gray-300">
              <div className=" flex flex-row justify-start py-2 pl-2 bg-gray-200">
                <div className="w-1 h-1 rounded-full bg-white mr-1"></div>
                <div className="w-1 h-1 rounded-full bg-white mr-1"></div>
                <div className="w-1 h-1 rounded-full bg-white mr-1"></div>
              </div>
              <div className="md:h-[10rem] lg:h-[15rem] object-cover">
             <img src={template.image} alt="" className=" h-full object-cover object-center mx-auto" />
              </div>
              </div>
             <div className=" text-base py-3 px-2 ">{template.title}</div>
            </div>
          ))
        }
      </div>
        <div className="w-fit mx-auto mt-10 xl:my-16 pagination -translate-x-1">
        <Pagination count={73} showFirstButton showLastButton />
        </div>
    </div>
  );
};

export default Home;
