import React, { useEffect } from 'react'
import TermsOfService from '../../Components/termsOfService'
import Footer from '../../Components/footer'
import HeadManager from '../../Components/headerManager.jsx';


function TermsOfServicePage() {

    return (
        <>
            <HeadManager
                title="New Zealand BumperCheck - Terms of Service"
                description="Review BumperCheck terms of service to understand the terms and conditions governing the use of our comprehensive vehicle history report services. Ensure compliance and a clear understanding of our service policies."
                keywords="terms of service, service agreement, usage policies, BumperCheck terms, vehicle history reports terms"
            />
            <TermsOfService />
            <div className='mt-10 w-[100%] max-w-[1300px] mx-auto'>

                <Footer />
            </div>
        </>
    )
}

export default TermsOfServicePage