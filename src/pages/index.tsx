import React, { ReactElement } from 'react';
import Layout from 'components/Layout';

const IndexPage = (): ReactElement => {
  return (
    <Layout>
      <main className="flex flex-row justify-between mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="text-center lg:text-left w-full sm:w-1/2 space-y-10">
          <h1 className="text-3xl tracking-tight font-extrabold text-gray-500 sm:text-4xl md:text-5xl">
            <span className="block xl:inline">Hi, I'm </span>
            <span className="block text-gray-900 xl:inline">
              Ronnie Isurina
            </span>
          </h1>
          <p
            className={`
              text-gray-800
              mt-3 text-lg mt-5 mx-0
              sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto

            `}
          >
            A software developer from Bulacan in the Philippines.
          </p>

          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start flex justify-center">
            <div className="rounded-md shadow w-30 lg:w-auto">
              <a
                href="/portfolio"
                className="flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 md:py-3 md:text-lg md:px-10"
              >
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
