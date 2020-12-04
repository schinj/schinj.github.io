import React, {Component} from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import PostOverview from "../components/postoverview"

class Home extends Component {
	render() {
		return (
			<Layout>
                <PostOverview 
                title="Hello, I am a front end developer."
                description="I have worked extensively on iOS and Android applications."
                />

                <PostOverview 
                title="Exploring React"
                description="I am creating this website using open-source and free tools like React, Github Pages, Gatsby etc."
                link="exploring_react"
                />

                <div style={{width: 600, display:'flex'}}>
                    <div>
                        <div style={{width: 600}}>
                            <div style={{width: 300, height: 300}}>&nbsp;</div>
                            <div style={{width: 300, height: 300}}>&nbsp;</div>
                        </div>
                        <div style={{width: 600}}>
                            <div style={{width: 300, height: 300}}>&nbsp;</div>
                            <div style={{width: 300, height: 300}}>&nbsp;</div>
                        </div>
                    </div>
                </div>
			</Layout>
		)
	}
}

export default Home