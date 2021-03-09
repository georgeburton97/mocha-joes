import {  Link } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import { header, btn, bannerImg, leftText } from '../styles/home.module.css'

export default function Home() {



  return (

    <Layout>
      <section className={header}>
        <div className={leftText}>
          <h2>Welcome...</h2>
          <h3>Come over and have a cuppa</h3>
          <p>We're an artisan Coffee shop from the heart of Staffordshire</p>
          <Link className={btn} to="/coffees">Our Menu</Link>
        </div>

        <img src="/coffee.svg" alt="site banner" className={bannerImg} />
        

      </section>
    </Layout>

  )
}

