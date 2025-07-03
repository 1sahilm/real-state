"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useRef } from "react"; 
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import LinkModelBox from "@/components/linkmodelbox/linkmodelbox";
import styles from "../../styles/CreateBlog.module.scss" 
import dynamic from "next/dynamic";
 
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});
const options = [
  { value: 'Vvie Villas', label: 'Vvie Villas' }, 
];
const animatedComponents = makeAnimated();

const CreateBlogfname = () => {
  const router = useRouter(); 
  const [loading, setLoading] = React.useState(false);


   const editor = useRef(null);

//   const config = React.useMemo(
//     () => ({
 
//       uploader: {
//   insertImageAsBase64URI: false, // Prevents base64 from being inserted
//   url: '/api/blog/upload-image', // Custom endpoint

//   // Check if upload is successful
//   isSuccess: (resp) => resp.success === true && typeof resp.fileURL === 'string',

//   // Process the response from your server
//   process: (resp) => ({
//     files: [resp.fileURL],
//   }),

//   // Convert pasted image to base64 and upload it
//   prepareData: async (formData) => {
//     const files = [];

//     for (const pair of formData.entries()) {
//       const file = pair[1];
//       if (file instanceof File) {
//         files.push(file);
//       }
//     }

//     const uploadedURLs: string[] = [];

//     for (const file of files) {
//       const reader = new FileReader();

//       const base64String: string = await new Promise((resolve, reject) => {
//         reader.onloadend = () => resolve(reader.result as string);
//         reader.onerror = reject;
//         reader.readAsDataURL(file);
//       });

//       const res = await fetch("/api/blog/upload-image", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ base64String, fileName: file.name }),
//       });

//       const data = await res.json();
//       if (data.success && data.fileURL) {
//         uploadedURLs.push(data.fileURL);
//       }
//     }

//     return { files: uploadedURLs };
//   },
// },



//       toolbarSticky: false,
//       // height,
//       showCharsCounter: false,
//       showWordsCounter: false,
//       showXPathInStatusbar: false,
//       disablePlugins: [
//         'about',
//         'line-height',
//         'indent',
//         'symbols',
//         'print',
//         'preview',
//         'file',
//         'table',
//         'paragraph',
//       ],
//       buttons: [
//         'bold',
//         'italic',
//         'underline',
//         'strikethrough',
//         'ul',
//         'ol',
//         'outdent',
//         'indent',
//         'font',
//         'fontsize',
//         'brush',
//         'image',
//         'cut',
//         'copy',
//         'paste',
//         'selectall',
//         'link'
//       ],
//       iframe: false,
//       textIcons: false,
//       toolbarAdaptive: false,
//       removeButtons: ['brush', 'file', 'fullsize', 'about', 'dots', 'source'],
//       link: {
//         openInNewTabCheckbox: true,
//         noFollowCheckbox: false,
//         // Force all created links to have target="_blank"
//         processLink: (url) => ({
//           url,
//           target: '_blank',
//           rel: 'noopener noreferrer'
//         }),
//         // Alternative method for link creation
//         createLink: (url, text) => {
//           return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text || url}</a>`;
//         }
//       },
//       placeholder:  "",
//       extraButtons: [
//         {
//           name: 'clear',
//           icon: 'eraser',
//           exec: (editor) => {
//             editor.value = '';
//             editor.events.fire('placeholderShow');
//           }
//         }
//       ],
//       image: {
//         editSrc: true,
//         resize: true,
//         editAlt: true,
//         editLink: true,
//         editTitle: true,
//         editSize: true,
//         editMargins: true,
//         editBorderRadius: true,
//         editAlign: true,
//         editSpacing: true
//       },
//       events: {
//         afterInit: (editorInstance) => {
//           // Function to process all links
//           const processLinks = () => {
//             const links = editorInstance.editor.querySelectorAll('a[href]');
//             links.forEach(link => {
//               if (!link.target || link.target !== '_blank') {
//                 link.target = '_blank';
//                 link.rel = 'noopener noreferrer';
//               }
//             });
//           };

//           // Process immediately
//           processLinks();

//           // Process on these events
//           ['afterSetHTML', 'change', 'afterPaste'].forEach(event => {
//             editorInstance.events.on(event, processLinks);
//           });

//           // Global click handler as final safeguard
//           const clickHandler = (e) => {
//             const link = e.target.closest('a[href]');
//             if (link) {
//               e.preventDefault();
//               e.stopPropagation();
//               window.open(link.href, '_blank', 'noopener,noreferrer');
//             }
//           };

//           editorInstance.editor.addEventListener('click', clickHandler);

//           return () => {
//             editorInstance.editor.removeEventListener('click', clickHandler);
//           };
//         }
//       }
//     }),
//     [] // Include placeholder in dependencies
//   );


  const [blogPopup, setBlogPopup] = React.useState(false);
  const [category, setCategory] = React.useState([]);
const [previewImage, setPreviewImage] = React.useState<string | null>(null);
const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [state, setState] = React.useState({
    content: "",
  });
  console.log({state},"state",)

  const handleCategory = (value: any) => {
    setCategory(value);
  };
const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  }
};
const handleRemoveImage = () => {
  setPreviewImage(null);
  setSelectedFile(null);
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("customCategory", JSON.stringify(category)); 
    formData.append("content", state.content);
    if (selectedFile) {
      formData.append("featureImage", selectedFile);
    }
    
    const response = await axios.post("/api/blog/create-blog", formData);
    console.log("response", response);
    router.refresh();
    setLoading(false);
    setBlogPopup(true);
  };


  const onChangeState = (key: any, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };


  const debounce = (fn: Function, delay = 300) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};

