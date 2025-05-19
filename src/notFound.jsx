import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Components/footer'


function NotFound() {
    return (
        <>
            <main className='text-center mt-20 h-[37.9vh]'>
                <h2 className='text-3xl text-yellow-400'>Ther was a problem.</h2>
                <p>We coluld not find the page you were looking for.</p>
                <p>Go Back to the <Link className='text-yellow-400 underline' to={'/'}>Home.</Link></p>

            </main>
            <Footer/>
        </>
    )
}

export default NotFound