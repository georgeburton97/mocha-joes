import React from 'react'
import Layout from '../../components/Layout'
import { coffee } from '../../styles/coffees.module.css'

export default function index() {
    return (

        <Layout>
            <div className={coffee}>
                <h2>Our Coffees</h2>
                <h3>Here is our range of coffee's</h3>
            </div>
        </Layout>

    )
}
