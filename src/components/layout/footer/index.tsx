'use client';

import Link from 'next/link';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from 'react-icons/fa';

export default function PageFooter() {
  return (
    <footer className="sticky bottom-0 w-full text-center text-white">
      <div className="flex justify-center space-x-5 bg-slate-100 py-3.5 text-2xl">
        {SOCIAL_LOGOS.map(({ id, logo, link }) => (
          <Link href={link} legacyBehavior key={id}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-800"
            >
              {logo}
            </a>
          </Link>
        ))}
      </div>

      <div className="bg-neutral-800 p-2 text-center text-sm font-medium text-white">
        © 2023 Copyright{' '}
        <Link className="" href="https://github.com/seolleung2" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            by Dotori Jung, All Rights Reserved.
          </a>
        </Link>
      </div>
    </footer>
  );
}

const SOCIAL_LOGOS = [
  {
    id: '1',
    link: 'https://www.facebook.com/dotorimook8808',
    logo: <FaFacebook />,
  },
  {
    id: '2',
    link: 'https://twitter.com/teddyjung8808',
    logo: <FaTwitter />,
  },
  {
    id: '3',
    link: '#',
    logo: <FaLinkedin />,
  },
  {
    id: '4',
    link: 'https://github.com/seolleung2',
    logo: <FaGithub />,
  },
  {
    id: '5',
    link: '#',
    logo: <FaDiscord />,
  },
];
