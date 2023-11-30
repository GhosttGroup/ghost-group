import React from 'react';

import styles from './TechStack.module.css';

export const TechStack = () => (
      <div className={styles.container}>
        <div className={styles.info}>
             <h2 className={styles.title}>Tech Stack</h2>
         <p className={styles.content}>Feel IT&#8217;s tech stack includes Node.js, Angular, React Native, Vue.js, and JavaScript.<br />
             With these cutting-edge and secure technologies, we match clients with specific experts and swiftly assemble customized teams to meet their needs and preferences.</p>
            </div>
            <div className={styles.info2}>
                <p className={styles.reactnative}>React Native</p>
                <p className={styles.sass}>Sass</p>
                <p className={styles.javascript}>JavaScript</p>
                <p className={styles.typescript}>TypeScript</p>
                <p className={styles.nextjs}>Next.js</p>
                <p className={styles.webpack}>Webpack</p>
                <p className={styles.appolo}>Appolo</p>
                <p className={styles.java}>Java</p>
                <p className={styles.nodejs}>Node.js</p>
                <p className={styles.expressjs}>Express.js</p>
                <p className={styles.graphql}>GraphQL</p>
                <p className={styles.python}>Python</p>
                <p className={styles.fastapi}>FastAPI</p>
            </div>
      </div>
  );
