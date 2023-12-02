'use client';

import {useTranslations} from 'next-intl';
import PageLayout from 'components/PageLayout';
import Sistema from 'components/cards/cardSistema';


declare namespace JSX {
  interface IntrinsicElements {
    sistema: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}

export default function IndexPage() {
  const t = useTranslations('IndexPage');

  return (
    <PageLayout title={t('title')}>

      <section id="start">
        <div className="container py-4 py-xl-5">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col align-self-center">
              <h1 className="display-5 fw-bold lh-1 mb-3">Fortuna</h1>
              <p className="text-white lead">{t('s1.desc')}</p>
              <div><a className="btn btn-primary btn-lg link-light px-4 mt-2 mb-2" role="button" href="https://discord.com/api/oauth2/authorize?client_id=899421595125288961&amp;permissions=8&amp;scope=bot%20applications.commands" target="_blank">{t('s1.btn1')}</a><a className="btn btn-outline-light btn-lg px-4 m-2" role="button" href="/docs/dices.html" rel="help">{t('s1.btn2')}</a></div>
            </div>
            <div className="col align-self-center"><img className="rounded img-fluid d-none d-sm-none d-md-inline" src="assets/img/blobs/una_hero_logo.webp" loading="lazy" alt="Inanimalia Fortuna Tenebris Verteri" /></div>
          </div>
        </div>
      </section>

      <section className='bgImg1' id='sistemas'>
        <div className="container py-4 py-xl-5">
          <h2 className="text-center text-light mb-1 bt-1">{t('s2.title')}</h2>
          <p className="text-center text-light m-1 mb-5">{t('s2.desc')}</p>
          <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 d-flex justify-content-center animate__pulse">
            <Sistema titulo={t('s2.cards.dnd.title')} desc={t('s2.cards.dnd.desc')} btn_text={t('s2.cards.dnd.btn')} btn_link={'/A DEFINIR'} pic={'/assets/img/sistemas/dnd_logo.svg'} alt='D&D Icon'/>
            <Sistema titulo={t('s2.cards.op.title')} desc={t('s2.cards.op.desc')} btn_text={t('s2.cards.op.btn')} btn_link={'/A DEFINIR'} pic={'/assets/img/sistemas/ordem_logo.svg'} alt='Ordem Paranormal Icon'/>
            <Sistema titulo={t('s2.cards.t20.title')} desc={t('s2.cards.t20.desc')} btn_text={t('s2.cards.t20.btn')} btn_link={'/A DEFINIR'} pic={'/assets/img/sistemas/Tormenta20.svg'} alt='Tormenta20 Icon'/>
            <Sistema titulo={t('s2.cards.cb.title')} desc={t('s2.cards.cb.desc')} btn_text={t('s2.cards.cb.btn')} btn_link={'/A DEFINIR'} pic={'/assets/img/sistemas/carbon2185_logo.svg'} alt='Carbon2185 Icon'/>
            <Sistema titulo={t('s2.cards.ga.title')} desc={t('s2.cards.gaia.desc')} btn_text={t('s2.cards.gaia.btn')} btn_link={'/A DEFINIR'} pic={'/assets/img/sistemas/Gaia-Logo.svg'} alt='Gaia: O Preludio> Icon'/>
            <Sistema titulo={t('s2.cards.3det.title')} desc={t('s2.cards.3det.desc')} btn_text={t('s2.cards.3det.btn')} btn_link={'/A DEFINIR'} pic={'/assets/img/sistemas/3det.svg'} alt='3DET Icon'/>
          </div>
        </div>
    </section>
    
    <section id='status'>
    <div className="mb-2">
        <div className="container py-4 py-xl-5">
            <div className="text-nowrap d-flex justify-content-center align-items-center animated-text noSelect"></div>
            <div className="row h-100">
                <div className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
                    <div>
                        <h2 className="fw-bold text-white mb-3">{t('s3.title')}</h2>
                        <p className="text-light mb-4">{t('s3.desc')}</p>
                    </div>
                </div>
            </div>
            <div className="row gy-4 row-cols-2 row-cols-md-4 justify-content-center align-items-center">
                <div data-bss-hover-animate="pulse" className="col">
                    <div className="text-center d-flex flex-column justify-content-center align-items-center py-3 mb-3">
                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary bg-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg"><svg className='text-dark' xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                            </svg></div>
                        <div className="px-3">
                            <h2 id="userAmount" className="fw-bold text-primary mb-0">...</h2>
                            <p className="text-white mb-0">{t('s3.user')}</p>
                        </div>
                    </div>
                </div>
                <div data-bss-hover-animate="pulse" className="col">
                    <div className="text-center d-flex flex-column justify-content-center align-items-center py-3 mb-3">
                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary bg-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg"><svg className='text-dark' xmlns="http://www.w3.org/2000/svg" viewBox="0 -64 640 640" width="1em" height="1em" fill="currentColor">
                                <path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"></path>
                            </svg></div>
                        <div className="px-3">
                            <h2 id="serverAmount" className="fw-bold text-primary mb-0">...</h2>
                            <p className="text-white mb-0">{t('s3.server')}</p>
                        </div>
                    </div>
                </div>
                <div data-bss-hover-animate="pulse" className="col">
                    <div className="text-center d-flex flex-column justify-content-center align-items-center py-3 mb-3">
                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary bg-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg"><svg className='text-dark' xmlns="http://www.w3.org/2000/svg" viewBox="0 -64 640 640" width="1em" height="1em" fill="currentColor">
                                <path d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z"></path>
                            </svg></div>
                        <div className="px-3">
                            <h2 id="commandAmount" className="fw-bold text-primary mb-0">...</h2>
                            <p className="text-white mb-0">{t('s3.cmds')} </p>
                        </div>
                    </div>
                </div>
                <div data-bss-hover-animate="pulse" className="col">
                    <div className="text-center d-flex flex-column justify-content-center align-items-center py-3 mb-3">
                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary bg-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg"><svg className='text-dark' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M160 352h192V160H160V352zM448 176h48C504.8 176 512 168.8 512 160s-7.162-16-16-16H448V128c0-35.35-28.65-64-64-64h-16V16C368 7.164 360.8 0 352 0c-8.836 0-16 7.164-16 16V64h-64V16C272 7.164 264.8 0 256 0C247.2 0 240 7.164 240 16V64h-64V16C176 7.164 168.8 0 160 0C151.2 0 144 7.164 144 16V64H128C92.65 64 64 92.65 64 128v16H16C7.164 144 0 151.2 0 160s7.164 16 16 16H64v64H16C7.164 240 0 247.2 0 256s7.164 16 16 16H64v64H16C7.164 336 0 343.2 0 352s7.164 16 16 16H64V384c0 35.35 28.65 64 64 64h16v48C144 504.8 151.2 512 160 512c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448H384c35.35 0 64-28.65 64-64v-16h48c8.838 0 16-7.164 16-16s-7.162-16-16-16H448v-64h48C504.8 272 512 264.8 512 256s-7.162-16-16-16H448V176zM384 368c0 8.836-7.162 16-16 16h-224C135.2 384 128 376.8 128 368v-224C128 135.2 135.2 128 144 128h224C376.8 128 384 135.2 384 144V368z"></path>
                            </svg></div>
                        <div className="px-3">
                            <h2 id="version" className="fw-bold text-primary mb-0">...</h2>
                            <p className="text-white mb-0">{t('s3.version')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className='bgImg2'>
<div className="container py-4 py-xl-5">
    <h2 className="text-center text-light">{t('s4.title')}</h2>
    <p className="text-center text-light mt-1 mb-5">{t('s4.desc')}</p>
    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 d-flex">
        <div className="col d-flex mt-1 mb-3">
            <div className="card border-white border-0 shadow glass-container cardBonito">
                <div className="card-body p-4">
                    <div className="d-flex justify-content-center align-items-center align-content-center">
                        <div className="bs-icon-md bs-icon-circle d-flex justify-content-center align-items-center d-inline-block bs-icon"><svg className="text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 -32 576 576" width="1em" height="1em" fill="currentColor">
                                <path d="M352.4 243.8l-49.83 99.5c-6.009 12-23.41 11.62-28.92-.625L216.7 216.3l-30.05 71.75L88.55 288l176.4 182.2c12.66 13.07 33.36 13.07 46.03 0l176.4-182.2l-112.1 .0052L352.4 243.8zM495.2 62.86c-54.36-46.98-137.5-38.5-187.5 13.06L288 96.25L268.3 75.92C218.3 24.36 135.2 15.88 80.81 62.86C23.37 112.5 16.84 197.6 60.18 256h105l35.93-86.25c5.508-12.88 23.66-13.12 29.54-.375l58.21 129.4l49.07-98c5.884-11.75 22.78-11.75 28.67 0l27.67 55.25h121.5C559.2 197.6 552.6 112.5 495.2 62.86z"></path>
                            </svg></div>
                    </div>
                    <h4 className="text-center text-white card-title">{t('s4.1T')}</h4>
                    <p className="text-start text-light card-text">{t('s4.1D')}</p>
                </div>
            </div>
        </div>
        <div className="col d-flex mt-1 mb-3">
            <div className="card border-white border-0 shadow glass-container cardBonito">
                <div className="card-body p-4">
                    <div className="d-flex justify-content-center align-items-center align-content-center">
                        <div className="bs-icon-md bs-icon-circle d-flex justify-content-center align-items-center d-inline-block bs-icon"><svg className="text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M20.04 317.3C18 317.3 16 315.8 16 313.3V150.5c0-2.351 1.91-4.012 4.001-4.012c.6882 0 1.396 .18 2.062 .5748l76.62 45.1l-75.28 122.3C22.59 316.8 21.31 317.3 20.04 317.3zM231.4 405.2l-208.2-22.06c-4.27-.4821-7.123-4.117-7.123-7.995c0-1.401 .3725-2.834 1.185-4.161L122.7 215.1L231.4 405.2zM31.1 420.1c0-2.039 1.508-4.068 3.93-4.068c.1654 0 .3351 .0095 .5089 .0291l203.6 22.31v65.66C239.1 508.6 236.2 512 232 512c-1.113 0-2.255-.2387-3.363-.7565L34.25 423.6C32.69 422.8 31.1 421.4 31.1 420.1zM33.94 117.1c-1.289-.7641-1.938-2.088-1.938-3.417c0-1.281 .6019-2.567 1.813-3.364l150.8-98.59C185.1 10.98 187.3 10.64 188.6 10.64c4.32 0 8.003 3.721 8.003 8.022c0 1.379-.3788 2.818-1.237 4.214L115.5 165.8L33.94 117.1zM146.8 175.1l95.59-168.4C245.5 2.53 250.7 0 255.1 0s10.5 2.53 13.62 7.624l95.59 168.4H146.8zM356.4 207.1l-100.4 175.7L155.6 207.1H356.4zM476.1 415.1c2.422 0 3.93 2.029 3.93 4.068c0 1.378-.6893 2.761-2.252 3.524l-194.4 87.66c-1.103 .5092-2.241 .7443-3.35 .7443c-4.2 0-7.994-3.371-7.994-7.994v-65.69l203.6-22.28C475.7 416 475.9 415.1 476.1 415.1zM494.8 370.9C495.6 372.3 496 373.7 496 375.1c0 3.872-2.841 7.499-7.128 7.98l-208.2 22.06l108.6-190.1L494.8 370.9zM316.6 22.87c-.8581-1.395-1.237-2.834-1.237-4.214c0-4.301 3.683-8.022 8.003-8.022c1.308 0 2.675 .3411 4.015 1.11l150.8 98.59c1.211 .7973 1.813 2.076 1.813 3.353c0 1.325-.6488 2.649-1.938 3.429L396.5 165.8L316.6 22.87zM491.1 146.5c2.091 0 4.001 1.661 4.001 4.012v162.8c0 2.483-2.016 4.006-4.053 4.006c-1.27 0-2.549-.5919-3.353-1.912l-75.28-122.3l76.62-45.1C490.6 146.7 491.3 146.5 491.1 146.5z"></path>
                            </svg></div>
                    </div>
                    <h4 className="text-center text-white card-title">{t('s4.2T')}</h4>
                    <p className="text-start text-light card-text">{t('s4.2D')}</p>
                </div>
            </div>
        </div>
        <div className="col d-flex mt-1 mb-3">
            <div className="card border-white border-0 shadow glass-container cardBonito">
                <div className="card-body p-4">
                    <div className="d-flex justify-content-center align-items-center align-content-center">
                        <div className="bs-icon-md bs-icon-circle d-flex justify-content-center align-items-center d-inline-block bs-icon"><svg className="text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M320 64h-49.61C262.1 27.48 230.7 0 192 0S121 27.48 113.6 64H64C28.65 64 0 92.66 0 128v320c0 35.34 28.65 64 64 64h256c35.35 0 64-28.66 64-64V128C384 92.66 355.3 64 320 64zM192 48c13.23 0 24 10.77 24 24S205.2 96 192 96S168 85.23 168 72S178.8 48 192 48zM336 448c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V128c0-8.82 7.178-16 16-16h18.26C80.93 117.1 80 122.4 80 128v16C80 152.8 87.16 160 96 160h192c8.836 0 16-7.164 16-16V128c0-5.559-.9316-10.86-2.264-16H320c8.822 0 16 7.18 16 16V448z"></path>
                            </svg></div>
                    </div>
                    <h4 className="text-center text-white card-title">{(t('s4.3T'))}</h4>
                    <p className="text-start text-light card-text">{t('s4.3D')}</p>
                </div>
            </div>
        </div>
        <div className="col d-flex mt-1 mb-3">
            <div className="card border-white border-0 shadow glass-container cardBonito">
                <div className="card-body p-4">
                    <div className="d-flex justify-content-center align-items-center align-content-center">
                        <div className="bs-icon-md bs-icon-circle d-flex justify-content-center align-items-center d-inline-block bs-icon"><svg className="text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"></path>
                            </svg></div>
                    </div>
                    <h4 className="text-center text-white card-title">Personalização</h4>
                    <p className="text-start text-light card-text">Selecione um entre os vários sistemas de RPG disponíveis para personalizar ainda mais sua campanha. Com opções como Ordem Paranormal, Dungeons &amp; Dragons, Carbon2185 e Tormenta, e se não for o suficiente crie seu próprio sistema.</p>
                </div>
            </div>
        </div>
        <div className="col d-flex mt-1 mb-3">
            <div className="card border-white border-0 shadow glass-container cardBonito">
                <div className="card-body p-4">
                    <div className="d-flex justify-content-center align-items-center align-content-center">
                        <div className="bs-icon-md bs-icon-circle d-flex justify-content-center align-items-center d-inline-block bs-icon"><svg className="text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM325.1 306.7L380.6 162.4C388.1 142.1 369 123.9 349.6 131.4L205.3 186.9C196.8 190.1 190.1 196.8 186.9 205.3L131.4 349.6C123.9 369 142.1 388.1 162.4 380.6L306.7 325.1C315.2 321.9 321.9 315.2 325.1 306.7V306.7z"></path>
                            </svg></div>
                    </div>
                    <h4 className="text-center text-white card-title">Encontre Jogadores</h4>
                    <p className="text-start text-light card-text">Encontre jogadores para a sua mesa de RPG com facilidade usando o sistema de Divulgação de Campanhas da Fortuna. Com o comando /enviar campanha,<br />Não perca mais tempo procurando jogadores, deixe a Fortuna te ajudar!</p>
                </div>
            </div>
        </div>
        <div className="col d-flex mt-1 mb-3">
            <div className="card border-white border-0 shadow glass-container cardBonito">
                <div className="card-body p-4">
                    <div className="d-flex justify-content-center align-items-center align-content-center">
                        <div className="bs-icon-md bs-icon-circle d-flex justify-content-center align-items-center d-inline-block bs-icon"><svg className="text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M384 312.7c-55.1 136.7-187.1 54-187.1 54-40.5 81.8-107.4 134.4-184.6 134.7-16.1 0-16.6-24.4 0-24.4 64.4-.3 120.5-42.7 157.2-110.1-41.1 15.9-118.6 27.9-161.6-82.2 109-44.9 159.1 11.2 178.3 45.5 9.9-24.4 17-50.9 21.6-79.7 0 0-139.7 21.9-149.5-98.1 119.1-47.9 152.6 76.7 152.6 76.7 1.6-16.7 3.3-52.6 3.3-53.4 0 0-106.3-73.7-38.1-165.2 124.6 43 61.4 162.4 61.4 162.4.5 1.6.5 23.8 0 33.4 0 0 45.2-89 136.4-57.5-4.2 134-141.9 106.4-141.9 106.4-4.4 27.4-11.2 53.4-20 77.5 0 0 83-91.8 172-20z"></path>
                            </svg></div>
                    </div>
                    <h4 className="text-center text-white card-title">Geradores</h4>
                    <p className="text-start text-light card-text">uma variedade de geradores de nomes e cartas para ajudar na criação de personagens. Com os comandos /gerar nome e /baralho, é possível gerar nomes aleatórios, cartas de tarô ou baralho para enriquecer sua narrativa.</p>
                </div>
            </div>
        </div>
        <div className="col d-flex mt-1 mb-3">
            <div className="card border-white border-0 shadow glass-container cardBonito">
                <div className="card-body p-4">
                    <div className="d-flex justify-content-center align-items-center align-content-center">
                        <div className="bs-icon-md bs-icon-circle d-flex justify-content-center align-items-center d-inline-block bs-icon"><svg className="text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M512 80C512 98.01 497.7 114.6 473.6 128C444.5 144.1 401.2 155.5 351.3 158.9C347.7 157.2 343.9 155.5 340.1 153.9C300.6 137.4 248.2 128 192 128C183.7 128 175.6 128.2 167.5 128.6L166.4 128C142.3 114.6 128 98.01 128 80C128 35.82 213.1 0 320 0C426 0 512 35.82 512 80V80zM160.7 161.1C170.9 160.4 181.3 160 192 160C254.2 160 309.4 172.3 344.5 191.4C369.3 204.9 384 221.7 384 240C384 243.1 383.3 247.9 381.9 251.7C377.3 264.9 364.1 277 346.9 287.3C346.9 287.3 346.9 287.3 346.9 287.3C346.8 287.3 346.6 287.4 346.5 287.5L346.5 287.5C346.2 287.7 345.9 287.8 345.6 288C310.6 307.4 254.8 320 192 320C132.4 320 79.06 308.7 43.84 290.9C41.97 289.9 40.15 288.1 38.39 288C14.28 274.6 0 258 0 240C0 205.2 53.43 175.5 128 164.6C138.5 163 149.4 161.8 160.7 161.1L160.7 161.1zM391.9 186.6C420.2 182.2 446.1 175.2 468.1 166.1C484.4 159.3 499.5 150.9 512 140.6V176C512 195.3 495.5 213.1 468.2 226.9C453.5 234.3 435.8 240.5 415.8 245.3C415.9 243.6 416 241.8 416 240C416 218.1 405.4 200.1 391.9 186.6V186.6zM384 336C384 354 369.7 370.6 345.6 384C343.8 384.1 342 385.9 340.2 386.9C304.9 404.7 251.6 416 192 416C129.2 416 73.42 403.4 38.39 384C14.28 370.6 .0003 354 .0003 336V300.6C12.45 310.9 27.62 319.3 43.93 326.1C83.44 342.6 135.8 352 192 352C248.2 352 300.6 342.6 340.1 326.1C347.9 322.9 355.4 319.2 362.5 315.2C368.6 311.8 374.3 308 379.7 304C381.2 302.9 382.6 301.7 384 300.6L384 336zM416 278.1C434.1 273.1 452.5 268.6 468.1 262.1C484.4 255.3 499.5 246.9 512 236.6V272C512 282.5 507 293 497.1 302.9C480.8 319.2 452.1 332.6 415.8 341.3C415.9 339.6 416 337.8 416 336V278.1zM192 448C248.2 448 300.6 438.6 340.1 422.1C356.4 415.3 371.5 406.9 384 396.6V432C384 476.2 298 512 192 512C85.96 512 .0003 476.2 .0003 432V396.6C12.45 406.9 27.62 415.3 43.93 422.1C83.44 438.6 135.8 448 192 448z"></path>
                            </svg></div>
                    </div>
                    <h4 className="text-center text-white card-title">Economia</h4>
                    <p className="text-start text-light card-text">Um amplo sistema de Economia chamado de KC (Kraken Coins) que pode ser conseguido de diversas formas, e será útil para funções que ainda estão em desenvolvimento.</p>
                </div>
            </div>
        </div>
        <div className="col d-flex mt-1 mb-3">
            <div className="card border-white border-0 shadow glass-container cardBonito">
                <div className="card-body p-4">
                    <div className="d-flex justify-content-center align-items-center align-content-center">
                        <div className="bs-icon-md bs-icon-circle d-flex justify-content-center align-items-center d-inline-block bs-icon"><svg className="text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M384 319.1C384 425.9 297.9 512 192 512s-192-86.13-192-192c0-58.67 27.82-106.8 54.57-134.1C69.54 169.3 96 179.8 96 201.5v85.5c0 35.17 27.97 64.5 63.16 64.94C194.9 352.5 224 323.6 224 288c0-88-175.1-96.12-52.15-277.2c13.5-19.72 44.15-10.77 44.15 13.03C215.1 127 384 149.7 384 319.1z"></path>
                            </svg></div>
                    </div>
                    <h4 className="text-center text-white card-title">Livro de Feitiços</h4>
                    <p className="text-start text-light card-text">Encontre as magias e rituais do seu grimorio  com mais facilidade com nosso livro de magias que permite pesquisa em tempo real!</p>
                </div>
            </div>
        </div>
        <div className="col d-flex mt-1 mb-3">
            <div className="card border-white border-0 shadow glass-container cardBonito">
                <div className="card-body p-4">
                    <div className="d-flex justify-content-center align-items-center align-content-center">
                        <div className="bs-icon-md bs-icon-circle d-flex justify-content-center align-items-center d-inline-block bs-icon"><svg className="text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="-96 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M204.3 32.01H96c-52.94 0-96 43.06-96 96c0 17.67 14.31 31.1 32 31.1s32-14.32 32-31.1c0-17.64 14.34-32 32-32h108.3C232.8 96.01 256 119.2 256 147.8c0 19.72-10.97 37.47-30.5 47.33L127.8 252.4C117.1 258.2 112 268.7 112 280v40c0 17.67 14.31 31.99 32 31.99s32-14.32 32-31.99V298.3L256 251.3c39.47-19.75 64-59.42 64-103.5C320 83.95 268.1 32.01 204.3 32.01zM144 400c-22.09 0-40 17.91-40 40s17.91 39.1 40 39.1s40-17.9 40-39.1S166.1 400 144 400z"></path>
                            </svg></div>
                    </div>
                    <h4 className="text-center text-white card-title">...</h4>
                    <p className="text-start text-light card-text">O que será que teremos aqui? bem esse definitivamente é um mistério </p>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
  
    <section id="premium" className="d-xl-flex justify-content-xl-center">
    <div className="container">
        <div className="row">
            <div className="col">
                <h2 className="text-center text-light">Doe &amp; apoie o Projeto</h2>
                <p className="text-center text-light m-2 p-2">O Mini Kraken é e sempre será gratuito, entretanto criamos o programa de apoiadores com o objetivo de nos ajudar a arcar com as despesas hospitalares da Una<br />que atualmente vive a base de maquinas, onde caso sejam desligadas ela morre. então doe e ajuda a Una a ficar viva por mais um dia!</p>
            </div>
        </div>
        <div className="row g-0 justify-content-center align-items-center">
            <div className="col-xxl-12 box pb-0 mb-5">
                <div className="content">
                    <h3>Explorador<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                            <path d="M416.1 128.1C407.6 138.3 392.4 138.3 383 128.1C373.7 119.6 373.7 104.4 383 95.03L471 7.029C480.4-2.343 495.6-2.343 504.1 7.029C514.3 16.4 514.3 31.6 504.1 40.97L416.1 128.1zM327.2 230.1L295.3 261.1C323.8 264.7 351.5 277 373.4 298.8L395.1 321.5L373.4 344.1C335.9 381.6 275.1 381.6 237.6 344.1L225.4 331.9L193.5 363.8C221.1 366.5 249.7 378.8 271.5 400.7L294.2 423.3L271.5 445.9C234 483.4 173.3 483.4 135.8 445.9L123.5 433.7L54.63 502.6C42.13 515.1 21.87 515.1 9.372 502.6C-3.124 490.1-3.124 469.9 9.372 457.4L78.29 388.5L67.88 378C30.39 340.6 30.39 279.8 67.88 242.3L90.51 219.6L113.1 242.3C134.1 263.3 146.3 289.7 149.7 317.1L180.1 286.6L169.7 276.2C132.2 238.7 132.2 177.9 169.7 140.5L192.3 117.8L214.1 140.5C235.1 161.4 248.1 187.9 251.5 215.3L281.9 184.8L271.5 174.4C234 136.9 234 76.12 271.5 38.63L294.2 16L316.8 38.63C321.3 43.15 325.4 47.94 329.1 52.93L375 7.03C384.4-2.343 399.6-2.343 408.1 7.03C418.3 16.4 418.3 31.6 408.1 40.97L350.7 99.2C355.9 120.7 355.4 143.2 349.3 164.5C369.6 158.7 391.1 157.1 411.7 162.4L471 103C480.4 93.66 495.6 93.66 504.1 103C514.3 112.4 514.3 127.6 504.1 136.1L458.8 183.2C464.5 187.2 470 191.9 475.2 197L497.8 219.6L475.2 242.3C437.7 279.8 376.9 279.8 339.4 242.3L327.2 230.1z"></path>
                        </svg></h3>
                    <p>Olha... você definitivamente é um peso para Fortuna, ela te tolera mas não diria que gosta de você!</p>
                    <ul className="list-unstyled justify-content-xxl-start mb-1">
                        <li className="mb-1"><svg className="mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 -64 640 640" width="1em" height="1em" fill="currentColor">
                                <path d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z"></path>
                            </svg> Acesso a maioria do comandos</li>
                        <li className="mb-1"><svg className="mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 -32 576 576" width="1em" height="1em" fill="currentColor">
                                <path d="M128 160H448V352H128V160zM512 64C547.3 64 576 92.65 576 128V208C549.5 208 528 229.5 528 256C528 282.5 549.5 304 576 304V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V304C26.51 304 48 282.5 48 256C48 229.5 26.51 208 0 208V128C0 92.65 28.65 64 64 64H512zM96 352C96 369.7 110.3 384 128 384H448C465.7 384 480 369.7 480 352V160C480 142.3 465.7 128 448 128H128C110.3 128 96 142.3 96 160V352z"></path>
                            </svg> Suporte em nosso Discord</li>
                        <li className="mb-1"><svg className="mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M20.04 317.3C18 317.3 16 315.8 16 313.3V150.5c0-2.351 1.91-4.012 4.001-4.012c.6882 0 1.396 .18 2.062 .5748l76.62 45.1l-75.28 122.3C22.59 316.8 21.31 317.3 20.04 317.3zM231.4 405.2l-208.2-22.06c-4.27-.4821-7.123-4.117-7.123-7.995c0-1.401 .3725-2.834 1.185-4.161L122.7 215.1L231.4 405.2zM31.1 420.1c0-2.039 1.508-4.068 3.93-4.068c.1654 0 .3351 .0095 .5089 .0291l203.6 22.31v65.66C239.1 508.6 236.2 512 232 512c-1.113 0-2.255-.2387-3.363-.7565L34.25 423.6C32.69 422.8 31.1 421.4 31.1 420.1zM33.94 117.1c-1.289-.7641-1.938-2.088-1.938-3.417c0-1.281 .6019-2.567 1.813-3.364l150.8-98.59C185.1 10.98 187.3 10.64 188.6 10.64c4.32 0 8.003 3.721 8.003 8.022c0 1.379-.3788 2.818-1.237 4.214L115.5 165.8L33.94 117.1zM146.8 175.1l95.59-168.4C245.5 2.53 250.7 0 255.1 0s10.5 2.53 13.62 7.624l95.59 168.4H146.8zM356.4 207.1l-100.4 175.7L155.6 207.1H356.4zM476.1 415.1c2.422 0 3.93 2.029 3.93 4.068c0 1.378-.6893 2.761-2.252 3.524l-194.4 87.66c-1.103 .5092-2.241 .7443-3.35 .7443c-4.2 0-7.994-3.371-7.994-7.994v-65.69l203.6-22.28C475.7 416 475.9 415.1 476.1 415.1zM494.8 370.9C495.6 372.3 496 373.7 496 375.1c0 3.872-2.841 7.499-7.128 7.98l-208.2 22.06l108.6-190.1L494.8 370.9zM316.6 22.87c-.8581-1.395-1.237-2.834-1.237-4.214c0-4.301 3.683-8.022 8.003-8.022c1.308 0 2.675 .3411 4.015 1.11l150.8 98.59c1.211 .7973 1.813 2.076 1.813 3.353c0 1.325-.6488 2.649-1.938 3.429L396.5 165.8L316.6 22.87zM491.1 146.5c2.091 0 4.001 1.661 4.001 4.012v162.8c0 2.483-2.016 4.006-4.053 4.006c-1.27 0-2.549-.5919-3.353-1.912l-75.28-122.3l76.62-45.1C490.6 146.7 491.3 146.5 491.1 146.5z"></path>
                            </svg> Acesso a 2 Slots Macros</li>
                        <li className="mb-1"><svg className="mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM96 392c-13.25 0-24-10.75-24-24S82.75 344 96 344s24 10.75 24 24S109.3 392 96 392zM96 296c-13.25 0-24-10.75-24-24S82.75 248 96 248S120 258.8 120 272S109.3 296 96 296zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM304 384h-128C167.2 384 160 376.8 160 368C160 359.2 167.2 352 176 352h128c8.801 0 16 7.199 16 16C320 376.8 312.8 384 304 384zM304 288h-128C167.2 288 160 280.8 160 272C160 263.2 167.2 256 176 256h128C312.8 256 320 263.2 320 272C320 280.8 312.8 288 304 288z"></path>
                            </svg> Acesso a 1 Slot de Personagem</li>
                        <li className="mb-1"><svg className="mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M240 97.25C232.3 104.8 219.3 131.8 216.6 176h46.88C260.8 131.8 247.8 104.8 240 97.25zM334.4 176c-5.25-31.25-25.62-57.13-53.25-70.38C288.8 124.6 293.8 149 295.3 176H334.4zM334.4 208h-39.13c-1.5 27-6.5 51.38-14.12 70.38C308.8 265.1 329.1 239.3 334.4 208zM263.4 208H216.5C219.3 252.3 232.3 279.3 240 286.8C247.8 279.3 260.8 252.3 263.4 208zM198.9 105.6C171.3 118.9 150.9 144.8 145.6 176h39.13C186.3 149 191.3 124.6 198.9 105.6zM448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-32c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM240 64c70.75 0 128 57.25 128 128s-57.25 128-128 128s-128-57.25-128-128S169.3 64 240 64zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448zM198.9 278.4C191.3 259.4 186.3 235 184.8 208H145.6C150.9 239.3 171.3 265.1 198.9 278.4z"></path>
                            </svg> Somente Sistemas Oficiais</li>
                    </ul>
                    <h3 id="price-1" className="mt-3">Gratuito</h3><a className="d-flex d-md-flex d-lg-flex d-xxl-flex justify-content-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xxl-center align-items-xxl-center mt-3" href="#">Entre Agora</a>
                </div>
            </div>
            <div className="col-xxl-12 box pb-0 mb-5">
                <div className="content">
                    <h3>Aventureiro<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -64 640 640" width="1em" height="1em" fill="currentColor">
                            <path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"></path>
                        </svg></h3>
                    <p>Um por todos e todos por um, com esse plano todos em seu servidor ganham benefícios! </p>
                    <ul className="list-unstyled justify-content-xxl-start mb-1">
                        <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M512 80C512 98.01 497.7 114.6 473.6 128C444.5 144.1 401.2 155.5 351.3 158.9C347.7 157.2 343.9 155.5 340.1 153.9C300.6 137.4 248.2 128 192 128C183.7 128 175.6 128.2 167.5 128.6L166.4 128C142.3 114.6 128 98.01 128 80C128 35.82 213.1 0 320 0C426 0 512 35.82 512 80V80zM160.7 161.1C170.9 160.4 181.3 160 192 160C254.2 160 309.4 172.3 344.5 191.4C369.3 204.9 384 221.7 384 240C384 243.1 383.3 247.9 381.9 251.7C377.3 264.9 364.1 277 346.9 287.3C346.9 287.3 346.9 287.3 346.9 287.3C346.8 287.3 346.6 287.4 346.5 287.5L346.5 287.5C346.2 287.7 345.9 287.8 345.6 288C310.6 307.4 254.8 320 192 320C132.4 320 79.06 308.7 43.84 290.9C41.97 289.9 40.15 288.1 38.39 288C14.28 274.6 0 258 0 240C0 205.2 53.43 175.5 128 164.6C138.5 163 149.4 161.8 160.7 161.1L160.7 161.1zM391.9 186.6C420.2 182.2 446.1 175.2 468.1 166.1C484.4 159.3 499.5 150.9 512 140.6V176C512 195.3 495.5 213.1 468.2 226.9C453.5 234.3 435.8 240.5 415.8 245.3C415.9 243.6 416 241.8 416 240C416 218.1 405.4 200.1 391.9 186.6V186.6zM384 336C384 354 369.7 370.6 345.6 384C343.8 384.1 342 385.9 340.2 386.9C304.9 404.7 251.6 416 192 416C129.2 416 73.42 403.4 38.39 384C14.28 370.6 .0003 354 .0003 336V300.6C12.45 310.9 27.62 319.3 43.93 326.1C83.44 342.6 135.8 352 192 352C248.2 352 300.6 342.6 340.1 326.1C347.9 322.9 355.4 319.2 362.5 315.2C368.6 311.8 374.3 308 379.7 304C381.2 302.9 382.6 301.7 384 300.6L384 336zM416 278.1C434.1 273.1 452.5 268.6 468.1 262.1C484.4 255.3 499.5 246.9 512 236.6V272C512 282.5 507 293 497.1 302.9C480.8 319.2 452.1 332.6 415.8 341.3C415.9 339.6 416 337.8 416 336V278.1zM192 448C248.2 448 300.6 438.6 340.1 422.1C356.4 415.3 371.5 406.9 384 396.6V432C384 476.2 298 512 192 512C85.96 512 .0003 476.2 .0003 432V396.6C12.45 406.9 27.62 415.3 43.93 422.1C83.44 438.6 135.8 448 192 448z"></path>
                            </svg> 4 Milhões de Kc (comprador)</li>
                        <li className="mb-1"><i className="fas fa-key"></i> Desbloqueie funções premium</li>
                        <li className="mb-1"><i className="far fa-address-card"></i> Cargo doador (comprador)</li>
                        <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M20.04 317.3C18 317.3 16 315.8 16 313.3V150.5c0-2.351 1.91-4.012 4.001-4.012c.6882 0 1.396 .18 2.062 .5748l76.62 45.1l-75.28 122.3C22.59 316.8 21.31 317.3 20.04 317.3zM231.4 405.2l-208.2-22.06c-4.27-.4821-7.123-4.117-7.123-7.995c0-1.401 .3725-2.834 1.185-4.161L122.7 215.1L231.4 405.2zM31.1 420.1c0-2.039 1.508-4.068 3.93-4.068c.1654 0 .3351 .0095 .5089 .0291l203.6 22.31v65.66C239.1 508.6 236.2 512 232 512c-1.113 0-2.255-.2387-3.363-.7565L34.25 423.6C32.69 422.8 31.1 421.4 31.1 420.1zM33.94 117.1c-1.289-.7641-1.938-2.088-1.938-3.417c0-1.281 .6019-2.567 1.813-3.364l150.8-98.59C185.1 10.98 187.3 10.64 188.6 10.64c4.32 0 8.003 3.721 8.003 8.022c0 1.379-.3788 2.818-1.237 4.214L115.5 165.8L33.94 117.1zM146.8 175.1l95.59-168.4C245.5 2.53 250.7 0 255.1 0s10.5 2.53 13.62 7.624l95.59 168.4H146.8zM356.4 207.1l-100.4 175.7L155.6 207.1H356.4zM476.1 415.1c2.422 0 3.93 2.029 3.93 4.068c0 1.378-.6893 2.761-2.252 3.524l-194.4 87.66c-1.103 .5092-2.241 .7443-3.35 .7443c-4.2 0-7.994-3.371-7.994-7.994v-65.69l203.6-22.28C475.7 416 475.9 415.1 476.1 415.1zM494.8 370.9C495.6 372.3 496 373.7 496 375.1c0 3.872-2.841 7.499-7.128 7.98l-208.2 22.06l108.6-190.1L494.8 370.9zM316.6 22.87c-.8581-1.395-1.237-2.834-1.237-4.214c0-4.301 3.683-8.022 8.003-8.022c1.308 0 2.675 .3411 4.015 1.11l150.8 98.59c1.211 .7973 1.813 2.076 1.813 3.353c0 1.325-.6488 2.649-1.938 3.429L396.5 165.8L316.6 22.87zM491.1 146.5c2.091 0 4.001 1.661 4.001 4.012v162.8c0 2.483-2.016 4.006-4.053 4.006c-1.27 0-2.549-.5919-3.353-1.912l-75.28-122.3l76.62-45.1C490.6 146.7 491.3 146.5 491.1 146.5z"></path>
                            </svg> Desbloqueei +5 slots de macro</li>
                        <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM96 392c-13.25 0-24-10.75-24-24S82.75 344 96 344s24 10.75 24 24S109.3 392 96 392zM96 296c-13.25 0-24-10.75-24-24S82.75 248 96 248S120 258.8 120 272S109.3 296 96 296zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM304 384h-128C167.2 384 160 376.8 160 368C160 359.2 167.2 352 176 352h128c8.801 0 16 7.199 16 16C320 376.8 312.8 384 304 384zM304 288h-128C167.2 288 160 280.8 160 272C160 263.2 167.2 256 176 256h128C312.8 256 320 263.2 320 272C320 280.8 312.8 288 304 288z"></path>
                            </svg> +2 slots de Personagens (em breve)</li>
                        <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z"></path>
                            </svg> Prioridade em pedidos &amp; suporte</li>
                        <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M352 96V99.56C352 115.3 339.3 128 323.6 128H188.4C172.7 128 159.1 115.3 159.1 99.56V96C159.1 42.98 202.1 0 255.1 0C309 0 352 42.98 352 96zM41.37 105.4C53.87 92.88 74.13 92.88 86.63 105.4L150.6 169.4C151.3 170 151.9 170.7 152.5 171.4C166.8 164.1 182.9 160 199.1 160H312C329.1 160 345.2 164.1 359.5 171.4C360.1 170.7 360.7 170 361.4 169.4L425.4 105.4C437.9 92.88 458.1 92.88 470.6 105.4C483.1 117.9 483.1 138.1 470.6 150.6L406.6 214.6C405.1 215.3 405.3 215.9 404.6 216.5C410.7 228.5 414.6 241.9 415.7 256H480C497.7 256 512 270.3 512 288C512 305.7 497.7 320 480 320H416C416 344.6 410.5 367.8 400.6 388.6C402.7 389.9 404.8 391.5 406.6 393.4L470.6 457.4C483.1 469.9 483.1 490.1 470.6 502.6C458.1 515.1 437.9 515.1 425.4 502.6L362.3 439.6C337.8 461.4 306.5 475.8 272 479.2V240C272 231.2 264.8 224 255.1 224C247.2 224 239.1 231.2 239.1 240V479.2C205.5 475.8 174.2 461.4 149.7 439.6L86.63 502.6C74.13 515.1 53.87 515.1 41.37 502.6C28.88 490.1 28.88 469.9 41.37 457.4L105.4 393.4C107.2 391.5 109.3 389.9 111.4 388.6C101.5 367.8 96 344.6 96 320H32C14.33 320 0 305.7 0 288C0 270.3 14.33 256 32 256H96.3C97.38 241.9 101.3 228.5 107.4 216.5C106.7 215.9 106 215.3 105.4 214.6L41.37 150.6C28.88 138.1 28.88 117.9 41.37 105.4H41.37z"></path>
                            </svg> Acesso a funções beta!</li>
                        <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M512 255.1C512 256.9 511.1 257.8 511.1 258.7C511.6 295.2 478.4 319.1 441.9 319.1H344C317.5 319.1 296 341.5 296 368C296 371.4 296.4 374.7 297 377.9C299.2 388.1 303.5 397.1 307.9 407.8C313.9 421.6 320 435.3 320 449.8C320 481.7 298.4 510.5 266.6 511.8C263.1 511.9 259.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256V255.1zM96 255.1C78.33 255.1 64 270.3 64 287.1C64 305.7 78.33 319.1 96 319.1C113.7 319.1 128 305.7 128 287.1C128 270.3 113.7 255.1 96 255.1zM128 191.1C145.7 191.1 160 177.7 160 159.1C160 142.3 145.7 127.1 128 127.1C110.3 127.1 96 142.3 96 159.1C96 177.7 110.3 191.1 128 191.1zM256 63.1C238.3 63.1 224 78.33 224 95.1C224 113.7 238.3 127.1 256 127.1C273.7 127.1 288 113.7 288 95.1C288 78.33 273.7 63.1 256 63.1zM384 191.1C401.7 191.1 416 177.7 416 159.1C416 142.3 401.7 127.1 384 127.1C366.3 127.1 352 142.3 352 159.1C352 177.7 366.3 191.1 384 191.1z"></path>
                            </svg> Crie seu próprio sistema (em breve)</li>
                    </ul>
                    <h3 id="price-3" className="mt-3">R$7/mês</h3><a className="d-flex d-md-flex d-lg-flex d-xxl-flex justify-content-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xxl-center align-items-xxl-center mt-3" href="#">Apoiar Projeto</a>
                </div>
            </div>
            <div className="col-xxl-12 box pb-0 mb-5">
    <div className="content">
        <h3>Herói do Polvo<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                <path d="M455.6,349.2c-45.891-39.09-36.67-77.877-16.095-128.11C475.16,134.04,415.967,34.14,329.93,8.3,237.04-19.6,134.252,24.341,99.677,117.147a180.862,180.862,0,0,0-10.988,73.544c1.733,29.543,14.717,52.97,24.09,80.3,17.2,50.161-28.1,92.743-66.662,117.582-46.806,30.2-36.319,39.857-8.428,41.858,23.378,1.68,44.478-4.548,65.265-15.045,9.2-4.647,40.687-18.931,45.13-28.588C135.9,413.388,111.122,459.5,126.621,488.9c19.1,36.229,67.112-31.77,76.709-45.812,8.591-12.572,42.963-81.279,63.627-46.926,18.865,31.361,8.6,76.391,35.738,104.622,32.854,34.2,51.155-18.312,51.412-44.221.163-16.411-6.1-95.852,29.9-59.944C405.428,418,436.912,467.8,472.568,463.642c38.736-4.516-22.123-67.967-28.262-78.695,5.393,4.279,53.665,34.128,53.818,9.52C498.234,375.678,468.039,359.8,455.6,349.2Z"></path>
            </svg></h3>
        <p>Para os verdadeiros fãs e amantes de RPG de mesa, aqueles que desejam aproveitar ao máximo a ferramenta.</p>
        <ul className="list-unstyled justify-content-xxl-start mb-1">
            <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                    <path d="M512 80C512 98.01 497.7 114.6 473.6 128C444.5 144.1 401.2 155.5 351.3 158.9C347.7 157.2 343.9 155.5 340.1 153.9C300.6 137.4 248.2 128 192 128C183.7 128 175.6 128.2 167.5 128.6L166.4 128C142.3 114.6 128 98.01 128 80C128 35.82 213.1 0 320 0C426 0 512 35.82 512 80V80zM160.7 161.1C170.9 160.4 181.3 160 192 160C254.2 160 309.4 172.3 344.5 191.4C369.3 204.9 384 221.7 384 240C384 243.1 383.3 247.9 381.9 251.7C377.3 264.9 364.1 277 346.9 287.3C346.9 287.3 346.9 287.3 346.9 287.3C346.8 287.3 346.6 287.4 346.5 287.5L346.5 287.5C346.2 287.7 345.9 287.8 345.6 288C310.6 307.4 254.8 320 192 320C132.4 320 79.06 308.7 43.84 290.9C41.97 289.9 40.15 288.1 38.39 288C14.28 274.6 0 258 0 240C0 205.2 53.43 175.5 128 164.6C138.5 163 149.4 161.8 160.7 161.1L160.7 161.1zM391.9 186.6C420.2 182.2 446.1 175.2 468.1 166.1C484.4 159.3 499.5 150.9 512 140.6V176C512 195.3 495.5 213.1 468.2 226.9C453.5 234.3 435.8 240.5 415.8 245.3C415.9 243.6 416 241.8 416 240C416 218.1 405.4 200.1 391.9 186.6V186.6zM384 336C384 354 369.7 370.6 345.6 384C343.8 384.1 342 385.9 340.2 386.9C304.9 404.7 251.6 416 192 416C129.2 416 73.42 403.4 38.39 384C14.28 370.6 .0003 354 .0003 336V300.6C12.45 310.9 27.62 319.3 43.93 326.1C83.44 342.6 135.8 352 192 352C248.2 352 300.6 342.6 340.1 326.1C347.9 322.9 355.4 319.2 362.5 315.2C368.6 311.8 374.3 308 379.7 304C381.2 302.9 382.6 301.7 384 300.6L384 336zM416 278.1C434.1 273.1 452.5 268.6 468.1 262.1C484.4 255.3 499.5 246.9 512 236.6V272C512 282.5 507 293 497.1 302.9C480.8 319.2 452.1 332.6 415.8 341.3C415.9 339.6 416 337.8 416 336V278.1zM192 448C248.2 448 300.6 438.6 340.1 422.1C356.4 415.3 371.5 406.9 384 396.6V432C384 476.2 298 512 192 512C85.96 512 .0003 476.2 .0003 432V396.6C12.45 406.9 27.62 415.3 43.93 422.1C83.44 438.6 135.8 448 192 448z"></path>
                </svg> 10 Milhões de Kc (comprador)</li>
            <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                    <path d="M256 417.1c-16.38 0-32.88-4.1-46.88-15.12L0 250.9v213.1C0 490.5 21.5 512 48 512h416c26.5 0 48-21.5 48-47.1V250.9l-209.1 151.1C288.9 412 272.4 417.1 256 417.1zM493.6 163C484.8 156 476.4 149.5 464 140.1v-44.12c0-26.5-21.5-48-48-48l-77.5 .0016c-3.125-2.25-5.875-4.25-9.125-6.5C312.6 29.13 279.3-.3732 256 .0018C232.8-.3732 199.4 29.13 182.6 41.5c-3.25 2.25-6 4.25-9.125 6.5L96 48c-26.5 0-48 21.5-48 48v44.12C35.63 149.5 27.25 156 18.38 163C6.75 172 0 186 0 200.8v10.62l96 69.37V96h320v184.7l96-69.37V200.8C512 186 505.3 172 493.6 163zM176 255.1h160c8.836 0 16-7.164 16-15.1c0-8.838-7.164-16-16-16h-160c-8.836 0-16 7.162-16 16C160 248.8 167.2 255.1 176 255.1zM176 191.1h160c8.836 0 16-7.164 16-16c0-8.838-7.164-15.1-16-15.1h-160c-8.836 0-16 7.162-16 15.1C160 184.8 167.2 191.1 176 191.1z"></path>
                </svg> Voto em decisões importantes</li>
                <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
        <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
    </svg> Cargo de Doador Supremo</li>
            <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                    <path d="M74.01 208h-10c-8.875 0-16 7.125-16 16v16c0 8.875 7.122 16 15.1 16h16c-.25 43.13-5.5 86.13-16 128h128c-10.5-41.88-15.75-84.88-16-128h15.1c8.875 0 16-7.125 16-16L208 224c0-8.875-7.122-16-15.1-16h-10l33.88-90.38C216.6 115.8 216.9 113.1 216.9 112.1C216.9 103.1 209.5 96 200.9 96H144V64h16c8.844 0 16-7.156 16-16S168.9 32 160 32h-16l.0033-16c0-8.844-7.16-16-16-16s-16 7.156-16 16V32H96.01c-8.844 0-16 7.156-16 16S87.16 64 96.01 64h16v32H55.13C46.63 96 39.07 102.8 39.07 111.9c0 1.93 .3516 3.865 1.061 5.711L74.01 208zM339.9 301.8L336.6 384h126.8l-3.25-82.25l24.5-20.75C491.9 274.9 496 266 496 256.5V198C496 194.6 493.4 192 489.1 192h-26.37c-3.375 0-6 2.625-6 6V224h-24.75V198C432.9 194.6 430.3 192 426.9 192h-53.75c-3.375 0-6 2.625-6 6V224h-24.75V198C342.4 194.6 339.8 192 336.4 192h-26.38C306.6 192 304 194.6 304 198v58.62c0 9.375 4.125 18.25 11.38 24.38L339.9 301.8zM384 304C384 295.1 391.1 288 400 288S416 295.1 416 304v32h-32V304zM247.1 459.6L224 448v-16C224 423.1 216.9 416 208 416h-160C39.13 416 32 423.1 32 432V448l-23.12 11.62C3.375 462.3 0 467.9 0 473.9V496C0 504.9 7.125 512 16 512h224c8.875 0 16-7.125 16-16v-22.12C256 467.9 252.6 462.3 247.1 459.6zM503.1 459.6L480 448v-16c0-8.875-7.125-16-16-16h-128c-8.875 0-16 7.125-16 16V448l-23.12 11.62C291.4 462.3 288 467.9 288 473.9V496c0 8.875 7.125 16 16 16h192c8.875 0 16-7.125 16-16v-22.12C512 467.9 508.6 462.3 503.1 459.6z"></path>
                </svg> Materiais &amp; Playtests exclusivos</li>
            <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                    <path d="M272 192V320H304C311 320 317.7 321.5 323.7 324.2L443.8 192H415.5C415.8 186.7 416 181.4 416 176C416 112.1 393.8 54.84 358.9 16.69C450 49.27 493.4 122.6 507.8 173.6C510.5 183.1 502.1 192 493.1 192H487.1L346.8 346.3C350.1 352.8 352 360.2 352 368V464C352 490.5 330.5 512 304 512H207.1C181.5 512 159.1 490.5 159.1 464V368C159.1 360.2 161.9 352.8 165.2 346.3L24.92 192H18.89C9 192 1.483 183.1 4.181 173.6C18.64 122.6 61.97 49.27 153.1 16.69C118.2 54.84 96 112.1 96 176C96 181.4 96.16 186.7 96.47 192H68.17L188.3 324.2C194.3 321.5 200.1 320 207.1 320H239.1V192H128.5C128.2 186.7 127.1 181.4 127.1 176C127.1 125 143.9 80.01 168.2 48.43C192.5 16.89 223.8 0 255.1 0C288.2 0 319.5 16.89 343.8 48.43C368.1 80.01 384 125 384 176C384 181.4 383.8 186.7 383.5 192H272z"></path>
                </svg> Eventos &amp; Brindes exclusivos</li>
                <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
        <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"></path>
    </svg> Acesso ao <strong>OnlyFans</strong> da Fortuna</li>
            <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
        <path d="M282.3 343.7L248.1 376.1C244.5 381.5 238.4 384 232 384H192V424C192 437.3 181.3 448 168 448H128V488C128 501.3 117.3 512 104 512H24C10.75 512 0 501.3 0 488V408C0 401.6 2.529 395.5 7.029 391L168.3 229.7C162.9 212.8 160 194.7 160 176C160 78.8 238.8 0 336 0C433.2 0 512 78.8 512 176C512 273.2 433.2 352 336 352C317.3 352 299.2 349.1 282.3 343.7zM376 176C398.1 176 416 158.1 416 136C416 113.9 398.1 96 376 96C353.9 96 336 113.9 336 136C336 158.1 353.9 176 376 176z"></path>
    </svg> Todos os benefícios dos demais premiums em até 4 servidores.</li>
            <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                    <path d="M411.4 175.5C417.4 185.4 417.5 197.7 411.8 207.8C406.2 217.8 395.5 223.1 384 223.1H192C180.5 223.1 169.8 217.8 164.2 207.8C158.5 197.7 158.6 185.4 164.6 175.5L260.6 15.54C266.3 5.897 276.8 0 288 0C299.2 0 309.7 5.898 315.4 15.54L411.4 175.5zM288 312C288 289.9 305.9 272 328 272H472C494.1 272 512 289.9 512 312V456C512 478.1 494.1 496 472 496H328C305.9 496 288 478.1 288 456V312zM0 384C0 313.3 57.31 256 128 256C198.7 256 256 313.3 256 384C256 454.7 198.7 512 128 512C57.31 512 0 454.7 0 384z"></path>
                </svg> Licença poética para cobrar os desenvolvedores</li>
        </ul>
        <h3 id="price-2" className="mt-3">R$15/mês</h3><a className="d-flex d-md-flex d-lg-flex d-xxl-flex justify-content-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xxl-center align-items-xxl-center mt-3" href="#">Apoiar Projeto</a>
    </div>
</div>
        </div>
    </div>
</section>


    </PageLayout>
  );
}
