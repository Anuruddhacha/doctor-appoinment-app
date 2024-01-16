/* eslint-disable no-unused-vars */
import React from 'react'

const Contact = () => {
  return (
    <section>

     <div className="px-4 mx-auto max-w-screen-md">

       <h2 className="heading text-center">Contact Us</h2>
       <p
       className='mb-8 lg:mb-16 font-light text-center text__para'
       >Got a technical issue? Want to send a feedback? Let us know.</p>


        <form className='space-y-8' action="#">

        <div>
          <label htmlFor="email" className='form__label'>Your email</label>
          <input type="emial" className='form__input
           mt-1' id='email' placeholder='example@gmail.com'/>
        </div>

        <div>
          <label htmlFor="subject" className='form__label'>Subject</label>
          <input type="text" className='form__input
           mt-1' id='subject' placeholder='let us know'/>
        </div>

        <div className='sm:col-span-2'>
          <label htmlFor="message" className='form__label'>Your Message</label>
          <textarea rows={4} type="text" className='form__input
           mt-1' id='message' placeholder='leave a comment...'/>
        </div>

        <button type='' className='btn rounded sm:w-fit'>Submit</button>

          

        </form>
     </div>

    </section>
  )
}

export default Contact