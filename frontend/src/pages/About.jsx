import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Welcome to Forever, your one-stop destination for trendy, high-quality fashion for the entire family. We believe in celebrating individuality and style, offering a curated collection of clothing for men, women, and kids.</p>
        <p>At Forever, we are dedicated to providing you with apparel that blends comfort, elegance, and affordability. Whether you're searching for timeless classics, chic casuals, or outfits for special occasions, we have something for everyone.</p>
        <b className='text-gray-800'>Our Misssion</b>
        <p>Our mission is to make fashion accessible and enjoyable, ensuring every customer feels confident and stylish in our designs. We prioritize quality, sustainability, and customer satisfaction in everything we do.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Forever, quality assurance is at the heart of everything we do. We are committed to delivering clothing that exceeds expectations in both style and durability.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>At Forever, we make shopping effortless with a user-friendly website, diverse styles, and flexible payment options. Enjoy fast delivery, hassle-free returns, and 24/7 customer support for a seamless experience. Your convenience is our priority</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At Forever, we pride ourselves on exceptional customer service. Our friendly support team is available 24/7 to assist with your questions, ensuring a smooth shopping experience from start to finish. Your satisfaction is our top priority!</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
