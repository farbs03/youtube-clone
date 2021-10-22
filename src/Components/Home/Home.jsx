import React, {useState} from 'react'
import Video from '../Video/Video'

import DrewGoodenThumbnail from "../../Images/drew-gooden-thumbnail.webp"
import DrewGoodenProfile from "../../Images/drew-gooden-profile.jpg"

import DannyGonzalezThumbnail from "../../Images/danny-gonzalez-thumbnail.webp"
import DannyGonzalezProfile from "../../Images/danny-gonzalez-profile.jpg"

import SecondThoughtThumbnail from "../../Images/second-thought-thumbnail.webp"
import SecondThoughtProfile from "../../Images/second-thought-profile.jpg"

import HasanAbiThumbnail from "../../Images/hasanabi-thumbnail.webp"
import HasanAbiProfile from "../../Images/hasanabi-profile.jpg"

import {Grid, Chip, Stack} from "@mui/material"

const DrewGooden = {
    Profile: DrewGoodenProfile,
    Name: "Drew Gooden",
    Link: "#",
    Verified: true
}

const DrewGoodenVideo = {
    Thumbnail: DrewGoodenThumbnail,
    Title: "Was LOST even a good show?",
    Creator: DrewGooden,
    Views: "1.5M",
    TimeElapsed: "1 day ago",
    Duration: 1289,
    Link: "#"
}

const DannyGonzalez = {
    Profile: DannyGonzalezProfile,
    Name: "Danny Gonzalez",
    Link: "#",
    Verified: true
}

const DannyGonzalezVideo = {
    Thumbnail: DannyGonzalezThumbnail,
    Title: "Alpha And Sigma Males Are At War And They're Both ...",
    Creator: DannyGonzalez,
    Views: "2.1M",
    TimeElapsed: "4 days ago",
    Duration: 1117,
    Link: "#"
}

const SecondThought = {
    Profile: SecondThoughtProfile,
    Name: "Second Thought",
    Link: "#",
    Verified: true
}

const SecondThoughtVideo = {
    Thumbnail: SecondThoughtThumbnail,
    Title: "Why \"Terrorism\" is a dangerous word",
    Creator: SecondThought,
    Views: "131K",
    TimeElapsed: "3 day ago",
    Duration: 1091,
    Link: "#"
}

const HasanAbi = {
    Profile: HasanAbiProfile,
    Name: "Hasanabi",
    Link: "#",
    Verified: true
}

const HasanAbiVideo = {
    Thumbnail: HasanAbiThumbnail,
    Title: "Joe Rogan DOUBLES DOWN on Ivermectin Usage",
    Creator: HasanAbi,
    Views: "265K",
    TimeElapsed: "3 weeks ago",
    Duration: 1210,
    Link: "#"
}


const videos = [DrewGoodenVideo, DannyGonzalezVideo, SecondThoughtVideo, HasanAbiVideo]

const Home = () => {

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
            <Grid container justifyContent="center">
                {videos.map((video) => (
                    <Grid item>
                        <Video Data={video} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Home
