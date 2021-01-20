/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import Heading from '@theme/Heading';
import Checklist from '@site/src/components/Checklist'

import styles from './styles.module.css';

const ChecklistOrDefault = listType => props => {
  if (props.className == 'contains-task-list') {
    return <Checklist {...props} />
  } else {
    return React.createElement(listType, props);
  }
}

const videoExt = /\.(mp4|mkv)/;
function isInCampVideo(urlString) {
  try {
    const url = new URL(urlString);
    return url.host == 'incamp.in6k.com' && videoExt.test(url.pathname);  
  } catch (error) {
    return false;
  }
}

const MDXComponents = {
  code: (props) => {
    const {children} = props;
    if (typeof children === 'string') {
      if (!children.includes('\n')) {
        return <code {...props} />;
      }
      return <CodeBlock {...props} />;
    }
    return children;
  },
  a: (props) => (isInCampVideo(props.href)? <span>{props.href}</span> : <Link {...props} />),
  pre: (props) => <div className={styles.mdxCodeBlock} {...props} />,
  h1: Heading('h1'),
  h2: Heading('h2'),
  h3: Heading('h3'),
  h4: Heading('h4'),
  h5: Heading('h5'),
  h6: Heading('h6'),
  Checklist,
  ul: ChecklistOrDefault('ul'),
  ol: ChecklistOrDefault('ol'),
};

export default MDXComponents;
