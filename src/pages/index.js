import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
          <h1 className="hero__title ">青年开源虚拟大学</h1>
          <h1 className="">{siteConfig.title}</h1>
          <p className="hero__subtitle orange-text">助力全球,开源世界.<br/>{siteConfig.tagline}</p>
          <p className="hero__subtitle "></p>
          <div className={styles.buttons}>
              <Link
                  className="button button--secondary button--lg"
                  to="/docs/intro">注册
              </Link>
              <Link
                  className="button button--lg"
                  to="/docs/intro">文档
              </Link>
          </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
