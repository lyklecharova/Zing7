export const Header = () => {
  return (
    <nav className="bg-white p-4 flex justify-center" style={{ width: "100%", height: '51px'}}>
      <div className="flex items-center justify-between" style={{ width: "1308px"}}>
        <div className="flex items-center">
          <h1 className="text-custom-color text-xl font-bold" style={{ lineHeight: '140%', verticalAlign: 'middle'}}>
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
          <button className="mr-6" style={{ width: "62px", height: '27px'}}>
            <a href="#" className="text-gray-800 hover:text-gray-300">Профил</a>
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-md" 
            style={{ backgroundColor: '#01303A'}}>
            Заявка за препратка
          </button>
        </div>
      </div>
    </nav>
  );
};
