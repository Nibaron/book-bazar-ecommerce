import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "Why should I use CodeBook?",
          "answer": "CodeBook offers a comprehensive and high-quality learning experience for individuals interested in coding and programming. Our platform provides a wide range of courses taught by industry experts, interactive coding exercises, and a supportive learning community. Whether you are a beginner or an experienced coder, CodeBook is the perfect place to enhance your skills and stay up-to-date with the latest technologies."
        },
        {
          "id": 2,
          "question": "Can I access my eBook on mobile?",
          "answer": "Yes, you can access your eBooks on mobile devices. We offer a user-friendly and responsive mobile app that allows you to download and read your eBooks on the go. Whether you have an iOS or Android device, you can enjoy seamless access to your course materials, ensuring that your learning experience is convenient and accessible wherever you are."
        },
        {
          "id": 3,
          "question": "Do you offer refunds?",
          "answer": "We understand that circumstances may change, and sometimes, you may not be satisfied with your course purchase. CodeBook offers a flexible refund policy. If you are not completely satisfied with a course, you can request a refund within 30 days of your purchase. We believe in the quality of our courses, and our goal is to ensure your satisfaction with your learning experience."
        },
        {
          "id": 4,
          "question": "Do you support International payments?",
          "answer": "Yes, we support international payments. CodeBook accepts a variety of payment methods, including credit and debit cards from all major international providers. Our platform also supports secure payment gateways that allow you to make transactions in your local currency. Rest assured, you can easily enroll in our courses from anywhere in the world, and our payment system ensures a safe and seamless experience for international learners."
        }
      ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
  )
}