import { Paper, Button } from '@mui/material'
import Divider from '@mui/material/Divider';
import '../scss/Item.scss';
import parse from 'html-react-parser';

export interface ItemProps {
    children?: React.ReactNode;
    body: string
}

export function Item(props: ItemProps) {
    const { children, body, ...other } = props;

    return (
        <>
            <Paper className="carousel-paper">
                <div className="bulletin-body">{parse(body)}</div>
            </Paper>
        </>
    )
}