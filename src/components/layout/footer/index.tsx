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
      <div className="flex justify-center space-x-5 bg-slate-50 py-3.5 text-2xl">
        {SOCIAL_LOGOS.map(({ id, logo, link }) => (
          <Link href={link} legacyBehavior key={id}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-800"
            >
              {logo}
            </a>
          </Link>
        ))}
      </div>

      <div className="bg-neutral-200 p-2 text-center text-sm font-medium text-neutral-900">
        © 2023 Copyright :{' '}
        <Link className="" href="https://github.com/seolleung2" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            Dotori Jung
          </a>
        </Link>
      </div>
    </footer>
  );
}

const SOCIAL_LOGOS = [
  {
    id: '1',
    link: '#',
    logo: <FaFacebook />,
  },
  {
    id: '2',
    link: '#',
    logo: <FaTwitter />,
  },
  {
    id: '3',
    link: '#',
    logo: <FaLinkedin />,
  },
  {
    id: '4',
    link: '#',
    logo: <FaGithub />,
  },
  {
    id: '5',
    link: '#',
    logo: <FaDiscord />,
  },
];
