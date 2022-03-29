import { NextPage } from "next";
import { useState } from "react";
import { MailIcon } from '@heroicons/react/solid';

// import nodemailer from "nodemailer";

// const sendEmail = async (contactEmail: string, contactMessage: string) => {
//     const transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure: true,
//         auth: {
//             user: 'jose.lionel.velez',
//             pass: process.env.nodeMailer,
//         }
//     });

//     const mailOptions = {
//         from: contactEmail,
//         to: "zanzetacontactform@gmail.com",
//         subject: 'Zanzeta Contact Form Submission',
//         text: contactMessage
//     };

//     try{
//         transporter;

//         return await transporter.sendMail(mailOptions);
//     } catch (e) {
//         console.log(e);
//     }
// }

const Contact: NextPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('sending...');
        console.log(`${name}, ${email}, ${message}`);

        const data = {
            name,
            email,
            message
        }
    }

    return(
        <div className="bg-gray-100 flex flex-col rounded-md p-3 mx-4 sm:mx-0">
            <div className="grid grid-cols-2 gap-2">
            <div className="col-span-2 sm:col-span-1 sm:pr-3">
                <div className="pb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <div className="mt-1">
                        <input
                        type="text"
                        name="name"
                        id="name"
                        className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="name"
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="pb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <div className="mt-1">
                        <input
                        type="email"
                        name="email"
                        id="email"
                        className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="you@email.com"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
            </div>
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                        Your message
                    </label>
                    <div className="mt-1">
                        <textarea
                        rows={4}
                        name="comment"
                        id="comment"
                        className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        defaultValue={''}
                        onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-end pr-2 pt-2">
                <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-xs leading-4 rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    <MailIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Contact;