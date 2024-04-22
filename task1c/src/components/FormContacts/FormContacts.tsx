import React from 'react';

export const FormContacts = () => {
    return (
        <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-full px-3 mb-6 md:mb-0 relative">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name" style={{ width: '290px', height: '72px', lineHeight: '36px' }}>
                        Мобилен телефон
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="h-[12px] w-[12px] text-slate-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                        </span>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 pl-10 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Мобилен телефон" />
                        <button className="absolute inset-y-0 right-0 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-4 rounded-r" type="button" style={{ backgroundColor: '#E7F874' }}>
                            Изпрати
                        </button>
                    </div>

                </div>

            </div>
        </form>
    );
}

