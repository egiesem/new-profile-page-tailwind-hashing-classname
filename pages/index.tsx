import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

import { ProfilePicture } from '@components/ProfilePicture';
import { AboutMe } from '@components/AboutMe';
import { Socials } from '@components/Socials';

const Home: NextPage = () => {
  useEffect(() => {
    console.log("%c        __ _.--..--._ _\r\n     .-' _/   _/\\_   \\_'-.\r\n    |__ /   _/\\__/\\_   \\__|\r\n       |___/\\_\\__/  \\___|\r\n              \\__/\r\n              \\__/\r\n               \\__/\r\n                \\__/\r\n             ____\\__/___\r\n       . - '             ' -.\r\n      /                      \\\r\n~~~~~~~  ~~~~~ ~~~~~  ~~~ ~~~  ~~~~~\r\n      ~~~   ~~~~~   ~~~   ~~ ~  ~ ~ ~\n             frogdude1123", 'color: #d9ed92');

    const emojis: string[] = ['🌴', '💫', '🐸', '🌱', '🍃', '🌲', '🍄', '☃️'];
    document.title = `frogdude1123 ${emojis[Math.floor(Math.random() * emojis.length)]}`;

    setInterval(() => {
      document.title = `frogdude1123 ${emojis[Math.floor(Math.random() * emojis.length)]}`;
    }, 5000);
  }, []);

  return (
    <div>
      <Head>
        <title>frogdude1123</title>
      </Head>
      <div className='w-[92%] lg:w-[80%] mx-auto mt-[10px] sm:mt-[30px] md:mt-[50px] grid grid-flow-row gap-[10px] md:gap-[15px] lg:gap-[20px]'>
        <ProfilePicture />
        <AboutMe />
        <Socials />
      </div>
    </div>
  );
};

export default Home;
