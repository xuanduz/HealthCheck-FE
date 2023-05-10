import { useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function ClinicPostComponent() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [text, setText] = useState();
  const onEditorStateChange = function (editorState: any) {
    setEditorState(editorState);
    const { blocks } = convertToRaw(editorState.getCurrentContent());
    /*let text = blocks.reduce((acc, item) => {
      acc = acc + item.text;
      return acc;
    }, "");*/
    let text = editorState.getCurrentContent().getPlainText("\u0001");
    setText(text);
  };

  return (
    <>
      {/*<div>{draftToHtml(convertToRaw(editorState.getCurrentContent()))}</div>*/}
      {/* {<div style={{ height: "80px", overflow: "auto" }}>{text}</div>} */}
      //! TODO: Chinh lai editor
      {/*https://codesandbox.io/s/react-nqf61?file=/src/reactDraft/index.js:88-192*/}
      <div className=" black-all-child border-2">
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          mention={{
            separator: " ",
            trigger: "@",
            suggestions: [
              { text: "APPLE", value: "apple" },
              { text: "BANANA", value: "banana", url: "banana" },
              { text: "CHERRY", value: "cherry", url: "cherry" },
              { text: "DURIAN", value: "durian", url: "durian" },
              { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
              { text: "FIG", value: "fig", url: "fig" },
              { text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
              { text: "HONEYDEW", value: "honeydew", url: "honeydew" },
            ],
          }}
        />
      </div>
    </>
  );
}
