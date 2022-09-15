import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

import { ProfilePicture } from '@components/ProfilePicture';
import { AboutMe } from '@components/AboutMe';
import { Socials } from '@components/Socials';
import { FeaturedVideo } from '@components/FeaturedVideo';
import { Links } from '@components/Links';
import { Explore } from '@components/Explore';

import umbrella from '@public/umbrella.svg';
import { addSmoothScroll } from '@utils/smoothScroll';

const Home: NextPage = () => {
  useEffect(() => {
    addSmoothScroll();
    console.log("%c        __ _.--..--._ _\r\n     .-' _/   _/\\_   \\_'-.\r\n    |__ /   _/\\__/\\_   \\__|\r\n       |___/\\_\\__/  \\___|\r\n              \\__/\r\n              \\__/\r\n               \\__/\r\n                \\__/\r\n             ____\\__/___\r\n       . - '             ' -.\r\n      /                      \\\r\n~~~~~~~  ~~~~~ ~~~~~  ~~~ ~~~  ~~~~~\r\n      ~~~   ~~~~~   ~~~   ~~ ~  ~ ~ ~\n             frogdude1123", 'color: #d9ed92');

    const emojis: string[] = ['🌴', '💫', '🐸', '🌱', '🍃', '🌲', '🍄', '☃️'];
    document.title = `frogdude1123 ${emojis[Math.floor(Math.random() * emojis.length)]}`;

    setInterval(() => {
      document.title = `frogdude1123 ${emojis[Math.floor(Math.random() * emojis.length)]}`;
    }, 5000);
  }, []);

  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.frog-hidden');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('frog-show');
        else entry.target.classList.remove('frog-show');
      });
    });

    hiddenElements.forEach(el => observer.observe(el));
  });

  return (
    <div className='pb-[30px]'>
      <Head>
        <meta property='og:title' content='frogdude1123' />
        <meta property='og:description' content='profile page' />
        <meta property='og:url' content='https://frogdude1123.herokuapp.com/' />
        <meta property='og:image' content='https://frogdude1123.herokuapp.com/frog.png' />
        <meta name='description' content='profile page' />
        <meta name='keywords' content='frogdude1123, frogdude, 1123, frog, dude, frog1123' />
        <title>frogdude1123</title>
      </Head>
      <div className='w-[92%] lg:w-[80%] mx-auto mt-[10px] sm:mt-[30px] md:mt-[50px] grid grid-flow-row gap-[10px] md:gap-[15px]'>
        <ProfilePicture />
        <Explore />
        <AboutMe />
        <Socials />
        <FeaturedVideo />
        <Links />
        <div className='m-auto'>
          <div className='w-[50px] h-[50px] md:w-[80px] md:h-[80px] float-animation'>
            <Image src={umbrella} layout='responsive' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
