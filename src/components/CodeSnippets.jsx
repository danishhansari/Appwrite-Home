import { Light } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
const CodeSnippets = () => {
  const codeSnippets = `
    const client = new Client();
client
   .setEndpoint('https://cloud.appwrite.io/v1')
   .setProject('644ff1c9d31507e513c2');

const storage = new Storage(client);
                    
const url = storage.getFileDownload(
  'my-bucket', 
  '6450ea5392fa210bf37a'
);
    `;
  return (
    <>
      <div className="max-w-[1100px] mx-auto py-8 my-8">
        <p className="text-base font-bold text-2xl uppercase text-center">
          sdks
        </p>
        <h1 className="text-black text-3xl font-bold text-center mt-4">
          Quick to Get Started, Easy to Grow
        </h1>
        <p className="font-light text-center text-black my-4">
          All Appwrite SDKs are carefully designed to make developers lives
          easier
        </p>
        <div className="btns flex gap-4 text-lg font-light items-center justify-center mb-8">
          <button className="bg-gray-200 py-1 px-6 rounded-lg active">
            Auth
          </button>
          <button>Databases</button>
          <button>Functions</button>
          <button>Storage</button>
        </div>

        <div className="flex items-center">
          <div className="text-left w-full flex flex-col gap-8">
            <button className="text-left border-l-2 pl-8 border-base">
              <h2>Upload File</h2>
              <p>
                Create, resume and retry file uploads to the cloud with ease
              </p>
            </button>
            <button className="text-left border-l-2 pl-8">
              <h2>Download File</h2>
              <p>
                Download files with minimal code, optimised with state of the
                art compression
              </p>
            </button>
            <button className="text-left border-l-2 pl-8">
              <h2>Delete File</h2>
              <p>Delete unused files with ease</p>
            </button>
          </div>

          <div className="code w-full flex flex-col">
            <select className="inline-block self-end p-2 rounded text-black bg-gray-200">
              <option value="Web SDK">Web SDK</option>
              <option value="Flutter SDK">Flutter SDK</option>
              <option value="Android SDK">Android SDK</option>
              <option value="Swift SDK">Swift SDK</option>
            </select>
            <div className="code-snippet font-bold p-4">
              <pre>
            <Light language="jsx" style={ atomOneDark } className="rounded-lg">
              {codeSnippets}
            </Light>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeSnippets;
