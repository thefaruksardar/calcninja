import Facecategories from "@/components/lennyfaces/facecategories";
import Facecontainer from "@/components/lennyfaces/facecontainer";
import { faceData } from "@/libs/faces";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lenny Face ( ͡° ͜ʖ ͡°) - All Text Faces Copy and Paste [Updated]",
  description:
    "Most popular lenny faces Copy and Paste - ( ͡° ͜ʖ ͡°), ʘ‿ʘ, ( ͡~ ͜ʖ ͡°), ( ͠° ͟ʖ ͡°), (◕‿◕)╭∩╮, (͡• ͜໒ ͡• )",
};

export default function page() {
  let mergedData: string[] = [];

  faceData.forEach((entry) => {
    mergedData = mergedData.concat(entry.data);
  });

  return (
    <main className="mx-4 lg:max-w-7xl lg:mx-auto">
      <div className="lg:flex lg:gap-2">
        <Facecategories currentName="All Lenny Faces" />
        <Facecontainer faces={mergedData} />
      </div>

      <article className="relative px-4 mt-2 mb-6 bg-white py-5 rounded-3xl shadow text-slate-800">
        <h1>Lenny Faces: A Comprehensive Tool for Emoticon Enthusiasts</h1>

        <p>
          Are you in search of different types of Lenny Faces for use on social
          media platforms such as WhatsApp, Instagram, Facebook, and others?
        </p>

        <p>
          In online communication, emoticons are colorful expressions that add
          depth and nuance to our conversations.
        </p>

        <p>
          Among these emoticons, the "Lenny Face" has emerged as a beloved
          symbol of whimsy and humor.
        </p>
        <p>
          To cater to the growing demand for Lenny Faces and to provide you with
          a convenient platform for accessing and customizing these emoticons, a
          novel tool has been introduced – the Lenny Face Tool.
        </p>
        <h2>Discovering the Lenny Face Tool</h2>

        <p>
          This Lenny Face Tool is an innovative online resource designed to
          streamline the process of finding and utilizing Lenny Faces in Digital
          conversations.
        </p>
        <p>
          With a user-friendly interface and an extensive library of{" "}
          <Link href="https://en.wikipedia.org/wiki/Emoticon" target="_blank">
            emoticons
          </Link>
          , this tool is a one-stop destination for both casual users and
          enthusiasts alike.
        </p>

        <h2>Features Galore: From Cute to Expressive</h2>

        <p>
          One of the hallmark features of the Lenny Face Tool is its vast
          collection of Lenny Faces, categorized based on their expressions and
          themes.
        </p>

        <p>
          You can now also explore a plethora of options, including cute,
          sunglass-wearing, crying, donger-style, sad, angry, surprised, and
          many more.
        </p>
        <p>
          Whether you're seeking a lighthearted smiley or a more elaborate
          emoticon to convey complex emotions, the tool has you covered.
        </p>

        <h2>Seamless Copying and Editing</h2>

        <p>
          The Lenny Face Tool offers unparalleled convenience by allowing you to
          copy their desired emoticons with a single click.
        </p>
        <p>
          No more hassle of manually typing out intricate characters – with just
          a tap, you can effortlessly insert Lenny Faces into their messages,
          emails, social media posts, and more.
        </p>

        <p>
          Moreover, the tool goes a step further by providing an integrated
          editor feature.
        </p>
        <p>
          You can curate their personalized collection of favorite Lenny Faces,
          saving them for easy access whenever needed.
        </p>
        <p>
          Whether it's creating a repertoire of go-to emoticons or experimenting
          with custom designs, the editor empowers you to express themselves
          creatively.
        </p>

        <h2>Community Engagement and Updates</h2>

        <p>
          In addition to its robust features, the Lenny Face Tool fosters a
          vibrant community of emoticon enthusiasts.
        </p>
        <p>
          There is a also option that you can use to share your favorite Lenny
          Faces, exchange tips and tricks, and discover new additions to the
          ever-expanding collection.
        </p>

        <p>
          Furthermore, the tool is regularly updated with fresh content,
          ensuring that you always have access to the latest and most popular
          Lenny Faces.
        </p>

        <h2>Conclusion</h2>

        <p>
          With its diverse array of emoticons, intuitive interface, and
          interactive features, the Lenny Face Tool revolutionizes the way we
          incorporate Lenny Faces into our online interactions.
        </p>
        <p>
          Whether you're a seasoned emoticon fan or a newcomer curious about the
          world of Lenny Faces, this tool offers endless possibilities for
          expression and creativity.
        </p>
        <p>
          Dive into the world of Lenny Faces today and elevate your digital
          conversations to new heights of fun and emotion.
        </p>
        <p>
          Make sure to tell your friends about this tool! When you share it with
          them, they can also use it to copy all the most popular Lenny Faces.
        </p>
        <p>
          It's easy – they just click and they've got funny faces they can use
          in their messages. Sharing is nice, so let your friends know about
          this fun tool too!
        </p>
      </article>
    </main>
  );
}
