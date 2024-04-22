import Image from 'next/image';

export const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center">
            <h1 className="mt-4 w-[80%] text-center font-grotesk text-xl font-semibold text-dark-blue sm:text-4xl md:mt-[72px] md:leading-[108%] md:-tracking-[4px] lg:w-[50%] lg:text-5xl xl:text-6xl 2xl:text-7xl" style={{ color: '#01303A' }}>
                Гъвкави решения за сухопътен транспорт за всеки клиент
            </h1>
            <div className="mt-6 max-w-[80%] lg:mt-[64px]">
                <Image src="/img/truck.png" width={969} height={690} alt="truck" />
            </div>
        </section>
    );
}
