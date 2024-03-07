import Groupgenerator from "@/components/groupgenerator/groupgenerator";
import axios from "axios";
import { notFound } from "next/navigation";
import React from "react";

type paramsType = {
  id: string;
};

const getGroup = async (id: string) => {
  const res = await axios(`https://calcninja.com/api/get-group?id=${id}`);
  const data = await res.data;
  if (!data) {
    notFound();
  }
  return data;
};
export default async function Page({ params }: { params: paramsType }) {
  const group = await getGroup(params.id);

  return (
    <main className="mx-4 lg:max-w-6xl lg:mx-auto">
      <Groupgenerator GroupData={group} type="update" />
    </main>
  );
}
