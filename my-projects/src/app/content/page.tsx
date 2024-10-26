import Link from "next/link"
export default function Content(){
    return(
        <>
        <section className="text-gray-400 body-font bg-gray-900">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">MY SKILLS IN LANGAUGES</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">CODE WITH AYAAN</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">With several years of experience in front-end development, I specialize in creating intuitive and dynamic web applications using HTML, CSS, JavaScript, TypeScript, and frameworks like React and Angular. Learning coding with me means you'll not only gain hands-on experience with essential technologies but also learn industry best practices, version control with Git, and problem-solving techniques crucial for any developer. I focus on making coding accessible, engaging, and practical, ensuring you build a strong foundation and confidence in tackling real-world projects.</p>
    </div>
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
        <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">HTML</h2>
        <p className="leading-relaxed text-base mb-4">Provides the foundational structure of web pages, making it possible to organize content and create a well-structured layout.</p>
        <a className="text-indigo-400 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
        <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">CSS</h2>
        <p className="leading-relaxed text-base mb-4">Adds style and visual appeal to web pages, allowing for custom designs, animations, and responsive layouts across devices.</p>
        <a className="text-indigo-400 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
        <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">JavaScript</h2>
        <p className="leading-relaxed text-base mb-4">Brings interactivity and dynamic features to websites, enabling user engagement and real-time updates.</p>
        <a className="text-indigo-400 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
        <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">Next.js</h2>
        <p className="leading-relaxed text-base mb-4">Enhances performance and scalability with server-side rendering, static site generation, and optimized code splitting for modern web applications.</p>
        <a className="text-indigo-400 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  </div>
</section>

        </>)}