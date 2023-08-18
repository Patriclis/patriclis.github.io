import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

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
            right: -35,
            top: -5,
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
                        return (
                            <Tab label={c.name} icon={<StyledBadge badgeContent={1} color="error" />} />
                        );
                    })}
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {props.bulletins.map((b) => {
                    if (b.categoryId === 1) {
                        return (
                            <Item title={b.title} body={b.body}> </Item>
                        );
                    } else { return null; }
                }).filter(c => c !== null)}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {props.bulletins.map((b) => {
                    if (b.categoryId === 2) {
                        return (
                            <Item title={b.title} body={b.body}> </Item>
                        );
                    } else { return null; }
                }).filter(c => c !== null)}
            </TabPanel>
        </>
    );
}