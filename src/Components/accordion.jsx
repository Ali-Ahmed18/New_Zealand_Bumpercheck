import React, { useState } from 'react';

const questionsAndAnswers = [
  {
    id: 1,
    question: "What is a BumperCheck Report Vehicle History Report?",
    answer: "A BumperCheck Report Vehicle History Report is a detailed record of a vehicle's past. It includes information such as accidents, title history, odometer readings, and more. This report is helpful for buyers and sellers to make informed decisions about a vehicle's condition and history."
  },
  {
    id: 2,
    question: "For whom do we provide Vehicle History Reports?",
    answer: "We provide Vehicle History Reports for anyone involved in buying or selling a used vehicle. This includes individual buyers, sellers, dealerships, and automotive professionals. Our reports aim to provide transparent and comprehensive information about a vehicle's history to facilitate confident and informed transactions."
  },
  {
    id: 3,
    question: "Do Bumper Check Reports have information on every vehicle?",
    answer: "Bumper Check Reports aim to cover a wide range of vehicles, but it's essential to note that not all vehicles may have detailed information available. The extent of data depends on the availability of records in public databases. However, we strive to provide as much information as possible to assist our users in making informed decisions about their vehicle transactions."
  },
  {
    id: 4,
    question: "What is VIN?",
    answer: "VIN stands for Vehicle Identification Number. It is a unique code assigned to every motor vehicle when it's manufactured. The VIN serves as a fingerprint for the vehicle, containing a specific combination of letters and numbers. This code is used to identify and track individual vehicles, providing essential information about their make, model, year, and other specifications."
  },
  {
    id: 5,
    question: "Where can I find my VIN number?",
    answer: "The VIN number can usually be found on the driver's side of the dashboard, near the windshield. Additionally, it may be located on the driver's side door frame or door post, or on various vehicle documents such as the title, registration, or insurance. If you're having trouble locating your VIN, refer to your vehicle's owner's manual or consult the manufacturer's website for guidance."
  }
];

const Accordion = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <>
    <h1 className='text-4xl font-bold mt-40 text-center'>Frequently Asked Questions</h1>
    <div className="container mx-auto sm:p-8 mt-8">
      {questionsAndAnswers.map((qa) => (
        <div key={qa.id} className="mb-2">
          <div
            className={`flex items-center justify-between border border-gray-300 p-4 cursor-pointer rounded-md transition-all duration-300 ${
              activeQuestion === qa.id ? 'bg-gray-100' : ''
            }`}
            onClick={() => toggleQuestion(qa.id)}
          >
            <p className="font-bold text-lg">{qa.question}</p>
            <span className="ml-2 text-[25px] font-bold">{activeQuestion === qa.id ? '-' : '+'}</span>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeQuestion === qa.id ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="p-4 rounded-md border border-gray-300">
              <p className="text-gray-700">{qa.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Accordion;
