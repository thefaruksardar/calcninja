"use client";
import { Switch as AriaSwitch } from "react-aria-components";
import { useEffect, useState } from "react";
import { MdCopyAll, MdCheck } from "react-icons/md";
import toast from "react-hot-toast";

const ChmodCalculator = ({ Or, Ow, Oe, Gr, Gw, Ge, Pr, Pw, Pe }) => {
  const [ownerPermissions, setOwnerPermissions] = useState({
    read: Or ? Or : false,
    write: Ow ? Ow : false,
    execute: Oe ? Oe : false,
  });
  const [groupPermissions, setGroupPermissions] = useState({
    read: Gr ? Gr : false,
    write: Gw ? Gw : false,
    execute: Ge ? Ge : false,
  });
  const [publicPermissions, setPublicPermissions] = useState({
    read: Pr ? Pr : false,
    write: Pw ? Pw : false,
    execute: Pe ? Pe : false,
  });

  const [ownerVal, setOwnerVal] = useState({
    readNum: "0",
    writeNum: "0",
    executeNum: "0",
    readStr: "-",
    writeStr: "-",
    executeStr: "-",
  });
  const [groupVal, setGroupVal] = useState({
    readNum: "0",
    writeNum: "0",
    executeNum: "0",
    readStr: "-",
    writeStr: "-",
    executeStr: "-",
  });
  const [publicVal, setPublicVal] = useState({
    readNum: "0",
    writeNum: "0",
    executeNum: "0",
    readStr: "-",
    writeStr: "-",
    executeStr: "-",
  });

  let chmodNum = `${
    +ownerVal.readNum + +ownerVal.writeNum + +ownerVal.executeNum
  }${+groupVal.readNum + +groupVal.writeNum + +groupVal.executeNum}${
    +publicVal.readNum + +publicVal.writeNum + +publicVal.executeNum
  }`;

  let chmodStr = `${
    ownerVal.readStr +
    ownerVal.writeStr +
    ownerVal.executeStr +
    groupVal.readStr +
    groupVal.writeStr +
    groupVal.executeStr +
    publicVal.readStr +
    publicVal.writeStr +
    publicVal.executeStr
  }`;

  let trimmedchmodNum = chmodNum.replace(/\s+/g, "");

  let trimmedchmodStr = chmodStr.replace(/\s+/g, "");

  let [copyChmodNum, setCopyChmodNum] = useState(false);
  let [copyChmodStr, setCopyChmodStr] = useState(false);

  const togglePermission = (permissionType, role) => {
    switch (role) {
      case "owner":
        setOwnerPermissions((prevState) => ({
          ...prevState,
          [permissionType]: !prevState[permissionType],
        }));
        break;
      case "group":
        setGroupPermissions((prevState) => ({
          ...prevState,
          [permissionType]: !prevState[permissionType],
        }));
        break;
      case "public":
        setPublicPermissions((prevState) => ({
          ...prevState,
          [permissionType]: !prevState[permissionType],
        }));
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    // OWNER
    setOwnerVal((prevState) => ({
      ...prevState,
      readNum: ownerPermissions.read ? "4" : "0",
      readStr: ownerPermissions.read ? "r" : "-",
    }));

    setOwnerVal((prevState) => ({
      ...prevState,
      writeNum: ownerPermissions.write ? "2" : "0",
      writeStr: ownerPermissions.write ? "w" : "-",
    }));

    setOwnerVal((prevState) => ({
      ...prevState,
      executeNum: ownerPermissions.execute ? "1" : "0",
      executeStr: ownerPermissions.execute ? "x" : "-",
    }));

    // GROUP
    setGroupVal((prevState) => ({
      ...prevState,
      readNum: groupPermissions.read ? "4" : "0",
      readStr: groupPermissions.read ? "r" : "-",
    }));

    setGroupVal((prevState) => ({
      ...prevState,
      writeNum: groupPermissions.write ? "2" : "0",
      writeStr: groupPermissions.write ? "w" : "-",
    }));

    setGroupVal((prevState) => ({
      ...prevState,
      executeNum: groupPermissions.execute ? "1" : "0",
      executeStr: groupPermissions.execute ? "x" : "-",
    }));

    // PUBLIC
    setPublicVal((prevState) => ({
      ...prevState,
      readNum: publicPermissions.read ? "4" : "0",
      readStr: publicPermissions.read ? "r" : "-",
    }));

    setPublicVal((prevState) => ({
      ...prevState,
      writeNum: publicPermissions.write ? "2" : "0",
      writeStr: publicPermissions.write ? "w" : "-",
    }));

    setPublicVal((prevState) => ({
      ...prevState,
      executeNum: publicPermissions.execute ? "1" : "0",
      executeStr: publicPermissions.execute ? "x" : "-",
    }));
  }, [ownerPermissions, groupPermissions, publicPermissions]);

  const copyBtn = (type) => {
    toast.success("Code Copied");
    if (type === "number") {
      navigator.clipboard.writeText(trimmedchmodNum);
      setCopyChmodNum(true);
      setTimeout(() => {
        setCopyChmodNum(false);
      }, 2000);
    } else if (type === "string") {
      navigator.clipboard.writeText(trimmedchmodStr);
      setCopyChmodStr(true);
      setTimeout(() => {
        setCopyChmodStr(false);
      }, 2000);
    }
  };

  return (
    <section className="bg-white my-3 pt-3 pb-6 px-3 rounded-3xl mx-auto md:max-w-3xl mx:px-8">
      <div className=" md:max-w-xl mx-auto">
        <div className="rounded-3xl py-3 px-2 grid grid-cols-3 gap-1 ">
          <div>
            <span className="block text-center text-xl font-semibold mb-3">
              Owner
            </span>
            <div className="flex flex-col gap-2 border border-transparent">
              <Switch
                isSelected={ownerPermissions.read}
                // isSelected={true}
                onChange={() => togglePermission("read", "owner")}
              >
                Read
              </Switch>
              <Switch
                isSelected={ownerPermissions.write}
                onChange={() => togglePermission("write", "owner")}
              >
                Write
              </Switch>
              <Switch
                isSelected={ownerPermissions.execute}
                onChange={() => togglePermission("execute", "owner")}
              >
                Execute
              </Switch>
            </div>
          </div>
          <div>
            <span className="block text-center text-xl font-semibold mb-3">
              Group
            </span>
            <div className="flex flex-col gap-2 border border-transparent">
              <Switch
                isSelected={groupPermissions.read}
                onChange={() => togglePermission("read", "group")}
              >
                Read
              </Switch>
              <Switch
                isSelected={groupPermissions.write}
                onChange={() => togglePermission("write", "group")}
              >
                Write
              </Switch>
              <Switch
                isSelected={groupPermissions.execute}
                onChange={() => togglePermission("execute", "group")}
              >
                Execute
              </Switch>
            </div>
          </div>
          <div>
            <span className="block text-center text-xl font-semibold mb-3">
              Public
            </span>
            <div className="flex flex-col gap-2 border border-transparent">
              <Switch
                isSelected={publicPermissions.read}
                onChange={() => togglePermission("read", "public")}
              >
                Read
              </Switch>
              <Switch
                isSelected={publicPermissions.write}
                onChange={() => togglePermission("write", "public")}
              >
                Write
              </Switch>
              <Switch
                isSelected={publicPermissions.execute}
                onChange={() => togglePermission("execute", "public")}
              >
                Execute
              </Switch>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-3">
          <div
            className={`flex items-center  p-2 rounded-3xl border border-black bg-slate-100`}
          >
            <input
              type="text"
              className={`w-full bg-slate-100 focus:outline-none text-xl `}
              placeholder="777"
              value={trimmedchmodNum}
            />
            <button
              className={`px-4 py-2 rounded-3xl bg-violet-500 !text-white`}
              onClick={(e) => copyBtn("number")}
            >
              {copyChmodNum ? (
                <span className="flex items-center gap-1">
                  Copied <MdCheck />
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  Copy <MdCopyAll />
                </span>
              )}
            </button>
          </div>
          <div className="flex items-center bg-slate-100 p-2 rounded-3xl border border-black">
            <input
              type="text"
              className="w-full bg-slate-100 focus:outline-none text-xl"
              placeholder="---------"
              value={trimmedchmodStr}
            />
            <button
              className={`px-4 py-2 rounded-3xl bg-violet-500 !text-white`}
              onClick={(e) => copyBtn("string")}
            >
              {copyChmodStr ? (
                <span className="flex items-center gap-1">
                  Copied
                  <MdCheck />
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  Copy
                  <MdCopyAll />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChmodCalculator;

const Switch = ({ children, isSelected, ...props }) => {
  return (
    <AriaSwitch
      {...props}
      className={`group cursor-pointer flex flex-col gap-2 touch-none items-center justify-between py-3 px-2 rounded-xl  hover:border  ${
        isSelected
          ? "border border-violet-500 bg-violet-100 hover:border-violet-500"
          : "border border-transparent bg-slate-100 hover:border-violet-400"
      }`}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <span>{children}</span>
      <span className="group-data-[selected]:bg-violet-500 group-data-[focus-visible]:ring-2 h-6 w-9 cursor-pointer rounded-full border-2 border-transparent bg-zinc-600 ring-offset-2 ring-offset-zinc-900 transition duration-200">
        <span className="group-data-[selected]:ml-3 group-data-[selected]:group-data-[pressed]:ml-2 group-data-[pressed]:w-6 block h-5 w-5 origin-right rounded-full bg-white shadow transition-all duration-200" />
      </span>
    </AriaSwitch>
  );
};
