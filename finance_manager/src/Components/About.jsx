import React from 'react'

function About() {
  return (<div className='h-[50vh] grid place-items-center text-center' style={{backgroundColor:"#1E201E"}}>
    <div className="grid gap-2">
            <h2 className="text-4xl font-bold text-emerald-500">About Me</h2>
            <p className="text-3xl font-semibold text-emerald-600">Hello! I'm Prathmesh Chawhan </p>
            <ul className="">
                <li>
                    <a href="https://www.instagram.com/prathmesh_203/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Instagram: @prathmesh_203
                    </a>
                </li>
                <li>
                    <a href="mailto:prathmeshch2003@gmail.com" className="text-blue-500 hover:underline">
                        Email: prathmeshch2003@gmail.com
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Prathmesh203" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        GitHub: @prathmesh_203
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/prathmesh-chawhan-56a737257/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        LinkedIn: @prathmesh_203
                    </a>
                </li>
            </ul>
        </div>
        </div>
  )
}

export default About