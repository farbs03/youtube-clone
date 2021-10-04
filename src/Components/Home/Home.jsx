import React, {useState} from 'react'
import Video from '../Video/Video'

import Thumbnail from "../../Images/thumbnail.webp"
import Profile from "../../Images/user-profile.jpg"

import {Grid, Chip, Stack} from "@mui/material"

const Home = () => {

    const exampleUser = {
        Profile: Profile,
        Name: "Drew Gooden",
        Link: "#",
        Verified: true
    }

    const ExampleVideo = {
        Thumbnail: Thumbnail,
        Title: "Was LOST even a good show?",
        Creator: exampleUser,
        Views: "1.5M",
        TimeElapsed: "1 day ago",
        Duration: 1289,
        Link: "#"
    }

    const categories = ['All', 'Podcasts', 'Basketball', 'History', 'Comedy', 'Politics', 'Movies']
    const [selectedCategory, setSelectedCategory] = useState(0)

    return (
        <div>
            <div 
                style={{
                    background: "white", 
                    padding: "10px", 
                    borderTop: "1px solid rgba(0, 0, 0, 0.1)", 
                    borderBottom: "1px solid rgba(0, 0, 0, 0.1)", 
                    margin: "0px -24px",
                    marginBottom: "18px"
                }}
            >
                {categories.map((category, index) => (
                    <Chip 
                        label={category} 
                        onClick={() => setSelectedCategory(index)} 
                        variant={selectedCategory === index ? "filled" : "outlined"}
                        style={{margin: "0px 5px", fontWeight: "bold", padding: "6px 2px"}}
                    />
                ))}
            </div>
            <Grid container>
                {[0, 1, 2].map(() => (
                    <Grid item>
                        <Video Data={ExampleVideo} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Home
