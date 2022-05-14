import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import { useAppContext } from "../context/AppContext";
import { useRouter } from 'next/router'

// Modal Confirm Logout
const style = {
    position: "absolute",
    borderRadius: "10px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    p: 3,
};

function ModalLogout(props) {
    const { openModalLogout, handleCloseModalLogout } = props;
    const { dispatch } = useAppContext();
    const router = useRouter();

    const handleLogout = async () => {
        handleCloseModalLogout();

        const res = await fetch('/api/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })
        const data = await res.json()

        if (data.success) {
            dispatch({ type: "set_log_out" });
            router.push("/");
        }
    };

    return (
        <Modal
            open={openModalLogout}
            onClose={handleCloseModalLogout}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <HelpOutlinedIcon
                    sx={{
                        color: "#979797",
                        fontSize: 100,
                        margin: "0 auto",
                        textAlign: "center",
                    }}
                />
                <Typography
                    id="modal-modal-description"
                    sx={{
                        my: 2,
                        textAlign: "center",
                        fontSize: "25px",
                        fontWeight: "bold",
                    }}
                >
                    Bạn có chắc chắn muốn đăng xuất ?
                </Typography>
                <Stack direction="row" spacing={3}>
                    <Button
                        variant="contained"
                        size="large"
                        color="error"
                        onClick={handleCloseModalLogout}
                    >
                        Hủy bỏ
                    </Button>

                    <Button variant="contained" size="large" onClick={handleLogout}>
                        Đồng ý
                    </Button>
                </Stack>
            </Box>
        </Modal>
    );
}

export default ModalLogout;