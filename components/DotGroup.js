import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const DotGroup = ({selectedPage, setSelectedPage}) => {

    const selecredStyle = `relative bg-yellow before:absolute before:w-6 before:h-6
        before:rounded-full before:border-2 before:border-yellow before:left-[-50%]
        before:top-[-50%]
    `

  return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
        <AnchorLink
            className={`${
                selectedPage === 'home' ? selecredStyle : "bg-dark-grey"
            } w-3 h-3 rounded-full`}
            href="#home"
            onClick={() => setSelectedPage('home')}
        />
        <AnchorLink
            className={`${
                selectedPage === 'about' ? selecredStyle : "bg-dark-grey"
            } w-3 h-3 rounded-full`}
            href="#about"
            onClick={() => setSelectedPage('about')}
        />
        <AnchorLink
            className={`${
                selectedPage === 'edu' ? selecredStyle : "bg-dark-grey"
            } w-3 h-3 rounded-full`}
            href="#edu"
            onClick={() => setSelectedPage('edu')}
        />
        <AnchorLink
            className={`${
                selectedPage === 'events' ? selecredStyle : "bg-dark-grey"
            } w-3 h-3 rounded-full`}
            href="#events"
            onClick={() => setSelectedPage('events')}
        />
        <AnchorLink
            className={`${
                selectedPage === 'social' ? selecredStyle : "bg-dark-grey"
            } w-3 h-3 rounded-full`}
            href="#social"
            onClick={() => setSelectedPage('social')}
        />
    </div>
  )
}

export default DotGroup 