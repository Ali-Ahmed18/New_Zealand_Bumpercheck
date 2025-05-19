import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../../Components/footer";
import HeadManager from '../../Components/headerManager.jsx';

const DealPage = () => {
    const plans = [
        {
            name: "Gold Plan",
            price: "N$ 87",
            color: "[#00bce2]",
            features: [
                "Vehicle Report",
                "Change Of Ownership",
                "DMV Title History",
                "Open Recalls Of The Manufacturer",
                "Online Listing History",
                "Junk & Salvage Information",
                "Accident Information",
                "Odometer Reading",
                "Maintenance & Inspection",
                "Damage Or Theft",
                "Full Inspection Report"
            ],
            deal: "gold"
        }
    ];

    return (
        <>
            <HeadManager
                title={`New Zealand BumperCheck - Plans`}
                description={`Choose the best plan for your vehicle history report.`}
                keywords={`plans, vehicle report, basic plan, gold plan`}
            />
            <div className="min-h-screen mt-10 bg-white pt-16 pb-20">
                <div className="text-center mb-12">
                    <p className="text-green-600 text-xs font-semibold tracking-widest uppercase">Get Vehicle History Report</p>
                    <h2 className="text-3xl font-bold text-gray-800">Choose a Plan</h2>
                </div>

                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 justify-center ">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`w-full max-w-sm bg-white shadow-xl rounded-lg  overflow-hidden`}
                        >
                            <div className={`bg-${plan.color} text-white flex justify-center items-center py-8`}>
                                <div className="bg-white p-4 rounded-full">
                                    <svg className={`w-10 h-10 text-${plan.color}`} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-center font-semibold text-lg mb-2">{plan.name}</h3>
                                <p className="text-center text-3xl font-bold text-red-600 mb-4">{plan.price}</p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <span className="text-green-500 mr-2">✔</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link to={`/deals/checkout-${plan.deal}`}>
                                    <button className={`mt-6 w-full bg-${plan.color} text-white py-2 rounded hover:opacity-90`}>
                                        Buy Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
                <Footer />
        </>
    );
};

export default DealPage;
