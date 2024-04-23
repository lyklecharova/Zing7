"use client";

import { FormEvent, useState } from "react";


export const FormContacts = () => {
    const [phone, setPhone] = useState('');
    const [isValidPhone, setIsValidPhone] = useState({ type: '', text: '' });

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const phoneRegex = /^\d{10}$/;

        setPhone(value);

        if (!value.trim()) {
            setIsValidPhone({ type: 'error', text: 'Моля, въведете телефонен номер.' });
        } else if (!phoneRegex.test(value)) {
            setIsValidPhone({ type: 'error', text: 'Моля, въведете валиден телефонен номер.' });
        } else {
            setIsValidPhone({ type: 'success', text: '' });
        }
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (isValidPhone.type === 'success') {
            alert('Формата е изпратена успешно!');
        } else {
            alert('Моля, въведете валиден мобилен телефонен номер.');
        }
    }

    return (
        <form className="w-full max-w-lg" style={{ width: '55%' }} onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-2 mb-2 items-center ">
                <div className="flex-1 relative">
                    <span className="absolute inset-y-0 left-2 flex items-center pl-2">
                        <svg className="h-[12px] w-[12px] text-slate-500" width="20" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="5" width="18" height="14" rx="2" />
                            <polyline points="3 7 12 13 21 7" />
                        </svg>
                    </span>
                    <input
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${isValidPhone.type === 'error' ? 'border-red-500' : 'border-gray-200'} rounded py-3 pl-10 pr-12 mb-3 leading-tight focus:outline-none focus:bg-white`}
                        id="grid-first-name"
                        type="text"
                        placeholder="Мобилен телефон"
                        style={{ borderWidth: '10px' }}
                        onChange={handlePhoneChange}
                        value={phone}
                    />
                    {isValidPhone.text && <p className="text-red-500 text-xs italic">{isValidPhone.text}</p>}
                    <button
                        className={`absolute right-0.2 top-0.5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold text-white py-2 px-4 border ${isValidPhone.type === 'error' ? 'border-red-500' : 'border-blue-500'} border-transparent rounded`}
                        type="submit"
                        style={{ background: '#E7F874', color: '#083C2F', borderWidth: '10px', padding: '5px 10px', top: "5px" }}>
                        Изпрати
                    </button>
                </div>
            </div>
        </form>
    );
}
