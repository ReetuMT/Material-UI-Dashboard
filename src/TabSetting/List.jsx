import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Profile from './Profile';
import Personal from './Personal';

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: '#141414',
        fontWeight:"400",
        '&.Mui-selected': {
            color: '#0c828f',
        },
        '&.Mui-focusVisible': {
            backgroundColor: '#30c1d1',
        },
    }),
);
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Lists() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Card sx={{ height: "50%", p: 2 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <StyledTabs value={value} onChange={handleChange} aria-label="basic StyledTabs example">
                        <StyledTab label="Profile" {...a11yProps(0)} />
                        <StyledTab label="Personal" {...a11yProps(1)} />
                        
                    </StyledTabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                   <Profile/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                 <Personal/>
                </CustomTabPanel>
            </Card >
        </Box>
    );
}
