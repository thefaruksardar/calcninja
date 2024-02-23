"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdCopyAll } from "react-icons/md";

export default function Iframegem() {
  const [iFrameCode, setiFrameCode] = useState("");
  const [copyState, setCopyState] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (data: any) => {
    const {
      border,
      bordercolor,
      bordersize,
      bordertype,
      height,
      iframename,
      iframeurl,
      marginheight,
      marginwidth,
      width,
      scrolling,
      allowfullscreen,
    } = data;

    setiFrameCode(
      `<iframe src="${iframeurl || "https://calcninja.com/iframe-generator"}" ${
        border
          ? `style="border:${bordersize || "0"}px ${bordercolor || "#3D3D3D"} ${
              bordertype || "none"
            };"`
          : ""
      } name="${iframename || "calcninja.com"}" scrolling="${
        scrolling ? "yes" : "no"
      }" frameborder="1" marginheight="${marginheight || "0px"}" marginwidth="${
        marginwidth || "0px"
      }" height="${height || "400px"}" width="${width || "600px"}" ${
        allowfullscreen ? "allowfullscreen" : ""
      }></iframe>`
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(iFrameCode);
    toast.success(`Code Copied`);

    setCopyState(false);

    setTimeout(() => {
      setCopyState(true);
    }, 1600);
  };

  const openPreview = (code: string) => {
    if (!code) {
      toast.error("Please enter site URL");
      return;
    }
    const newTab = window.open("", "_blank");
    newTab?.document.write("<html><head><title>Preview</title></head><body>");
    newTab?.document.write(iFrameCode);
    newTab?.document.write("</body></html>");
    newTab?.document.close();
  };
  return (
    <div className="lg:flex lg:gap-6 lg:justify-center">
      <div>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className=" mt-5 rounded-3xl bg-white flex flex-col gap-4 px-6 py-4 shadow">
            <input
              className="focus:outline-none"
              placeholder="https://example.com"
              {...register("iframeurl", {
                required: "Please enter site URL",
              })}
            />
            {errors.iframeurl && (
              <p className="not-p text-red-500">
                {errors.iframeurl.message?.toString()}
              </p>
            )}
            <hr />
            <input
              className="focus:outline-none"
              placeholder="myiFrameName"
              {...register("iframename")}
            />
          </div>
          <div className="md:flex md:gap-3">
            <div className=" mt-5 rounded-3xl bg-white grid grid-cols-2 items-center gap-4 px-6 py-4 shadow md:flex-grow">
              <span className="text-center flex  flex-col gap-2">
                <input
                  className="text-center max-w-full text-slate-800 focus:outline-none"
                  defaultValue="600"
                  type="text"
                  id="width"
                  {...register("width")}
                />
                <label htmlFor="width" className="text-slate-500 text-sm">
                  Width
                </label>
              </span>
              <span className="text-center flex  flex-col gap-2">
                <input
                  className="text-center max-w-full text-slate-800 focus:outline-none"
                  defaultValue="400"
                  type="text"
                  id="height"
                  {...register("height")}
                />
                <label htmlFor="height" className="text-slate-500 text-sm">
                  Height
                </label>
              </span>
              <span className="text-center flex  flex-col gap-2">
                <input
                  className="text-center max-w-full text-slate-800 focus:outline-none"
                  defaultValue="0"
                  type="text"
                  id="marginwidth"
                  {...register("marginwidth")}
                />
                <label htmlFor="marginwidth" className="text-slate-500 text-sm">
                  Margin Width
                </label>
              </span>
              <span className="text-center flex  flex-col gap-2">
                <input
                  className="text-center max-w-full text-slate-800 focus:outline-none"
                  defaultValue="0"
                  type="text"
                  id="marginheight"
                  {...register("marginheight")}
                />
                <label
                  htmlFor="marginheight"
                  className="text-slate-500 text-sm"
                >
                  Margin Height
                </label>
              </span>
              <span className="text-center flex  flex-col gap-2">
                <input
                  className="text-center max-w-full text-slate-800 accent-violet-500 focus:outline-none"
                  type="checkbox"
                  id="scrolling"
                  defaultChecked
                  {...register("scrolling")}
                />
                <label htmlFor="scrolling" className="text-slate-500 text-sm">
                  Scrolling
                </label>
              </span>
              <span className="text-center flex  flex-col gap-2">
                <input
                  className="text-center max-w-full text-slate-800 accent-violet-500 focus:outline-none"
                  type="checkbox"
                  id="allowfullscreen"
                  defaultChecked
                  {...register("allowfullscreen")}
                />
                <label
                  htmlFor="allowfullscreen"
                  className="text-slate-500 text-sm"
                >
                  Allowfullscreen
                </label>
              </span>
            </div>
            <div className=" mt-5 rounded-3xl bg-white grid grid-cols-2 items-center gap-4 px-6 py-4 shadow md:flex-grow">
              <span className="text-center flex  flex-col gap-2">
                <input
                  className="text-center max-w-full text-slate-800 accent-violet-500 focus:outline-none"
                  type="checkbox"
                  id="border"
                  defaultChecked
                  {...register("border")}
                />
                <label htmlFor="border" className="text-slate-500 text-sm">
                  Border
                </label>
              </span>
              <span className="text-center flex flex-col">
                <select
                  className="text-center max-w-full text-slate-800 focus:outline-none"
                  id="bordertype"
                  {...register("bordertype")}
                >
                  <option value="solid">Solid</option>
                  <option value="dotted">Dotted</option>
                  <option value="dashed">Dashed</option>
                  <option value="double">Double</option>
                  <option value="groove">Groove</option>
                  <option value="ridge">Ridge</option>
                  <option value="inset">Inset</option>
                  <option value="outset">Outset</option>
                  <option value="hidden">Hidden</option>
                  <option value="none">None</option>
                </select>
                <label htmlFor="bordertype" className="text-slate-500 text-sm">
                  Border Type
                </label>
              </span>
              <span className="text-center flex  flex-col gap-2">
                <input
                  className="text-center max-w-full text-slate-800 focus:outline-none"
                  defaultValue="1"
                  type="text"
                  id="bordersize"
                  {...register("bordersize")}
                />
                <label htmlFor="bordersize" className="text-slate-500 text-sm">
                  Border Size
                </label>
              </span>
              <span className="text-center flex  flex-col gap-2">
                <input
                  className="text-center max-w-full text-slate-800 focus:outline-none"
                  defaultValue="#64748b"
                  type="text"
                  id="bordercolor"
                  {...register("bordercolor")}
                />
                <label htmlFor="bordercolor" className="text-slate-500 text-sm">
                  Border Color
                </label>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 my-3 gap-3">
            <button
              className="bg-rose-500 py-2 rounded-2xl text-white transition hover:scale-105 active:scale-95"
              type="submit"
            >
              Generate
            </button>
            <button
              className="block text-center !text-rose-500 py-2 rounded-2xl border border-rose-500 bg-white transition hover:scale-105 active:scale-95"
              rel="stylesheet"
              onClick={(e) => openPreview(iFrameCode)}
            >
              Preview
            </button>
          </div>
        </form>
        <section className="bg-violet-50 py-3 rounded-2xl shadow mb-6">
          <div className="flex justify-between items-center bg-violet-500 text-white px-6 pt-3 pb-6 rounded-t-2xl">
            <label htmlFor="generatedcode">Generated Code</label>
            <button className="flex items-center gap-2" onClick={handleCopy}>
              <span className="text-2xl">
                <MdCopyAll />
              </span>{" "}
              {copyState ? "Copy Code" : "Copied"}
            </button>
          </div>
          <div className="-mt-4 w-full px-4 ">
            <textarea
              className="w-full p-3 border rounded-xl focus:outline-none"
              defaultValue={iFrameCode}
              rows={7}
              id="generatedcode"
            ></textarea>
          </div>
        </section>
      </div>

      <div className="hidden  mt-5 xl:block bg-white lg:self-start shadow rounded-xl">
        <div className="flex justify-between items-center bg-violet-500 text-white px-6 py-3 rounded-t-2xl">
          Generated Code
        </div>
        <div
          className="flex justify-center p-4"
          dangerouslySetInnerHTML={{
            __html:
              iFrameCode ||
              `<iframe src="https://wikipedia.org" style="border:1px #64748b solid;" name="calcninja.com" scrolling="yes" frameborder="1" marginheight="0" marginwidth="0" height="400" width="600" allowfullscreen></iframe>`,
          }}
        ></div>
      </div>
    </div>
  );
}
