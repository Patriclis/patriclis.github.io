import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Carousel from 'react-material-ui-carousel';
import { BulletinList } from './BulletinList';
import { BulletinEditor } from './BulletinEditor';
import '../scss/WritePanel.scss';

export interface WritePanelProps {
    children?: React.ReactNode
    categoryid: number
    index: number
    value: number
    bulletins: Array<Bulletin>
    updatebulletins: Function
}

export function WritePanel(props: WritePanelProps) {
    const [bulletin, selectBulletin] = React.useState<Bulletin>();

    const { children, value, index, ...other } = props;

    const updateTitle = (title: string) => {
        var b = bulletin;
        if (b)
            b.title = title;
        selectBulletin(b);
        props.updatebulletins(props.bulletins);

    }

    const addBulletin = () => {
        var newId = 1;
        var ids = [];

        for (var i = 0; i < props.bulletins.length; i++) {
            ids.push(props.bulletins[i]?.id);
        }
        while (ids.includes(newId)) {
            newId++;
        }

        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        const formattedToday = dd + '/' + mm + '/' + yyyy;


        let b: Bulletin = {
            id: newId,
            categoryId: props.categoryid,
            title: "Title",
            posted: formattedToday,
            expires: formattedToday,
            body: "<p>Body</p>"
        }
        var bulls = [...props.bulletins];
        bulls.push(b);
        props.updatebulletins(bulls);
    }

    const deleteBulletin = () => {
        var bulls = [...props.bulletins];
        if (bulletin) {
            var index = bulls.indexOf(bulletin);
            bulls.splice(index, 1);
            props.updatebulletins(bulls);
            selectBulletin(undefined);
        }
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
                    <div className="list-and-buttons">
                        <div className="editor-buttons">
                            <IconButton color="primary" aria-label="add new bulletin" onClick={addBulletin}>
                                <AddIcon />
                            </IconButton>
                            <IconButton color="primary" aria-label="delete selected bulletin" onClick={deleteBulletin}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                        <BulletinList bulletins={props.bulletins.map((b) => {
                            if (b.categoryId === props.categoryid) {
                                return b;
                            } else { return null; }
                        }).filter(c => c !== null)} selectBulletin={selectBulletin} bulletin={bulletin} />
                    </div>
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