import React, { ReactElement } from "react"
import Layout from 'components/Layout';
import CodingImage from 'assets/images/coding.svg';

const IndexPage = (): ReactElement => {
  return (
    <Layout>
      <main className="flex flex-row justify-between mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left w-1/2 space-y-10">
          <h1 className="text-3xl tracking-tight font-extrabold text-gray-500 sm:text-4xl md:text-5xl">
            <span className="block xl:inline">Hi, I'm </span>
            <span className="block text-gray-900 xl:inline">
              Ronnie Isurina
            </span>
          </h1>
          <p className="mt-3 text-3xl text-gray-800 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
            A software developer from Bulacan in the Philippines.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 md:py-3 md:text-lg md:px-10">
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default IndexPage