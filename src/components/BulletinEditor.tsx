import React, { useRef } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { Paper, Button, TextField } from '@mui/material'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromHTML } from 'draft-convert';
import '../scss/BulletinEditor.scss';

export interface BulletinEditorProps {
    bulletin: Bulletin;
    updateTitle: Function;
}

export function BulletinEditor(props: BulletinEditorProps) {
    // const [contentState, setContentState] = React.useState(
    //     () => ContentState.createFromText()
    // );

    const [editorState, setEditorState] = React.useState(
        () => EditorState.createWithContent(convertFromHTML(props.bulletin.body)),
    );

    const updateBulletinBody = () => {
        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
        props.bulletin.body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    }

    return (
        <Paper className="editor-paper">
            <TextField className="bulletin-title-box" label="title" defaultValue={props.bulletin.title}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    props.updateTitle(event.target.value);
                }} />


            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={(e) => { setEditorState(e); updateBulletinBody(); }}
            />
        </Paper>);
}