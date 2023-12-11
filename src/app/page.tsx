import CarouselPost from './components/CarouselPost';
import FeaturedPost from './components/FeaturedPost';
import Hero from './components/Hero';

export default function Home() {
    return (
        <>
            <Hero />
            <FeaturedPost />
            <CarouselPost />
        </>
    );
}
