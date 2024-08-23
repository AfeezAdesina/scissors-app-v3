<<<<<<< HEAD
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <>
      <header className="px-8 py-8 lg:px-4 h-14 flex justify-between items-center fixed top-0 left-0 right-0  overflow-hidden bg-white">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center" prefetch={true}>
            <Image
              src="/scissors.png"
              width={150}
              height={150}
              alt="Scissors logo"
            />
          </Link>
          <div className="block lg:hidden ">
            <button className="flex items-center px-3 py-2 border rounded text-purple-600 border-purple-600 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>
          <nav className="ml-auto flex gap-4 sm:gap-6 items-center font-extralight text-gray-800">
            <Link
              href="#products"
              className="text-lg font-sm hover:underline underline-offset-4"
              prefetch={false}
            >
              Products
            </Link>
            <Link
              href="#service"
              className="text-lg font-sm hover:underline underline-offset-4 font-extralight text-gray-800"
              prefetch={false}
            >
              Domain
            </Link>
            <Link
              href="#products"
              className="text-lg font-sm hover:underline underline-offset-4 font-extralight text-gray-800"
              prefetch={false}
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-lg font-sm hover:underline underline-offset-4 font-extralight text-gray-800"
              prefetch={false}
            >
              Resources
            </Link>
          </nav>
        </div>
        <nav className="flex gap-4">
          <Link
            href="/demopage"
            className="text-md font-bold p-2 rounded-full border-gray-800 border-solid text-gray-800 border px-5 py-1 hover:text-cyan-600 hover:border-cyan-600 shadow transition-colors"
            prefetch={false}
            target='_blank'
          >
            Get a Demo
          </Link>
          <Link
            href="/Login"
            className="text-md font-bold p-2 rounded-full bg-gray-800 px-5 py-1 text-white hover:bg-cyan-600 shadow transition-colors"
            prefetch={false}
          >
            Log Out
          </Link>
        </nav>
      </header>

    </>
  )
}

=======
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <>
    <header className="px-8 py-8 lg:px-4 h-14 flex justify-between items-center fixed top-0 left-0 right-0  overflow-hidden bg-white">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center" prefetch={true}>
              <Image
                src="/scissors.png"
                width={150}
                height={150}
                alt="Scissors logo"
              />
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6 items-center font-extralight text-gray-800">
              <Link
                href="#products"
                className="text-lg font-sm hover:underline underline-offset-4"
                prefetch={false}
              >
                Products
              </Link>
              <Link
                href="#service"
                className="text-lg font-sm hover:underline underline-offset-4 font-extralight text-gray-800"
                prefetch={false}
              >
                Domain
              </Link>
              <Link
                href="#products"
                className="text-lg font-sm hover:underline underline-offset-4 font-extralight text-gray-800"
                prefetch={false}
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="text-lg font-sm hover:underline underline-offset-4 font-extralight text-gray-800"
                prefetch={false}
              >
                Resources
              </Link>
            </nav>
          </div>
          <nav className="flex gap-4">
            <Link
              href="/demopage"
              className="text-md font-bold p-2 rounded-full border-gray-800 border-solid text-gray-800 border px-5 py-1 hover:text-cyan-600 hover:border-cyan-600 shadow transition-colors"
              prefetch={false}
              target='_blank'
            >
              Get a Demo
            </Link>
            <Link
              href="/Login"
              className="text-md font-bold p-2 rounded-full bg-gray-800 px-5 py-1 text-white hover:bg-cyan-600 shadow transition-colors"
              prefetch={false}
            >
              Log Out
            </Link>
          </nav>
        </header>
    
    </>
  )
}

>>>>>>> 1563cf47c47f749eb736dd46aaf4c3f41f48daa8
export default Header