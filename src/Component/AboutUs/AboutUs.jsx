import style from './AboutUs.module.scss'
import GroomImage from '../AboutUs/AboutUsImage/groom.svg'
import BrideImage from '../AboutUs/AboutUsImage/bride.svg'
import { FaFacebookF, FaHeart, FaInstagram, FaTwitter } from 'react-icons/fa'

const AboutUs = () => {
  return (
    <div id='about-us' className={style.about_us}>
      <div className='container'>
        <div>
          <h2 className='heading'>About Us</h2>
          <div className={style.section_title}>
            <span className={style.line}></span>
            <span className={style.icon}><FaHeart /></span>
            <span className={style.line}></span>
          </div>
        </div>

        <div className={style.content_wrapper}>
          {/* Groom */}
          <div className={style.profile}>
            <div className={style.image}>
              <img src={GroomImage} alt='groom.svg' />
            </div>
            <div className={style.text}>
              <h2>About The <span>Groom</span></h2>
              <p>
                I’m a dreamer and a believer in love, and my journey became even more meaningful when she came into my life. Her presence inspires me to be the best version of myself every day. With her by my side, I know there’s nothing we can’t achieve together.
              </p>
              <div className={style.footer}>
                <h3 className={style.name}><span>~</span> Ferdous Bhuiya</h3>
                <div className={style.socials}>
                  <a target='blank' href='https://www.facebook.com/md.shokatamomin?rdid=oAWVE1RRbnIk1Xib&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F174XxprxKC%2F#' className={style.social_icon}><FaFacebookF /></a>
                  <a className={style.social_icon}><FaTwitter /></a>
                  <a target='blank' href='https://www.instagram.com/naimulcesser/?utm_source=ig_web_button_share_sheet' className={style.social_icon}><FaInstagram /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Bride */}
          <div className={`${style.profile} ${style.reverse}`}>
            <div className={style.text}>
              <h2>About The <span>Bride</span></h2>
              <p>
                She is my light, my strength, and my biggest inspiration. Her kindness and love have transformed my world in ways I never thought possible. She’s the reason I smile brighter and dream bigger every single day.
              </p>
              <div className={style.footer}>
                <div className={style.socials}>
                  <a target='blank' href='https://www.facebook.com/oyshee.akter.948618?rdid=gUfDzdP1Xyh95Nhs&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1SeKt884uv%2F#' className={style.social_icon}><FaFacebookF /></a>
                  <a className={style.social_icon}><FaTwitter /></a>
                  <a target='blank' href='https://www.instagram.com/oyshee284/?utm_source=ig_web_button_share_sheet' className={style.social_icon}><FaInstagram /></a>
                </div>
                <h3 className={style.name}><span>~</span> Salma Bhuiya</h3>
              </div>
            </div>
            <div className={style.image}>
              <img src={BrideImage} alt='bride.svg' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
