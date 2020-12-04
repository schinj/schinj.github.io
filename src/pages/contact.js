import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function Contact() {
    return (
        <Layout>
            <h3>Want to catch up?</h3>
            <ul style={{listStyle: `none`}}>
                <li><Link>LinkedIn</Link></li>
                <li><Link>Twitter</Link></li>
            </ul>
        </Layout>
    )
}