import React, { useRef } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { Paper, Button } from '@mui/material'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromHTML } from 'draft-convert';

export interface BulletinEditorProps {
    bulletin: Bulletin;
}

export function BulletinEditor(props: BulletinEditorProps) {
    // const [contentState, setContentState] = React.useState(
    //     () => ContentState.createFromText()
    // );

    const [editorState, setEditorState] = React.useState(
        () => EditorState.createWithContent(convertFromHTML(props.bulletin.body)),
    );

    const updateBulletin = (text: string) => {
        props.bulletin.body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    }

    return (
        <Paper className="carousel-paper">
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={(e) => { setEditorState(e); updateBulletin("x"); }}
            />
        </Paper>);
}