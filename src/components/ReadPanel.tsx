import * as React from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel'

export interface ReadPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    // items: Array<Item>;
}

export function ReadPanel(props: ReadPanelProps) {
    const { children, value, index, ...other } = props;

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
                    <Carousel className="carousel"
                        indicatorContainerProps={{
                            style: {
                                marginTop: '5px', // 5
                            }
                        }}
                        navButtonsAlwaysVisible={true}
                        animation='fade' duration={250} autoPlay={false}
                    >
                        {children}
                    </Carousel>
                </Box>
            )}
        </div>
    );
}