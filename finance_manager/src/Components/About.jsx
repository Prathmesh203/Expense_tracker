import React from 'react'

function About() {
  return (<div className=' bg-slate-300 border border-t-2 border-black'>
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md border border-t-2 border-black m-2 ">
            <h2 className="text-2xl font-bold text-center mb-4">About Me</h2>
            <p className="text-center mb-4">Hello! I'm Prathmesh Chawhan </p>
            <ul className="space-y-2">
                <li>
                    <a href="https://www.instagram.com/prathmesh_203/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Instagram
                    </a>
                </li>
                <li>
                    <a href="mailto:prathmeshch2003@gmail.com" className="text-blue-500 hover:underline">
                        Email: prathmeshch2003@gmail.com
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Prathmesh203" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/prathmesh-chawhan-56a737257/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        LinkedIn
                    </a>
                </li>
            </ul>
        </div>
        </div>
  )
}

export default About