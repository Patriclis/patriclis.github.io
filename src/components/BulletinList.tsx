import React, { useRef } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { Paper, Button } from '@mui/material'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromHTML } from 'draft-convert';

export interface BulletinListProps {
    bulletins: Array<Bulletin | null>;
    selectBulletin: Function;
}

export function BulletinList(props: BulletinListProps) {

    return (
        <ul>
            {props.bulletins.map((b) => {
                if (b !== null) {
                    return <li onClick={() => props.selectBulletin(b.id)}>{b.id}</li>;
                } else { return null; }
            }).filter(c => c !== null)}
        </ul>
    );
}