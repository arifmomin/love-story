import Navbar from '../Navbar/Navbar'
import style from './Banner.module.scss'

const Banner = () => {
  return (
    <div id='banner' className={style.Banner}>
      <div className={style.banner_overlay}> </div>
      <div className='!z-[99999]'>
        <Navbar />
      </div>
      <div className='container'>
        <div className={style.content_container}>
          <h2>Ferdous & Salma</h2>
          <h1>
            From Cousins to Soulmates – Our Eternal Bond
          </h1>
          <p>
          What began as a bond of family slowly turned into something even more beautiful — a love built on trust, understanding, and years of shared memories.  We were destined to cross paths — not just as cousins, but as soulmates meant to walk hand in hand for life.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner
