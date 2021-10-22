import React from 'react'
import {Paper, Link, Typography, Grid} from "@mui/material"
import { NavLink } from 'react-router-dom'


const Video = ({Data}) => {

    const formatTime = (seconds) => {
        const mins = Math.trunc(seconds / 60)
        const remaining = seconds - mins * 60
        return `${mins}:${remaining}`
    }

    const formatTitle = (title) => {
        var newString = title
        const len = newString.length
        if(len >= 100) {
            newString = `${newString.slice(0, 50)}"..."`
        }
        console.log(len)
        return newString
    }
    return (
        <div style={{maxWidth: "380px", margin: "10px"}}>
            <Link underline="none" to={Data.Link} style={{color: "inherit"}} component={NavLink}>
                <div style={{marginBottom: "10px", height: "180px"}}>
                    <img alt="thumbnail" src={Data.Thumbnail} style={{width: "100%", height: "100%", position: "relative"}}/>
                    <div style={{width: "40px", marginLeft: "auto"}}>
                        <div 
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.7)", 
                                color: "white", 
                                width: "40px", 
                                fontSize: "14px",
                                marginTop: "-28px",
                                position: "absolute",
                                zIndex: "1"
                            }}
                        >
                            {formatTime(Data.Duration)}
                        </div>
                    </div>
                </div>
            </Link>
            <div>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                        <Link underline="none" to={Data.Creator.Link} component={NavLink}>
                            <div style={{width: "36px", height: "36px", borderRadius: "50%"}}>
                                <img src={Data.Creator.Profile} style={{width: "100%", height: "100%", borderRadius: "50%"}} />
                            </div>
                        </Link>
                    </Grid>
                    <Grid item style={{width: "210px"}}>
                        <Link underline="none" to={Data.Link} component={NavLink} style={{color: "inherit"}}>
                            <Typography variant="body1" style={{fontWeight: "bold", opacity: "0.95", fontSize: "14px"}}>
                                {formatTitle(Data.Title)}
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
                <div style={{paddingLeft: "44px", opacity: "0.75"}}>
                    <Link underline="none" to={Data.Creator.Link} component={NavLink} style={{color: "inherit", display: "block"}}>
                        <Typography variant="caption">{Data.Creator.Name}</Typography>
                    </Link>
                    <Typography variant="caption">{Data.Views} Views | {Data.TimeElapsed}</Typography>
                </div>
            </div>
        </div>
    )
}

export default Video
