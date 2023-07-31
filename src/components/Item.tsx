import { Paper, Button } from '@mui/material'
import Divider from '@mui/material/Divider';
import '../scss/Item.scss'

export interface ItemProps {
    children?: React.ReactNode;
    title: string,
    body: string
}


export function Item(props: ItemProps) {
    const { children, title, body, ...other } = props;

    return (
        <>
            <Paper className="carousel-paper">
                <h2 className="title">{title}</h2>
                <p>{body}</p>
            </Paper>
            <Divider variant="middle" />
        </>
    )
}