import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import {
    Badge,
    CssBaseline,
    Fab,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import styles from "../styles/components/Navbar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAppContext } from "../context/AppContext";
import ModalLogout from "./ModalLogout";
import ScrollTop from "./ScrollTop";

const Navbar = () => {
    // console.log("props Navbar", props);
    const router = useRouter();
    const { state } = useAppContext();
    const user = state.user;

    const pages = [
        {
            name: "Trang chủ",
            route: "/",
        },
        {
            name: "Sản phẩm",
            route: "/products",
        },
        {
            name: "Giới thiệu",
            route: "/about",
        },
    ];
    const settings = ["Cá nhân", "Cài đặt", "Đăng xuất"];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [openModalLogout, setOpenModalLogout] = useState(false);
    const handleOpenModalLogout = (name) => {
        if (name === "Đăng xuất") {
            handleCloseUserMenu();
            setOpenModalLogout(true);
        }
    };
    const handleCloseModalLogout = () => setOpenModalLogout(false);

    return (
        <React.Fragment>
            <CssBaseline />
            <ModalLogout
                openModalLogout={openModalLogout}
                handleCloseModalLogout={handleCloseModalLogout}
            />

            <AppBar
                className={styles.navbar}
                position="static"
                sx={{ position: "sticky", top: 0 }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                        >
                            <Link href="/">
                                <a>
                                    <Image
                                        src="/images/logo.svg"
                                        alt="Our Logo"
                                        width="50"
                                        height="50"
                                    />
                                </a>
                            </Link>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                style={{ color: "black" }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                    width: "100%",
                                }}
                            >
                                {pages.map((page, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            className={styles.navPageLinkMobile}
                                            href={page?.route || ""}
                                            passHref
                                        >
                                            <MenuItem
                                                className={
                                                    router.pathname == page.route ||
                                                        (router.pathname.startsWith(page.route) &&
                                                            page.route !== "/")
                                                        ? styles.navLinkActive
                                                        : styles.navLink
                                                }
                                            >
                                                <span style={{ margin: "0 auto" }}>{page.name}</span>
                                            </MenuItem>
                                        </Link>
                                    );
                                })}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                        >
                            <Link href="/" className={styles.logo}>
                                <a>
                                    <Image
                                        src="/images/logo.svg"
                                        alt="Our Logo"
                                        width="50"
                                        height="50"
                                    />
                                </a>
                            </Link>
                        </Typography>
                        <Box
                            className={styles.navPage}
                            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                        >
                            {pages.map((page, index) => {
                                // console.log("page route", page.route);
                                // console.log("router", router.pathname);

                                return (
                                    <Button key={index} className={styles.navPageItem}>
                                        <Link href={page?.route || ""} passHref>
                                            <MenuItem
                                                className={
                                                    router.pathname == page.route ||
                                                        (router.pathname.startsWith(page.route) &&
                                                            page.route !== "/")
                                                        ? styles.navLinkActive
                                                        : styles.navLink
                                                }
                                            >
                                                {page.name}
                                            </MenuItem>
                                        </Link>
                                    </Button>
                                );
                            })}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            {state.isLoggedIn ? (
                                <React.Fragment>
                                    <IconButton className={styles.notification} size="large">
                                        <Badge badgeContent={0} color="error">
                                            <NotificationsIcon />
                                        </Badge>
                                    </IconButton>

                                    <Tooltip title="Tùy chọn">
                                        <IconButton
                                            onClick={handleOpenUserMenu}
                                            sx={{ p: 0, color: "black" }}
                                        >
                                            <Avatar
                                                style={{ width: "48px", height: "48px" }}
                                                alt="avatar"
                                                src={user?.pic}
                                            />
                                        </IconButton>
                                    </Tooltip>

                                    <Menu
                                        sx={{ mt: "45px" }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {settings.map((setting) => (
                                            <MenuItem
                                                key={setting}
                                                onClick={() => handleOpenModalLogout(setting)}
                                            >
                                                <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </React.Fragment>
                            ) : (
                                <Button className={styles.navPageItem}>
                                    <Link href="/login">
                                        <a>
                                            <MenuItem
                                                className={
                                                    router.pathname === "/login"
                                                        ? styles.navLinkActive
                                                        : styles.navLink
                                                }
                                            >
                                                Đăng nhập
                                            </MenuItem>
                                        </a>
                                    </Link>
                                </Button>
                            )}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Toolbar style={{ minHeight: 0 }} id="back-to-top-anchor" />
            <ScrollTop>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
};

export default Navbar;
