import React from 'react'

const SocialMediaIcons = () => {
  return (
    <div className=' flex justify-center md:justify-start my-10 gap-7'>
        <a 
            href="https://bit.ly/3GHKkMi"
            className=' hover:opacity-50 trainiti duration-500'
            target = '_blank'
            rel = 'noreferrer'
        >
            <img src="linkedin.png" alt="Linkedin-link" />
        </a>
        <a 
            href="https://bit.ly/3ZPDnld"
            className=' hover:opacity-50 trainiti duration-500'
            target = '_blank'
            rel = 'noreferrer'
        >
            <img src="twitter.png" alt="Twitter-link" />
        </a>
        <a 
            href="https://bit.ly/3kkz9BP"
            className=' hover:opacity-50 trainiti duration-500'
            target = '_blank'
            rel = 'noreferrer'
        >
            <img src="facebook.png" alt="facebook-link" />
        </a>
        <a 
            href="https://bit.ly/3GJBhu6"
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