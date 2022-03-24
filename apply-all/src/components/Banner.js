import React from 'react'
import { StyledBanner } from "../components/styles/Banner.styled";
const Banner = () => {
    return (
        <StyledBanner>
            <section id="banner" className="relative px-10 py-40 ">
                <div className="z-20 relative  container mx-auto">
                    <h1 className="mb-4">WELCOME</h1>
                    <p className="leading-normal">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"</p>
                    <a href="https://www.youtube.com/watch?v=XWj18K4Uhg8" className="mt-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">Explore now</a>
                </div>
                <div className="absolute inset-0 z-10">
                    <img src={require('../img/banner.jpg')}  alt="" className="h-full w-full object-fit-cover" />
                </div>
            </section>
        </StyledBanner>

    )
}

export default Banner