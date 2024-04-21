import Image from 'next/image';

export const OtherServices = () => {
    return (
        <div>
            <div className="mt-8">
                <h1 className="title text-3xl font-bold text-blue-900">Други услуги</h1>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <Image
                        className="w-full" 
                        src="/img/1.png" 
                        alt="Sunset in the mountains" 
                        width={310}
                        height={55}
                    />
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <Image 
                        className="w-full" 
                        src="/img/2.png" 
                        alt="Sunset in the mountains" 
                        width={310}
                        height={55}
                    />
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <Image 
                        className="w-full" 
                        src="/img/3.png" 
                        alt="Sunset in the mountains" 
                        width={310}
                        height={55}
                    />
                </div>
            </div>
        </div>
    );
}
