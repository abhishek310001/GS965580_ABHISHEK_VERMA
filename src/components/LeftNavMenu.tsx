import { Link } from 'react-router-dom';

const LeftNavMenu = () => {
  const menuItems = [
    { name: 'Stores', icon: '🏬', path: '/stores' },
    { name: 'SKUs', icon: '📦', path: '/skus' },
    { name: 'Planning', icon: '📊', path: '/planning' },
    { name: 'Charts', icon: '📈', path: '/charts' },
  ];

  return (
    <aside className="fixed top-16 left-0 h-screen w-64 bg-white-100 text-white shadow-lg">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Navigation</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                to={item.path}
                className="flex items-center p-2 rounded-md hover:bg-gray-200 transition duration-300 text-black"
              >
                <span className="mr-2 text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default LeftNavMenu;
