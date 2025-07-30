import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import style from './Navbar.module.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const navbar = document.querySelector(`.${style.navbar}`);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbar.classList.add('navbar_fixed');
      } else {
        navbar.classList.remove('navbar_fixed');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={style.navbar}>
      {isVisible && (
        <div
          className={style.back_to_top}
          onClick={scrollToTop}
          role='button'
          tabIndex={0}
          aria-label='Back to top'
        >
          FS
        </div>
      )}

      <div className={style.navbar_container}>
        <a href='#our-love' className={style.navbar_logo}>Ferdous & Salma</a>

        <ul className={style.navbar_menu}>
          <li><a href='#banner'>Home</a></li>
          <li><a href='#about-us'>About Us</a></li>
          <li><a href='#our-story'>Our Story</a></li>
          <li><a href='#TimeLine'>Timeline</a></li>
          <li><a href='#contact'>Contact Us</a></li>
        </ul>

        <Link to='/wish' className={style.navbar_wish}>Send a Wish</Link>

        <div className={style.navbar_toggle} onClick={() => setMenuOpen(true)}>
          <GiHamburgerMenu />
        </div>
      </div>

      {menuOpen && (
        <div className={style.mobile_menu_wrapper}>
          <div className={style.mobile_menu}>
            <div className={style.mobile_menu_close} onClick={() => setMenuOpen(false)}>
              <IoMdClose />
            </div>
            <ul className={style.mobile_menu_list}>
              <li><a href='#home'>Home</a></li>
              <li><a href='#about-us'>About Us</a></li>
              <li><a href='#our-story'>Our Story</a></li>
              <li><a href='#timeline'>Timeline</a></li>
              <li><a href='#contact'>Contact Us</a></li>
            </ul>
            <div className={style.mobile_wish_button}>
              <Link to='/wish' className={style.mobile_wish}>
              Send a Wish
            </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
