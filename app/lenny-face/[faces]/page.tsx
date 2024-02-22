import Facecontainer from "@/components/facecontainer";
import { notFound } from "next/navigation";
import { faceData } from "@/libs/faces";
import Facecategories from "@/components/facecategories";

type paramsType = {
  faces: string;
};

export async function generateMetadata({ params }: { params: paramsType }) {
  const selectedObject = faceData.find((obj) => obj.name === params.faces);

  return {
    title:
      `${selectedObject?.name} Lenny Faces - ${selectedObject?.data[2]}, ${selectedObject?.data[3]}, ${selectedObject?.data[4]}` ||
      "Lenny Face ( ͡° ͜ʖ ͡°) - All Text Faces Copy and Paste [Updated]",
    description: `${selectedObject?.name} Lenny Faces Copy and Paste ${selectedObject?.data[2]}, ${selectedObject?.data[3]}, ${selectedObject?.data[4]}, ${selectedObject?.data[5]}, ${selectedObject?.data[6]}, ${selectedObject?.data[7]}, ${selectedObject?.data[8]}`,
  };
}

export default function page({ params }: { params: paramsType }) {
  const selectedObject = faceData.find((obj) => obj.name === params.faces);
  if (!selectedObject) {
    notFound();
  }

  return (
    <main className="mx-4 lg:max-w-7xl lg:mx-auto">
      <div className="lg:flex lg:gap-2 ">
        <Facecategories currentName={params.faces} />
        <Facecontainer faces={selectedObject.data} />
      </div>
    </main>
  );
}
