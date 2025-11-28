import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'About Page',
        link: 'about',
    Svg: require('@site/static/img/abticon.svg').default,
    description: (
      <>
        You can learn more about the assignment here.
      </>
    ),
  },
    {
        title: 'Contact',
    link: 'contact_information',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Get in touch with the creator of this site.
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
          <div className="text--center">
              <Svg className={styles.featureSvg} role="img" />
      </div>
          <div className="text--center padding-horiz--md">
              <Heading as="h3"><a href={link}>{title}</a></Heading>
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