const handleEditorChange = debounce((newContent: string) => {
  onChangeState("content", newContent);
}, 400);
  return (
    <>
      {blogPopup && (
        <LinkModelBox
          buttonclose={() => setBlogPopup(false)}
          buttonsave={() => router.push("/admin/bloglist")}
          modelheading="Blogs"
          itemicon="sussess"
          modelcontent="Blogs Created Sussessfully"
        />
      )}

      <div className={styles.headingBar}>
        <h2>Create Blog</h2>
      </div>

      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.gridLayout}>
            <div>
              <div className={styles.inputWrapper}>
                <label className={styles.label}>Meta Title</label>
                <input
                  type="text"
                  placeholder="Meta Title"
                  name="mtitle"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.label}>Meta description</label>
                <input
                  type="text"
                  placeholder="Meta description"
                  name="mdescription"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.label}>Blog Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.label}>Category</label>
                <Select 
                  options={options}
                  isMulti
                  components={animatedComponents}
                  onChange={(value) => handleCategory(value)}
                  value={category}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.label}>Blog Content</label> 
                <br />
               
                 



     <JoditEditor
  ref={editor}
  // config={config}
  // defaultValue={state.content}
  onBlur={(newContent) => onChangeState("content", newContent)}
/>

              </div>
            </div>

            <div className={styles.inputWrapper}>
  <h3 className={styles.label}>Banner Image</h3>

  {!previewImage ? (
    <label className={styles.uploadLabel}>
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
      </svg>
      <span className="mt-2 text-base leading-normal">Upload a Image</span>
      <input
        type="file"
        className="hidden"
        name="featureImage"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </label>
  ) : (
    <div className={styles.previewWrapper}>
      <img src={previewImage} alt="Preview" className={styles.previewImage} />
      <button type="button" onClick={handleRemoveImage} className={styles.removeButton}>
        ❌
      </button>
    </div>
  )}
</div>

          </div>

          {loading ? (
            <button disabled className={styles.button}>Loading..</button>
          ) : (
            <button type="submit" className={styles.button}>Submit</button>
          )}
        </form>
      </div>
    </>
  );
};

export default CreateBlogfname;