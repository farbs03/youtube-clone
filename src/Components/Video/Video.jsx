import React from 'react'
import {Paper, Link, Typography, Grid} from "@mui/material"
import { NavLink } from 'react-router-dom'


const Video = ({Data}) => {

    const formatTime = (seconds) => {
        const mins = Math.trunc(seconds / 60)
        const remaining = seconds - mins * 60
        return `${mins}:${remaining}`
    }

    return (
        <div style={{maxWidth: "350px", margin: "10px"}}>
            <Link underline="none" to={Data.Link} style={{color: "inherit"}} component={NavLink}>
                <div style={{marginBottom: "10px", height: "160px"}}>
                    <img src={Data.Thumbnail} style={{width: "100%", height: "100%"}}/>
                    <p style={{background: "rgba(0, 0, 0, 0.8)", color: "white", marginTop: "-28px", width: "40px", marginLeft: "auto", fontSize: "14px"}}>{formatTime(Data.Duration)}</p>
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
                            <Typography variant="body1" style={{fontWeight: "bold", opacity: "0.85", fontSize: "14px"}}>
                                {Data.Title}
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
