import React, { Component } from "react";

import CKEditor from "@ckeditor/ckeditor5-react";

// NOTE: Use the editor from source (not a build)!
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
//import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
//import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import RealTimeCollaborativeEditing from "@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativeediting";
import RealTimeCollaborativeComments from "@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativecomments";
import PresenceList from "@ckeditor/ckeditor5-real-time-collaboration/src/presencelist";
import RealTimeCollaborativeTrackChanges from "@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativetrackchanges";
import { Mention } from "react-mentions";
var configDetails = "user.id=e5&user.name=Shiv&role=writer";
const MentionPlugin = ClassicEditor.builtinPlugins.find(
  (plugin) => plugin.pluginName == "Mention"
);
const editorConfiguration = {
  plugins: [
    Essentials,
    // UploadAdapter,
    // Autoformat,
    Bold,
    Italic,
    BlockQuote,
    CKFinder,
    EasyImage,
    Heading,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    Link,
    List,
    MediaEmbed,
    Paragraph,
    PasteFromOffice,
    Table,
    TableToolbar,
    TextTransformation,
    RealTimeCollaborativeEditing,
    RealTimeCollaborativeComments,
    RealTimeCollaborativeTrackChanges,
    PresenceList,
    Mention,
  ],
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "indent",
    "outdent",
    "|",
    "imageUpload",
    "blockQuote",
    "insertTable",
    "mediaEmbed",
    "undo",
    "redo",
    "|",
    "comment",
    "trackChanges",
  ],
  cloudServices: {
    // PROVIDE CORRECT VALUES HERE:
    tokenUrl:
      "https://73641.cke-cs.com/token/dev/950193beddb6a3d006815f9c45535c90965ce0eca129090a423e0ad2a423?" +
      configDetails +
      "",
    uploadUrl: "https://73641.cke-cs.com/easyimage/upload/",
    webSocketUrl: "wss://73641.cke-cs.com/ws",
  },
  collaboration: {
    channelId: "document-id",
  },
  sidebar: {
    container: document.querySelector("#sidebar"),
  },
  presenceList: {
    container: document.querySelector("#presence-list-container"),
  },
  comments: {
    editorConfig: {
      extraPlugins: [MentionPlugin],
      mention: {
        feeds: [
          {
            marker: "@",
            feed: ["@Barney", "@Lily", "@Marshall", "@Robin", "@Ted"],
            minimumCharacters: 1,
          },
        ],
      },
    },
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <CKEditor
          editor={ClassicEditor}
          config={editorConfiguration}
          data=""
          onInit={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    );
  }
}

export default App;
