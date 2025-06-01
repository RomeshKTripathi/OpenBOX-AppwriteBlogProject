import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

const RealTimeEditor = ({ name, control, defaultValue = "" }) => {
    return (
        <div className="w-full h-full">
            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        initialValue={defaultValue}
                        apiKey="o2na07kmk4c1zw4r6w5cew464lnz2fpsevgmngovb9q4hf5b"
                        init={{
                            plugins: " anchor image link lists table",
                            toolbar:
                                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                        }}
                        onEditorChange={onChange}
                    />
                )}
            ></Controller>
        </div>
    );
};

export default RealTimeEditor;
