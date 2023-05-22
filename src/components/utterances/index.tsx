'use client';

import React, { FunctionComponent, createRef, useEffect, useRef } from 'react';

const src = 'https://utteranc.es/client.js';
const branch = 'master';

type UtteranceProps = {
  repo: string;
  path: string;
};

const Utterances: FunctionComponent<UtteranceProps> = ({ repo, path }) => {
  const rootElm = createRef<HTMLDivElement>();
  const isUtterancesLoaded = useRef<boolean>(false);

  useEffect(() => {
    if (!rootElm.current || isUtterancesLoaded.current) return;

    const utterances = document.createElement('script');
    const utterancesConfig = {
      src,
      repo,
      branch,
      theme: 'github-light',
      label: 'comment',
      async: true,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    } as any;

    Object.keys(utterancesConfig).forEach((configKey) => {
      utterances.setAttribute(configKey, utterancesConfig[configKey]);
    });
    rootElm.current.appendChild(utterances);
    isUtterancesLoaded.current = true;
  }, [repo, rootElm, path]);

  return <div className="utterances min-w-full" ref={rootElm} />;
};

export default Utterances;
