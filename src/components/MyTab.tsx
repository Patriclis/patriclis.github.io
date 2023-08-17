import Tab from '@mui/material/Tab';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

export interface MyTabProps {
    name: string,
    notif: number
}


export function MyTab(props: MyTabProps) {

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
        <Tab label={props.name} />
        // <StyledBadge badgeContent={props.notif} color="error" />
    );

}