import React from "react";

function Header() {
  return (
    <header>
      <nav className="py-4 border-b-2 border-b-gray-200">
        <ul className="flex items-center justify-evenly">
          <li className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
            <a href="/">Cadastro</a>
          </li>
          <li className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
            <a href="/products">Produtos</a>
          </li>
         
        </ul>
      </nav>
    </header>
  );
}

export default Header;
