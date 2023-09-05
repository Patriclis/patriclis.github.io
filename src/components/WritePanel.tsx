import * as React from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';
import { BulletinList } from './BulletinList';
import { BulletinEditor } from './BulletinEditor';
import '../scss/WritePanel.scss';

export interface WritePanelProps {
    children?: React.ReactNode
    index: number
    value: number
    bulletins: Array<Bulletin | null>
    updateBulletins: Function
}

export function WritePanel(props: WritePanelProps) {
    const [bulletin, selectBulletin] = React.useState<Bulletin>();

    const { children, value, index, ...other } = props;

    const updateTitle = (title: string) => {
        var b = bulletin;
        if (b)
            b.title = title;
        selectBulletin(b);
        props.updateBulletins(props.bulletins);
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
                <Box className="write-panel" sx={{ p: 1, height: '100%' }}>
                    <BulletinList bulletins={props.bulletins} selectBulletin={selectBulletin} bulletin={bulletin}/>
                    {bulletin !== undefined ?
                        <BulletinEditor key={bulletin.id} bulletin={bulletin} updateTitle={updateTitle} />
                        : <></>
                    }
                </Box>
            )
            }
        </div >
    );
}