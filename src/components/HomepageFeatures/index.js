import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
      title: '开放开源',
      Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
      description: (
          <>
              开放是一种态度,开源是一种信仰.每个开源人都有自己心中的追求.
          </>
      ),
  },
    {
        title: '终生学习',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                只要精神不落后,人生时刻是青年.学海无涯,唯有终生学习,方得一生幸福.
            </>
        ),
    },
    {
        title: '团结协作',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                团结就是力量,团结就是希望.合作,是每一个开源项目成功的基石.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
