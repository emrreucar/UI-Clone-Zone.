import Image from 'next/image';
import Hero from '../components/Hero';
import Service from '../components/Service';
import Works from '../components/Works';
import Teams from '../components/Teams';
import Subscribe from '../components/Subscribe';

export default function Home() {
  return (
    <div>
      <Hero />
      <Service />
      <Works />
      <Teams />
      <Subscribe />
    </div>
  )
}
