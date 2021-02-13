import React, { ReactElement } from 'react';
import Layout from 'components/Layout';

const Portfolio = (): ReactElement => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col">
          <h1>My Projects</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
