import { Container, Grid } from "@mui/material";
import Image from "next/image"
import styles from "../styles/pages/About.module.css"

const About = () => {
    return (
        <Container sx={{ mt: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <div className={styles.image}>
                        {/* lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                        <Image src="/images/about.jpg" alt="about" layout='fill'
                            objectFit='contain' />
                    </div>

                </Grid>

                <Grid item xs={12} md={7}>
                    <h1 className={styles.title}>Giới thiệu về Thuocsi</h1>

                    <div className={styles.info}>
                        <p>thuocsi.vn được thành lập từ năm 2018, là một trong những startup thành công trong lĩnh vực công nghệ về y tế</p>
                        <p>Hiện tại là cổng điện tử cung cấp thuốc cho hơn 1.000 nhà thuốc và phòng khám trên khắp Việt Nam.</p>
                        <p>Là một trong những nơi làm việc thu hút các tài năng trẻ với đam mê ứng dụng công nghệ 4.0 vào nền Y Tế.</p>
                    </div>

                </Grid>
            </Grid>

        </Container>
    );
}

export default About;