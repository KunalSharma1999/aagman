import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import React, { useState } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import StoreCover from "../components/StoreCover";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import { productCards } from "../Data/Data";
import Footer from "../components/Footer";
import styles from "../styles/Menu.module.css"
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SideDrawer from "../components/SideDrawer";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "rgb(148, 255, 255)",
        borderRadius: "50px",
        position: "fixed",
        bottom: "0px",
        left: "0px",
        right: "0px",
        marginBottom: "10px",
        width: "100vw",
        display: "block",
        textAlign: "center",
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    button: {
        margin: "10px",
        borderRadius: "50px",
    }
}));

const menu = () => {
    const lightTheme = createTheme({
        palette: {
            type: "light",
        },
    });

    const classes = useStyles();

    const [value, setValue] = useState(0);

    return (
        <div className={styles.menu}>
            <ThemeProvider theme={lightTheme}>
                <Container>
                    <Header />
                    <StoreCover />
                    <br />
                    <Grid container spacing={4}>
                        {productCards.map((product) => (
                            <ProductCard key={product.title} product={product} />
                        ))}
                    </Grid>
                    <div className={styles.navigateButtons}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    endIcon={<Icon>send</Icon>}
                                    className={classes.button}
                                >
                                    Proceed to checkout
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        showLabels
                        className={classes.root}
                    >
                        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                        <BottomNavigationAction label="Menu" icon={<MenuIcon />} />
                        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
                        <BottomNavigationAction label="Back" icon={<ArrowBackIosIcon />} />
                    </BottomNavigation>
                </Container>
                <Footer />
            </ThemeProvider>
        </div>
    );
}


export default menu
