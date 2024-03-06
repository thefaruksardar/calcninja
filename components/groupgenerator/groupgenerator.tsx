"use client";
import axios from "axios";
import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as Dialog from "@radix-ui/react-dialog";
import { IoCopyOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";
type GroupDataType = {
  id?: string;
  groupname: string;
  divide: number;
  membersname: string;
  splitmembers: string;
  password: string;
};
const dd = `
Alexander\n
Benjami\n
nCharlotte\n
Emma\n
Christopher\n
David\n
Abigail\n
Bella\n
`;

const defaultData = {
  groupname: "Phoenix Fellowship",
  divide: 4,
  membersname: `"AAlexander\\nBenjami\\nCharlotte\\nEmma\\nDavid\\nBella\\nAbigail\\nChristoperr"`,

  splitmembers:
    '[["","Alexander", "Christoper"],["Benjami","Charlotte"],["Emma", "Bella"],["David", "bigail"]]',
  password: "123",
};

export default function Groupgenerator({
  GroupData = defaultData,
  type,
}: {
  GroupData?: GroupDataType;
  type: string;
}) {
  const [open, setOpen] = useState(false);
  const [membersName, setMembersName] = useState("");
  const [splitMembers, setSplitMembers] = useState<string[][]>();
  const [groupData, setGroupData] = useState<any>(
    JSON.parse(JSON.stringify(GroupData.membersname))
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function splitArrayIntoChunks(arrayData: string[], chunkSize: number) {
    const result = [];
    let itemsPerChunk = Math.floor(arrayData.length / chunkSize);
    let remainder = arrayData.length % chunkSize;
    let index = 0;

    for (let i = 0; i < chunkSize; i++) {
      let chunkSize = itemsPerChunk + (i < remainder ? 1 : 0);
      result.push(arrayData.slice(index, index + chunkSize));
      index += chunkSize;
    }

    return result;
  }

  const handleOnSubmit = (data: any) => {
    const { groupname, divide, membersname } = data;
    const membersArray = membersname.split("\n") || dd.split("\n");
    setMembersName(JSON.stringify(membersArray.join("\n") + "\n"));
    const shuffledMembers = shuffleArray(membersArray);
    const groupedMembers = splitArrayIntoChunks(shuffledMembers, divide);

    setSplitMembers(groupedMembers);
    setGroupData({ groupname, divide, splitMembers });
  };

  return (
    <section className="md:flex md:gap-6 lg:justify-center md:mx-4 relative">
      <div className="md:w-[35%]">
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className=" mt-5 rounded-3xl bg-white flex flex-col  gap-4 px-6 py-4 shadow">
            <input
              className="focus:outline-none"
              placeholder="Ex: Phoenix Fellowship"
              {...register("groupname")}
              id="groupname"
              defaultValue={GroupData.groupname}
            />
            <label
              htmlFor="groupname"
              className="text-slate-700 text-sm text-center"
            >
              Group Name
            </label>
          </div>

          <div
            className={`mt-5 rounded-3xl bg-white flex flex-col gap-4 px-6 py-4 shadow border border-transparent ${
              errors.divide ? "border-red-500" : ""
            }`}
          >
            <input
              className="focus:outline-none"
              placeholder="Ex: 4"
              {...register("divide", {
                required: "Please specify the number of groups needed.",
              })}
              type="number"
              id="divide"
              defaultValue={GroupData.divide}
            />
            <label
              htmlFor="divide"
              className="text-slate-700 text-sm text-center"
            >
              Number of Groups
            </label>
          </div>
          {errors.divide && (
            <p className="not-p text-red-500 my-2 text-center">
              {errors.divide.message?.toString()}
            </p>
          )}
          <div
            className={`mt-5 border border-transparent rounded-3xl bg-white flex flex-col gap-4 px-6 py-4 shadow ${
              errors.membersname ? "border-red-500" : ""
            }`}
          >
            <textarea
              className="focus:outline-none"
              {...register("membersname", {
                required: "Please enter members name",
              })}
              rows={8}
              id="membersname"
              defaultValue={JSON.parse(GroupData.membersname)
                .slice(1, -1)
                .replace(/\\n/g, "\n")}
            />

            <label
              htmlFor="membersname"
              className="text-slate-700 text-sm text-center"
            >
              Members Name
            </label>
          </div>
          {errors.membersname && (
            <p className="not-p text-red-500 text-center my-2">
              {errors.membersname?.message?.toString()}
            </p>
          )}

          <div className="my-3">
            <button
              className="bg-violet-500 py-3 w-full rounded-2xl text-white transition hover:scale-105 active:scale-95"
              type="submit"
            >
              Generate Group
            </button>
          </div>
        </form>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <div className="grid grid-cols-2 my-3 gap-3">
            <Dialog.Trigger>
              <span className="bg-rose-500 block py-2 w-full rounded-2xl text-white transition hover:scale-105 active:scale-95">
                Save Group
              </span>
            </Dialog.Trigger>
            <Link
              href="/group-generator"
              target="_blank"
              className="bg-rose-500 not-a text-center py-2 w-full rounded-2xl text-white transition hover:scale-105 active:scale-95"
              type="submit"
            >
              New Group
            </Link>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/30 ata-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]" />
              <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-[50%] flex justify-center items-center -translate-y-[50%]  data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms]">
                {type === "new" ? (
                  <SaveGroup
                    membersName={membersName}
                    groupData={groupData}
                    GroupData={GroupData}
                    splitMembers={splitMembers}
                    type={type}
                    setOpen={setOpen}
                  />
                ) : (
                  <UpdateGruop
                    membersName={membersName}
                    groupData={groupData}
                    GroupData={GroupData}
                    splitMembers={splitMembers}
                    type={type}
                    setOpen={setOpen}
                  />
                )}
              </Dialog.Content>
            </Dialog.Portal>
          </div>
        </Dialog.Root>
      </div>

      <div className="md:w-[65%] grid gap-6 mt-6 rounded-3xl bg-white px-6 py-4 shadow md:grid lg:grid-cols-2 md:self-start grid-rows-[masonry]">
        <div className="text-center text-[1.2rem] md:col-span-2">
          Generated Groups
        </div>

        {splitMembers && splitMembers.length > 0
          ? JSON.parse(JSON.stringify(splitMembers)).map(
              (group: string[], index: number) => (
                <div
                  key={index}
                  className={`rounded-3xl shadow border self-start ${colors[index]} ${colors[index]}
                `}
                >
                  <div
                    className={`flex flex-col 
                  `}
                  >
                    {group.map((member, idx) => (
                      <div key={idx}>
                        {member.length ? (
                          <p
                            className={`not-p flex justify-between text-white text-xl px-4 py-5  border-b border-slate-50 first:border-t-none last:border-none items-start
                          `}
                          >
                            {member}
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              )
            )
          : JSON.parse(GroupData.splitmembers).map(
              (group: string[], index: number) => (
                <div
                  key={index}
                  className={`rounded-3xl shadow border ${colors[index]} ${colors[index]}

                `}
                >
                  <div className={`flex flex-col`}>
                    {group.map((member, idx) => (
                      <div key={idx}>
                        {member.length ? (
                          <p
                            key={idx}
                            className={`not-p flex justify-between text-white text-xl px-4 py-5  border-b border-slate-50 first:border-t-none last:border-none items-start
                        `}
                          >
                            {member}
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
      </div>
    </section>
  );
}

const SaveGroup = ({
  membersName,
  groupData,
  GroupData,
  splitMembers,
  type,
  setOpen,
}: any) => {
  const [saving, setSaving] = useState(false);
  const [groupId, setGroupId] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSaveGroup = async (data: any) => {
    const { password } = data;
    const url = "/api/save-group";

    if (!groupData?.groupname && !groupData?.divide) {
      toast.error("Add Group Details");
      return;
    }
    try {
      setSaving(true);
      const res = await axios.post(url, {
        id: GroupData.id || "1234",
        groupname: groupData?.groupname,
        divide: groupData?.divide,
        membersname: JSON.stringify(membersName),
        splitmembers: JSON.stringify(splitMembers),
        password: password,
      });

      if (res.status === 200) {
        toast.success("Group saved");
        const id = await res.data.result.id;
        setGroupId(id);
        setSaving(false);
      }
    } catch (error: any) {
      toast.error(error);
      console.error("Error while saving group:", error);
      // Handle the error, possibly by showing a message to the user
    }
  };

  return (
    <div>
      {!groupId ? (
        <form
          className="bg-white p-8 rounded-lg shadow"
          onSubmit={handleSubmit(handleSaveGroup)}
        >
          <fieldset disabled={saving} className="flex flex-col gap-3">
            <label htmlFor="pass">Set Group Password</label>
            <input
              type="text"
              id="pass"
              className="border p-2 rounded-lg focus:outline-rose-500"
              placeholder="password"
              {...register("password", {
                required: "Please enter group password",
              })}
            />
            {errors.password && (
              <p className="not-p text-red-500 my-2 text-center">
                {errors.password.message?.toString()}
              </p>
            )}
            <div className=" my-3 flex items-center justify-end gap-4">
              <Dialog.Close>
                <span className="block cursor-pointer">Close</span>
              </Dialog.Close>
              <button
                className="bg-rose-500 py-1 px-3 text-sm rounded-lg text-white transition hover:scale-105 active:scale-95"
                type="submit"
              >
                {saving ? <Saving /> : "Save Group"}
              </button>
            </div>
          </fieldset>
        </form>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow">
          <label htmlFor="groupurl" className="block mb-3">
            Your group is now saved.
          </label>
          <div className="flex items-center gap-3">
            <input
              defaultValue={`https://calcninja.com/group-generator/${groupId}`}
              type="text"
              id="groupurl"
              className="bg-slate-800 text-white px-5 py-4 rounded-xl"
            />
          </div>

          <div className=" my-3 flex items-center justify-end gap-4">
            <Link
              href={`/group-generator/${groupId}`}
              className="not-a block cursor-pointer no-underline"
              // onClick={() => router.push(``)}
            >
              Close
            </Link>

            <button
              className="flex items-center gap-2 bg-rose-500 py-1 px-3 text-sm rounded-lg text-white transition hover:scale-105 active:scale-95"
              type="submit"
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://calcninja.com/group-generator/${groupId}`
                ),
                  toast.success("Link Copied");
              }}
            >
              Copy <IoCopyOutline />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const UpdateGruop = ({
  membersName,
  groupData,
  GroupData,
  splitMembers,
  type,
  setOpen,
}: any) => {
  const [saving, setSaving] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSaveGroup = async (data: any) => {
    const { password } = data;
    const url = "/api/update-group";

    if (!groupData?.groupname && !groupData?.divide) {
      toast.error("Update Group Details");
      return;
    }
    setSaving(true);
    try {
      const res = await axios.post(url, {
        id: GroupData.id,
        groupname: groupData?.groupname,
        divide: groupData?.divide,
        membersname: JSON.stringify(membersName),
        splitmembers: JSON.stringify(splitMembers),
        password: password,
      });

      const resdata = await res.data;

      console.log("data is", resdata);
      toast.success("Group updated");
      setOpen(false);
      setSaving(false);
    } catch (error) {
      console.error("Error occurred:", error);
      setSaving(false);
      toast.error("Password not match");
    }

    // if (res.status !== 200) {
    //   setSaving(false);
    //   toast.error("Password not match");
    //   return;
    // } else {
    //   toast.success("Group updated");
    //   setOpen(false);
    //   setSaving(false);
    // }
  };

  return (
    <div>
      <form
        className="bg-white p-8 rounded-lg shadow"
        onSubmit={handleSubmit(handleSaveGroup)}
      >
        <fieldset disabled={saving} className="flex flex-col gap-3">
          <label htmlFor="pass">Enter Group Password</label>
          <input
            type="text"
            id="pass"
            className="border p-2 rounded-lg focus:outline-rose-500"
            placeholder="password"
            {...register("password", {
              required: "Please enter group password",
            })}
          />
          {errors.password && (
            <p className="not-p text-red-500 my-2 text-center">
              {errors.password.message?.toString()}
            </p>
          )}
          <div className=" my-3 flex items-center justify-end gap-4">
            <Dialog.Close>
              <span className="block cursor-pointer">Close</span>
            </Dialog.Close>
            <button
              className="bg-rose-500 py-1 px-3 text-sm rounded-lg text-white transition hover:scale-105 active:scale-95"
              type="submit"
            >
              {saving ? <Saving /> : "Update Group"}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

let colors = [
  "bg-[#fbbf24]",
  "bg-[#60a5fa]",
  "bg-[#2dd4bf]",
  "bg-[#fb923c]",
  "bg-[#ec4899]",
  "bg-[#fb7185]",
  "bg-[#6366f1]",
  "bg-[#ef4444]",
  "bg-[#c084fc]",
  "bg-[#e879f9]",
  "bg-[#9333ea]",
  "bg-[#818cf8]",
  "bg-[#3b82f6]",
  "bg-[#f43f5e]",
  "bg-[#dc2626]",
  "bg-[#84cc16]",
  "bg-[#34d399]",
  "bg-[#f59e0b]",
  "bg-[#d946ef]",
  "bg-[#a3e635]",
  "bg-[#ea580c]",
  "bg-[#4ade80]",
  "bg-[#f97316]",
  "bg-[#f87171]",
  "bg-[#38bdf8]",
  "bg-[#f472b6]",
  "bg-[#10b981]",
  "bg-[#0ea5e9]",
  "bg-[#22d3ee]",
  "bg-[#e11d48]",
  "bg-[#22c55e]",
  "bg-[#14b8a6]",
];

const Saving = () => {
  return (
    <div className="h-5 w-5 mx-auto animate-spin rounded-full border-b-2 border-white" />
  );
};
