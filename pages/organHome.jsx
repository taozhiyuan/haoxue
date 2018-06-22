import React, { Component } from 'react'
import Layout from '../components/Layout.jsx'
import Banner from '../components/orgAdmission/Banner.jsx'
import Feature from '../components/orgAdmission/Feature.jsx'
import Support from '../components/orgAdmission/Support.jsx'

export default class organHome extends Component {
    render(){
        return(
            <Layout>
                <Banner />
                <Feature />
                <Support />
            </Layout>
            
        )
    }
}