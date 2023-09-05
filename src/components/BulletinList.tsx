import React, { useRef } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { Paper, Button } from '@mui/material'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromHTML } from 'draft-convert';
import '../scss/BulletinList.scss';

export interface BulletinListProps {
    bulletins: Array<Bulletin | null>;
    selectBulletin: Function;
    bulletin: Bulletin | undefined;
}

export function BulletinList(props: BulletinListProps) {
    return (
        <ul className="bulletin-list">
            {props.bulletins.map((b) => {
                if (b !== null) {
                    return <li className={props.bulletin ? (props.bulletin.id === b.id ? "selected" : ""):""}key={b.id} onClick={() => props.selectBulletin(b)}>{b.title.trim().length > 0 ? b.title : "Missing Title"}</li>;
                } else { return null; }
            }).filter(c => c !== null)}
        </ul>
    );
}