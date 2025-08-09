/* eslint-disable */

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";

function App() {
  const mainTitle = "AquaWatt";

  return (
    <>
      {/* 상단 네비게이션 바 */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Toolbar
          sx={{
            paddingTop: 0,
            paddingBottom: 0,
            "@media (min-width:600px)": {
              minHeight: 48,
            },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 1000,
              mx: "auto",
              display: "flex",
              justifyContent: "space-between",
              gap: 1,
              px: 2,
            }}
          >
            <Typography variant="h6" component="div" noWrap>
              {mainTitle}
            </Typography>
            <Button color="inherit" sx={{ whiteSpace: "nowrap" }}>
              로그인
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero 섹션 */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: "url(/your-image.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          pt: 0,
          px: 2,
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 1000, mx: "auto" }}>
          <Typography variant="h2" component="h1" gutterBottom>
            {mainTitle}
          </Typography>
          <Typography variant="h5" gutterBottom>
            혁신적인 에너지 관리 플랫폼
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              backgroundColor: "#00796B",
              "&:hover": {
                backgroundColor: "#004D40",
              },
            }}
          >
            시작하기
          </Button>
        </Box>
      </Box>

      {/* Features 섹션 */}
      <Box
        sx={{
          py: 8,
          backgroundColor: "#FAFAFA",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 2,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            textAlign="center"
          >
            주요 기능
          </Typography>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  p: 3,
                  bgcolor: "white",
                  borderRadius: 2,
                  boxShadow: 3,
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  실시간 모니터링
                </Typography>
                <Typography>
                  에너지 사용량을 실시간으로 확인할 수 있습니다.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 푸터 */}
      <Box
        sx={{
          py: 4,
          bgcolor: "#1C1C1C",
          color: "#E0E0E0",
          textAlign: "center",
          px: 2,
        }}
      >
        <Box sx={{ maxWidth: 1000, mx: "auto" }}>
          <Typography>&copy; 2025 AquaWatt. All rights reserved.</Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;
