import React from 'react'

const SocialMediaIcons = () => {
  return (
    <div className=' flex justify-center md:justify-start my-10 gap-7'>
        <a 
            href="https://www.linkedin.com"
            className=' hover:opacity-50 trainiti duration-500'
            target = '_blank'
            rel = 'noreferrer'
        >
            <img src="linkedin.png" alt="Linkedin-link" />
        </a>
        <a 
            href="https://www.twitter.com"
            className=' hover:opacity-50 trainiti duration-500'
            target = '_blank'
            rel = 'noreferrer'
        >
            <img src="twitter.png" alt="Twitter-link" />
        </a>
        <a 
            href="https://www.facebook.com"
            className=' hover:opacity-50 trainiti duration-500'
            target = '_blank'
            rel = 'noreferrer'
        >
            <img src="facebook.png" alt="facebook-link" />
        </a>
        <a 
            href="https://www.instagram.com"
            className=' hover:opacity-50 trainiti duration-500'
            target = '_blank'
            rel = 'noreferrer'
        >
            <img src="instagram.png" alt="instagram-link" />
        </a>
    </div>
  )
}

export default SocialMediaIcons