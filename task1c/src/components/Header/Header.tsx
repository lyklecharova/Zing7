export const Header = () => {
  return (
    <nav className="p-4 flex justify-center" style={{ width: "100%", height: '51px' }}>
      <div className="flex items-center justify-between" style={{ width: "1308px" }}>
        <div className="flex items-center">
          <h1 className="text-custom-color text-xl font-bold" style={{ lineHeight: '140%', verticalAlign: 'middle' }}>
            Website
          </h1>
        </div>
        <ul className="flex items-center">
          <li className="mr-6">
            <a href="#" className="text-custom-color hover:text-gray-300">Начало</a>
          </li>
          <li className="mr-6">
            <a href="#" className="text-gray-800 hover:text-gray-300">За нас</a>
          </li>
          <li className="mr-6">
            <a href="#" className="text-gray-800 hover:text-gray-300">Услуги</a>
          </li>
          <li className="mr-6">
            <a href="#" className="text-gray-800 hover:text-gray-300">Цени</a>
          </li>
          <li className="mr-6">
            <a href="#" className="text-gray-800 hover:text-gray-300">Контакти</a>
          </li>
        </ul>
        <div className="flex items-center">
          <button className="mr-3" style={{ width: "56px", height: '27px' }}>
            <a href="#" className="text-gray-800 hover:text-gray-300">Профил</a>
          </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold color:text-white py-2 px-4 md:px-15 border-8 border-blue-500 rounded-lg"
            style={{ color: '#01303A', margin: '0 10px', backgroundColor: '#fff', borderColor: '#01303A' }}>
            Заявка за пратка
          </button>

        </div>
      </div>
    </nav>
  );
};
