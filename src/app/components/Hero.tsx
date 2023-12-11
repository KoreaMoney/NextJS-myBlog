import React from 'react';
import Image from 'next/image';
import profile from '../../../public/images/profileImage.jpg';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="text-center">
            <Image
                src={profile}
                alt="Picture of the author"
                width={160}
                height={160}
                className="mx-auto rounded-full"
                priority // nextJS에게 해당 이미지가 진짜 중요하다는 것을 인지시켜준다.
            />
            <h2 className="text-3xl font-bold mt-2">{"Hi, I'm Dowon"}</h2>
            <h3 className="text-xl font-semibold">Frontend Engineer</h3>
            <p>Exploring and Growing Crazy Developers</p>
            <Link href="/contact">
                <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2 hover:shadow-md  hover:text-yellow-500 hover:bg-zinc-50">
                    Contact Me!
                </button>
            </Link>
        </section>
    );
};

export default Hero;
