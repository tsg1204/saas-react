import Image from 'next/image';
import Link from 'next/link';
import hero from '../../public/assets/hero.png';

export default function HomePage() {
  return (
    <div className="grid-halves h-screen-navbar">
      <div className="bg-teal border-right">
        <div className="column-padding">
          <div className="tablet-centered">
            <div className="constent-grid home-hero">
              <h1>
                The most <br /> epic products.
              </h1>
              <p className="section-subtitle">
                <br />
                All the most epic things on the internet, all in one place.
              </p>
              <br />
              <Link href="/products" className="large-button">
                <div className="large-button-text">Explore Products</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-salmon">
        <div className="column-padding centered">
          <div className="callout-wrap">
            <Image src={hero} placeholder="blur" className="callout-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
