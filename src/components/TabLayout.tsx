import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { MyTab } from './MyTab';

import { TabPanelProps } from './TabPanel';
import { TabPanel } from './TabPanel';
import { Item } from './Item';

export interface TablayoutProps {
    editMode: boolean,
    bulletins: Array<Bulletin>,
    categories: Array<Category>
}

export function TabLayout(props: TablayoutProps) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const calianBodyOne = "Good afternoon. This is a test. A sample if you will. "
    const calianBodyTwo = "Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. Good afternoon. This is a test. A sample if you will. "

    const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: 2,
            top: 15,
            padding: '0 4px',
            fontSize: '14px',
            pointerEvents: 'none'
        },
    }));

    return (
        <>
            <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    className="tab-bar"
                >
                    {props.categories.map((c) => {
                        return <MyTab name={c.name} notif={3}/>;
                    })}
                    {/* <Tab label="Calian" />
                    <StyledBadge badgeContent={4} color="error" />
                    <Tab label="Maestro" />
                    <StyledBadge badgeContent={2} color="error" />
                    <Tab label="Unified Resolve 24" />
                    <StyledBadge badgeContent={0} color="error" />
                    <Tab label="Cyber TTX 24" />
                    <StyledBadge badgeContent={1} color="error" /> */}
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Item title={'Calian 01'} body={calianBodyOne}> </Item>

                <Item title={'Calian 02'} body={calianBodyTwo}></Item>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Maestro News Bulletins
            </TabPanel>
            {/* <TabPanel value={value} index={2}>
                Unified Resolve 2024 Bulletins
            </TabPanel>
            <TabPanel value={value} index={3}>
                Cyber TTX 24 Bulletins
            </TabPanel> */}
        </>
    );
}