import React from 'react'

const Footer = () => {
  return (
   <section className='c-space mt-52 pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
    <div className='text-white-500 flex gap-2'>
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
    </div>
    <div className='flex gap-3'>
        <a href='https://github.com/mayankmehta19032003' target='_blank' className='social-icon'>
            <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2'/>
        </a>
        <a href='https://www.linkedin.com/in/mayank-mehta880/' target='_blank' className='social-icon'>
            <img src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png" alt="insta"  className='w-1/2 h-1/2'/>
        </a>
        <a href='https://x.com/Mayank19032003' target='_blank' className='social-icon'>
            <img src="https://img.icons8.com/?size=100&id=cMRBi0rI3iwb&format=png&color=000000" alt="twitter" className='w-1/2 h-1/2'/>
        </a>
    </div>
    <p className='text-white-500'>
    © 2024 Mayank Mehta. All rights reserved.
    </p>
   </section>
  )
}

export default Footer
