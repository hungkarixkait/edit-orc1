import React, { useRef } from "react";

export const FormUpload: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => fileInputRef.current?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Xử lý upload file tại đây
      console.log(files);
    }
  };

  return (
    <div className="px-4 py-2 h-full max-h-[400px] overflow-hidden">
      <input
        ref={fileInputRef}
        type="file"
        multiple
        tabIndex={-1}
        accept="image/*,.jpeg,.jpg,.png,.gif,.heif,.heic,.tiff,.tif,.ico,.svg,.svgz,.psd,.avif,video/*,.mp4,.mov,.m4v,.flv,.mkv,.avi,.webm,.wmv,.rm,.rmvb,.3gp,.m2ts,.mt2s,.m2t,.mxf,.mpg,.mpeg,.mpe,.ts,.mts,.qt,.asf,audio/*,.mp3,.flac,.m4a,.wav,.aac,.oga,.ogg,.wma,.amr,.aif,.aiff,.ac3,.mpa,.ape,.mac,.mp2,.acc"
        className="hidden"
        onChange={handleFileChange}
      />

      <section
        tabIndex={-1}
        className="lv-layout player relative border border-dashed border-gray-300 w-full max-w-full mx-auto h-[200px] rounded-lg"
        style={{
          background: 'url("https://drive.google.com/thumbnail?id=1ulz1tNn7vmA7cYBmxQsX04G2dbwEu_rg&sz=w3000") no-repeat center center',
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto my-4 w-full max-w-[724px] h-[200px]">
          <div
            className="cursor-pointer w-full max-w-[684px] h-[160px] flex items-center justify-center"
            onClick={handleClick}
          >
            <div id="PlaceholderUpload" className="flex flex-col items-center justify-center h-full w-full">
              {/* <div className="relative w-full h-full">
                <div className="border-t-2 border-dashed border-gray-200"></div>
                <div className="absolute top-0 left-0 h-full border-l-2 border-dashed border-gray-200"></div>
                <div className="absolute bottom-0 left-0 w-full border-b-2 border-dashed border-gray-200"></div>
                <div className="absolute top-0 right-0 h-full border-r-2 border-dashed border-gray-200"></div>
              </div> */}
              <div className="mt-4 flex flex-col items-center">
                <div className="text-4xl text-gray-600">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    fill="none"
                    role="presentation"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M10.5 13.5v8a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-8h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-8v-8A.5.5 0 0 0 13 2h-2a.5.5 0 0 0-.5.5v8h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p className="text-lg text-gray-0 mt-2">Nhấp để tải lên</p>
                <p className="text-sm text-gray-100">Hoặc kéo thả file vào đây</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};