import React from 'react';
import { FormContacts } from '../FormContacts/FormContacts';

export const TextContent = () => {
    return (
        <section className="mt-12 flex w-full items-center justify-center py-12 text-center bg-dark-blue-700 lg:mt-[100px] lg:py-[100px]" style={{ backgroundColor: '#394649' }}>
            <article className="flex w-[80%] flex-col items-center xl:w-[40%] p-8 rounded-lg">
                <h2 className="font-grotesk font-semibold text-white text-2xl md:text-5xl md:leading-[108%] md:-tracking-[4px] lg:text-5xl xl:text-6xl 2xl:text-7xl">
                    Готови ли сте да работим заедно?
                </h2>
                <p style={{ maxWidth: '80%', marginTop: '0.75rem', width: '684px', height: '68px', color: '#FFFFFF', fontSize: '16px' }}>
                    Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на всички въпроси
                </p>
                <FormContacts />
            </article>

        </section>
    );
};
