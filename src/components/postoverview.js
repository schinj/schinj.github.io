import { Link } from 'gatsby'
import React, { Component } from 'react'

class PostOverview extends Component {
    render() {
        const {title, description, link} = this.props

        return (
            <a href={link}>
             <div style={{borderWidth:1, 
                borderColor: "black", 
                borderStyle: "solid", 
                padding: 5, 
                margin: 5, 
                borderRadius: 5 }}>
                <h3>
                    {title}
                </h3>
                <body>
                    {description}
                </body>
            </div>
            </a>
        )
    }
}

export default PostOverview