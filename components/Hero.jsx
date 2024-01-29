import React from 'react'
const Hero = () => {
  return (
    <section className="border-transparent relative bg-gradient-to-b from-gray-800 to-zinc-900 dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-6">
      <h1 className="text-white max-w-2xl mb-4 text-4xl font-bold leading-none md:text-5xl xl:text-6xl dark:text-white">
      Green Eggs and Ham
      </h1>
      <p className="max-w-2xl mb-6 text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
      Guy-Am-I, an inventor, and his friend Sam-I-Am go <br/>
       on a cross-country
      trip that would test the limits of their <br /> friendship.
       As they learn to try new things, they find...
      </p>
      <button type="button" class="text-gray-900 bg-white border-transparent border-gray-300
       focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200
       font-medium rounded-lg text-md px-8 py-4 me-2 mb-2 dark:bg-gray-800
        dark:text-white dark:border-gray-600 dark:hover:bg-gray-700
        dark:hover:border-gray-600 dark:focus:ring-gray-700">Watch now
       </button>
       <button type="button" class="text-white-900 bg-slate-400 border-transparent border-gray-300
       focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200
       font-medium rounded-lg text-md px-8 py-4 me-2 mb-2 dark:bg-gray-800
        dark:text-white dark:border-gray-600 dark:hover:bg-gray-700
        dark:hover:border-gray-600 dark:focus:ring-gray-700">My List</button>
    </div>
    <div className="lg:mt-3 lg:col-span-5 lg:flex">
      <img className='' src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'  alt="mockup"
      />
    </div>
  </div>
</section>
  )
}

export default Hero