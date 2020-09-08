import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { ConfirmProvider } from 'material-ui-confirm';
import routes from './routes';

import 'styles/app.css';

const theme = createMuiTheme({ typography: { useNextVariants: true } });

const App = () => (
    <MuiThemeProvider theme={theme}>
        <Box mt={4}>
            <Helmet>
                <meta name="description" content="User Management" />
                <title>User Management</title>
            </Helmet>
            <ConfirmProvider>{routes()}</ConfirmProvider>
        </Box>
    </MuiThemeProvider>
);

export default withRouter(App);
