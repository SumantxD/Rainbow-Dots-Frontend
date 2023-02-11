import React from 'react'

const SocialMediaIcons = () => {
  return (
    <div className=' flex justify-center md:justify-start my-10 gap-7'>
        <a 
            href="https://www.linkedin.com/in/rd-nitr-32294a1b0/"
            className=' hover:opacity-50 trainiti duration-500'
            target = '_blank'
            rel = 'noreferrer'
        >
            <img src="linkedin.png" alt="Linkedin-link" />
        </a>
        <a 
            href="https://twitter.com/rainbowdot_nitr"
            className=' hover:opacity-50 trainiti duration-500'
            target = '_blank'
            rel = 'noreferrer'
        >
            <img src="twitter.png" alt="Twitter-link" />
        </a>
        <a 
            href="https://m.facebook.com/rainbowdotclub?eav=AfapduxsC3koFXDz4NjXUaUruSvYve0rXvZ1doMcXqOuOonxx8LCdmLDErO9sx8EV7c&paipv=0"
            className=' hover:opacity-50 trainiti duration-500'
            target = '_blank'
            rel = 'noreferrer'
        >
            <img src="facebook.png" alt="facebook-link" />
        </a>
        <a 
            href="https://www.instagram.com/rainbowdot.nitr/"
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