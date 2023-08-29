import * as React from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';
import { BulletinList } from './BulletinList';

export interface WritePanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    bulletins: Array<Bulletin | null>
    // items: Array<Item>;
}

export function WritePanel(props: WritePanelProps) {
    const { children, value, index, ...other } = props;

    const selectBulletin = (b: number) => {
        console.log(b);
    }


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            className="tab-panel"
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 1, height: '100%' }}>
                    <BulletinList bulletins={props.bulletins} selectBulletin={selectBulletin}/>




                    <Carousel className="carousel"
                        indicatorContainerProps={{
                            style: {
                                marginTop: '5px',
                            }
                        }}
                        navButtonsAlwaysVisible={true}
                        swipe={false}
                        animation='fade' duration={250} autoPlay={false}
                    >
                        {children}
                    </Carousel>
                </Box>
            )}
        </div>
    );
}