import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const baseUrl = useBaseUrl('');

  return (
    <Layout
      title="Главная"
      description="Главная страница Википедии MeCraft">
      
      <header className={styles.hero}>
        <div className={styles.gradientLeft} />
        <div className={styles.gradientRight} />

        <div className={styles.container}>
          <img
            src={`${baseUrl}img/logo.png`}
            alt="MeCraft Logo"
            className={styles.logo}
          />

          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.subtitle}>{siteConfig.tagline}</p>

          <div className={styles.buttons}>
            <Link className={styles.button} to="/docs/start/rules">
              Начать
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}