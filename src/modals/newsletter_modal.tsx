import React from 'react';

export default function NewsletterModal({ onClose }) {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-2xl mb-4">Sign up for our Newsletter</h2>
                <form>
                    <input type="email" placeholder="Your email" className="border p-2 mb-4 w-full" />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
                </form>
                <button onClick={onClose} className="mt-4 text-red-500">Close</button>
            </div>
        </div>
    );
}