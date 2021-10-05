import React, {useState} from 'react'
import { 
    AppBar, 
    IconButton, 
    Grid, 
    InputBase, 
    Toolbar, 
    Link, 
    CssBaseline, 
    Box, 
    List, 
    ListItem,
    ListItemIcon,
    ListItemText, 
    Divider,
    Drawer
} from '@mui/material'

import {NavLink} from "react-router-dom"

import YoutubeLogo from "../../Images/YouTube-Logo.png"

import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import MicIcon from "@mui/icons-material/Mic"
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import {
    HomeOutlined,
    Home,

    SubscriptionsOutlined,
    Subscriptions,

    ExploreOutlined,
    Explore,

    VideoLibraryOutlined,
    VideoLibrary,

    HistoryOutlined,
    History,

    OndemandVideo,

    WatchLaterOutlined,
    WatchLater,

    ThumbUpOutlined,
    ThumbUp
} from "@mui/icons-material"

const drawerWidth = 250

const Navbar = (props) => {

    const sectionOne = [
        {
            Title: "Home",
            Link: "#",
            Logo: <HomeOutlined />,
            SelectedLogo: <Home />,
            Index: 0
        },
        {
            Title: "Explore",
            Link: "#",
            Logo: <ExploreOutlined />,
            SelectedLogo: <Explore />,
            Index: 1
        },
        {
            Title: "Subscriptions",
            Link: "#",
            Logo: <SubscriptionsOutlined />,
            SelectedLogo: <Subscriptions />,
            Index: 2
        },
    ]

    const sectionTwo = [
        {
            Title: "Library",
            Link: "#",
            Logo: <VideoLibraryOutlined />,
            SelectedLogo: <VideoLibrary />,
            Index: 3
        },
        {
            Title: "History",
            Link: "#",
            Logo: <HistoryOutlined />,
            SelectedLogo: <History />,
            Index: 4
        },
        {
            Title: "Your Videos",
            Link: "#",
            Logo: <OndemandVideo />,
            SelectedLogo: <OndemandVideo />,
            Index: 5
        },
        {
            Title: "Watch Later",
            Link: "#",
            Logo: <WatchLaterOutlined />,
            SelectedLogo: <WatchLater />,
            Index: 6
        },
        {
            Title: "Liked Videos",
            Link: "#",
            Logo: <ThumbUpOutlined />,
            SelectedLogo: <ThumbUp />,
            Index: 7
        },
    ]

    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar color="inherit" position="fixed" elevation={0} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, padding: '10px' }}>
                <Toolbar>
                    <Grid noWrap container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <IconButton>
                                        <MenuIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <Link underline="none" to="/" component={NavLink}>
                                        <img src={YoutubeLogo} style={{width: "120px", height: "56px", marginTop: "5px"}} />
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                        <Grid item>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <InputBase 
                                        style={{width: "500px", background: "rgba(0, 0, 0, 0.1)", padding: '5px 10px'}} 
                                        endAdornment={<IconButton><SearchIcon /></IconButton>} placeholder="Search" 
                                    />
                                </Grid>
                                <Grid item>
                                    <IconButton>
                                        <MicIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Grid container spacing={3}>
                                <Grid item>
                                    <IconButton>
                                        <VideoCallIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton>
                                        <AppsIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton>
                                        <NotificationsIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton>
                                        <AccountCircleIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', borderRight: "0px" },
                    paddingTop: "10px"
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <div style={{height: "20px"}}></div>
                    <List component="nav">
                        {sectionOne.map((item) => (
                            <Link underline="none" to={item.Link} style={{color: "inherit"}} component={NavLink}>
                                <ListItem 
                                    button 
                                    key={item.Title} 
                                    selected={item.Index === selectedIndex}
                                    style={{background: selectedIndex === item.Index ? "rgba(0, 0, 0, 0.1)" : "none"}}
                                    onClick={(event) => handleListItemClick(event, item.Index)}
                                >
                                    <ListItemIcon style={{color: "inherit"}}>
                                        {selectedIndex === item.Index ? item.SelectedLogo : item.Logo}
                                    </ListItemIcon>
                                    <ListItemText>
                                        {item.Title}
                                    </ListItemText>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                    <Divider />
                    <List component="nav">
                        {sectionTwo.map((item) => (
                            <Link underline="none" to={item.Link} style={{color: "inherit"}} component={NavLink}>
                                <ListItem 
                                    button 
                                    key={item.Title} 
                                    selected={item.Index === selectedIndex}
                                    style={{background: selectedIndex === item.Index ? "rgba(0, 0, 0, 0.1)" : "none"}}
                                    onClick={(event) => handleListItemClick(event, item.Index)}
                                >
                                    <ListItemIcon style={{color: "inherit"}}>
                                        {selectedIndex === item.Index ? item.SelectedLogo : item.Logo}
                                    </ListItemIcon>
                                    <ListItemText>
                                        {item.Title}
                                    </ListItemText>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, background: "rgba(0, 0, 0, 0.02)" }}>
                <Toolbar />
                {props.children}
            </Box>
        </Box>
    )
}

export default Navbar
