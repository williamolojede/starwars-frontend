import React from 'react';

import { Logo } from '../components/atoms';
import styles  from './SiteHero.module.css';

export const SiteHero = () => {
  return (
    <header className={`${styles.hero} bg-no-repeat py-8`}>
      <div className={`${styles.heroContainer} container mx-auto px-4 flex items-center`}>
        <Logo />
        <nav className="flex">
          <a href="#" className="text-white mr-4">People</a>
          <a href="#" className="text-white mr-4">Planets</a>
          <a href="#" className="text-white">Starships</a>
        </nav>
      </div>
    </header>
  )
}
