import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import {BsLinkedin, BsEnvelope, BsGithub, BsWhatsapp, BsFillTelephoneFill} from 'react-icons/bs'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/profile-pic.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p className={styles.codeInput}>
            Welcome to my portfolio|
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Made with{' '}
              <Image
                src="/next.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/profile-pic.png"
            alt="Profile Logo"
            width={300}
            height={300}
            priority
          />
          

          <p className={styles.codeInput}>
            <a href='http://linkedin.com/in/fasosl' target="_blank"><BsLinkedin /></a>
            {' '}
            <a href='http://github.com/fasosl2' target="_blank"><BsGithub /></a>
            {' '}
            <a href='mailto:fasosl2@gmail.com'><BsEnvelope /></a>
            {' '}
            <a href='https://api.whatsapp.com/send?phone=5581997322167'><BsWhatsapp /></a>
            {' '}
            <a href='tel:+5581997322167'><BsFillTelephoneFill /></a>
            {' '}
          </p>
          <p>
          </p>
        </div>

          <code className={styles.code}>Check my current projects:</code>
          <br/>
        <div className={styles.grid }>
          {/* <a
            href="https://dio-react.vercel.app/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Dio React <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Created during Orangetech+ Bootcamp, by <strong>Inter</strong> and <strong>Dio</strong>.
            </p>
          </a> */}

          <a
            href="https://descom-pin.vercel.app/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              DescomPin <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            Created during &quot;Instituto Nu&quot; Bootcamp, from <strong>Nubank</strong> and <strong>Descomplica</strong>.
            </p>
          </a>

          <a
            href="https://do-acao-three.vercel.app/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Do-ação <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Project created for a a course in the college, to help people to donate Books.
            </p>
          </a>

          <a
            href="https://virtual-shop-blue.vercel.app/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              VirtualShop <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Created to simulate the mechanics of a simple virtual store.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
