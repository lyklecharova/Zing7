export const Header = () => {
  return (
    <nav className="bg-white p-4" style={{ width: "1308px", height: '51'}}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
        <h1 className="text-custom-color text-xl font-bold" 
            style={{textAlign: 'left', lineHeight: '140%', verticalAlign: 'middle'}}>Website</h1>

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
              <button className="mr-6" style={{ width: "62px", height: '27px'}}>
                <a href="#" className="text-gray-800 hover:text-gray-300">Профил</a>
              </button>
              <li>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-md" 
                style={{ backgroundColor: '#01303A'}}>Заявка за препратка
                </button>
              </li>
        </ul>
      </div>
    </nav>
  );
};
