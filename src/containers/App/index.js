import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import routes from './routes';

import 'styles/containers/app.css';

const theme = createMuiTheme({ typography: { useNextVariants: true } });

const App = () => (
    <MuiThemeProvider theme={theme}>
        <Box mt={4}>
            <Helmet>
                <meta name="description" content="User Management" />
                <title>User Management</title>
            </Helmet>
            {routes()}
        </Box>
    </MuiThemeProvider>
);

export default withRouter(App);
