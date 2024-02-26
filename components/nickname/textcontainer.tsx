"use client";

import useLocalStorage from "@/hooks/useLocalstorage";
import {
  futureAlienCharMap,
  longTextBubblesMap,
  frakturMap,
  crypticItalicMap,
  mathSansMap,
  scriptBoldItalicMap,
  fairytaleMap,
  heartsMap,
  emojisTextMap,
  darkTextBubblesMap,
  frakturBoldMap,
  monospaceTextMap,
  subscriptMap,
  superscriptMap,
  fullWidthMap,
  parenthesisMap,
  wizardMap,
  lefthandedMap,
  darkTextSquaresMap,
  lightTextSquaresMap,
  doubleStruckMap,
  cyrillicMap,
  mirroredFlippedMap,
  japaneseMap,
  arabicMap,
  invertedMap,
  mathSansBoldItalicMap,
  diagonalStrikesMap,
  ancientStyle1Map,
  dotSeparatedMap,
  mixedStyle1Map,
  handwritingMap,
  acuteAccentsMap,
  modernGreekMap,
  underlinedByDashesMap,
  linedUpMap,
  mixedStyle2Map,
  upAndDownMap,
  europeanCharactersMap,
  asianCharactersMap,
  monoUpperMap,
  darkBracketsMap,
  devlishMap,
  metalÜmlautsMap,
  curvyMap,
  mathSansItalicMap,
  boxedinMap,
  arrowsMap,
  mixedStyle3Map,
  mathItalicMap,
  bandaidMap,
  deltaMap,
  mathStyleMap,
  windyMap,
  strikethroughMap,
  xCrossMap,
  yataganMap,
  sovietMap,
  xeperatedMap,
  strokedMap,
  mathBoldMap,
  linesLinesLinesMap,
  anchorStyleMap,
  printStampMap,
  hookBracketsMap,
  doubleStrokesMap,
  shadowMap,
  fireworksMap,
  pointingBackMap,
  pointingForwardMap,
  airQuotesMap,
  manuscriptMap,
  wavyMap,
  doubleUnderlinesMap,
  doubleDoubleDotsMap,
  hourglassMap,
  crypticMap,
  doubleLinesMap,
  censoredMap,
  musicBarsMap,
  allTheWayUpMap,
  cometTailMap,
  wiseCharactersMap,
  hotMap,
  mathSansBoldMap,
  ancientStyle2Map,
  ancientStyle3Map,
  dottedPatternMap,
  foodEmojisMap,
  Code737Map,
  triangleBracketsMap,
  heavyArrowBracketsMap,
  jumpyTextMap,
  tentVillageMap,
  funkyMap,
  colonsMap,
  threeVerticalDotsMap,
  yodaMap,
  fahrenheitMap,
  weirdText1Map,
  fauxCyrillicMap,
  betweenLinesMap,
  lenticularLensMap,
  doubleParenthesesMap,
  bubblyMap,
  iceyMap,
  volumeMap,
  princessStyleMap,
  underscoresMap,
  mysteriousMap,
  fauxEthiopianMap,
  umbrellaStyleMap,
  countryCodesMap,
  rightDirectionAboveMap,
  rightDirectionUnderMap,
  hieroglyphsMap,
  swimmingInTheSeaMap,
  curvedTextMap,
  orthodoxMap,
  currenciesMap,
  stackedAboveMap,
  hebrewMap,
  dashedMap,
  zMathMap,
  drinksEmojisMap,
  weirdText2Map,
  weirdText3Map,
  weirdText4Map,
  wavedTextMap,
  bubblyBubblesMap,
  sweetsEmojisMap,
  squareBracketsMap,
  crossItUnderMap,
  rainOnTopMap,
  bubblesOnTopMap,
  allLowercaseMap,
  allUppercaseMap,
  sentencecaseMap,
  titleCaseMap,
  alternatingCaseMap,
} from "@/libs/fancyfonts";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Nickname() {
  const [inputText, setInputText] = useState("");
  const [saveToLocal, setSaveToLocal] = useLocalStorage("fancyfonts", "");

  const [visibleItems, setVisibleItems] = useState(80);

  type FancyTextType = {
    [key: string]: string;
  };
  const convertToFancyText = (text: string, fancyText: FancyTextType) => {
    return text
      .split("")
      .map((char) => fancyText[char.toUpperCase()] || char)
      .join("");
  };

  const handleInputChange = (e: any) => {
    setInputText(e.target.value);
  };

  const handleCopy = (e: any) => {
    navigator.clipboard.writeText(e.target.innerText);
    toast.success(`Copied`);
  };

  const handleSave = (e: any) => {
    handleCopy(e);
    let fontsArray = [];
    const fonts = e.target.innerText;
    fontsArray.push(fonts);

    setSaveToLocal(fonts);
  };

  const handleClear = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem("fancyfonts");
    }
  };

  const handleLoadMore = () => {
    setVisibleItems((prevCount) => prevCount + 80);
  };

  return (
    <div className="mx-4 lg:max-w-7xl lg:mx-auto">
      <textarea
        onChange={handleInputChange}
        rows={4}
        className="sticky top-0 w-full p-3 rounded-xl shadow border mt-4 focus:outline-sky-400"
        placeholder="Gamer, Fighter, ..."
      />
      {saveToLocal && (
        <section className={`!rounded-xl my-3`}>
          <div className=" flex justify-between px-4 text-2xl py-4 bg-sky-400  !rounded-t-xl text-white">
            <h2 className="not-h2 text-xl">Recently Used</h2>
            <span onClick={handleClear} className="cursor-pointer">
              <FaRegTrashAlt />
            </span>
          </div>
          <div className="py-3 flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-2">
            {saveToLocal.slice(0, 6).map((item: string) => (
              <p
                className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
                onClick={handleCopy}
              >
                {item}
              </p>
            ))}
          </div>
        </section>
      )}
      <section className="text-center my-3 ">
        <div className=" flex justify-between px-4 text-2xl py-4 bg-sky-400  !rounded-t-xl text-white">
          <h2 className="not-h2 text-xl">Popular Nick Name</h2>
        </div>
        {inputText ? (
          <div className="py-3 flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-2">
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              𓂀
              {convertToFancyText(inputText, futureAlienCharMap)}
              𓂀
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ▄︻デ
              {convertToFancyText(inputText, longTextBubblesMap)}
              ══━一
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ★彡[
              {convertToFancyText(inputText, frakturMap)}
              ]彡★
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ꧁༒☬
              {convertToFancyText(inputText, crypticItalicMap)}
              ☬༒꧂
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ꧁༺
              {convertToFancyText(inputText, mathSansMap)}
              ༻꧂
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ꧁𓊈𒆜
              {convertToFancyText(inputText, scriptBoldItalicMap)}
              𒆜𓊉꧂
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ▀▄▀▄▀▄
              {convertToFancyText(inputText, fairytaleMap)}
              ▀▄▀▄▀▄
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              █▓▒­░⡷⠂
              {convertToFancyText(inputText, heartsMap)}
              ⠐⢾░▒▓█
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ミ★
              {convertToFancyText(inputText, emojisTextMap)}
              ★彡
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ╰•★★
              {convertToFancyText(inputText, darkTextBubblesMap)}
              ★★•╯
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ꧁•⊹٭
              {convertToFancyText(inputText, frakturBoldMap)}
              ٭⊹•꧂
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ıllıllı⭐🌟
              {convertToFancyText(inputText, monospaceTextMap)}
              🌟⭐ıllıllı
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ¸.·✩·.¸¸.·¯⍣✩
              {convertToFancyText(inputText, subscriptMap)}
              ✩⍣¯·.¸¸.·✩·.¸
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ¨˜ˆ”°⍣~•✡⊹٭„¸
              {convertToFancyText(inputText, superscriptMap)}
              ¸„٭⊹✡•~⍣°”ˆ˜¨
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ★¸.•☆•.¸★
              {convertToFancyText(inputText, fullWidthMap)}
              ★⡀.•☆•.★
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ◦•●❤♡
              {convertToFancyText(inputText, parenthesisMap)}
              ♡❤●•◦
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              💖´ *•.¸♥¸.•**
              {convertToFancyText(inputText, wizardMap)}
              **•.¸♥¸.•*´💖
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ෴❤️෴
              {convertToFancyText(inputText, lefthandedMap)}
              ෴❤️෴
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ·.★·.·´¯`·.·★
              {convertToFancyText(inputText, darkTextSquaresMap)}
              ★·.·´¯`·.·★.·
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ★¸.•☆•.¸★
              {convertToFancyText(inputText, lightTextSquaresMap)}
              ★⡀.•☆•.★
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ꧁༒☬
              {convertToFancyText(inputText, doubleStruckMap)}
              ☬༒꧂
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ༺{convertToFancyText(inputText, cyrillicMap)}
              ༻ᴳᵒᵈ
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              ༄ᶦᶰᵈ᭄✿
              {convertToFancyText(inputText, mirroredFlippedMap)}࿐
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, japaneseMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, arabicMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, invertedMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, mathSansBoldItalicMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, diagonalStrikesMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, ancientStyle1Map)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, dotSeparatedMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, mixedStyle1Map)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, handwritingMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, acuteAccentsMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, modernGreekMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, underlinedByDashesMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, linedUpMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, mixedStyle2Map)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, upAndDownMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, europeanCharactersMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, asianCharactersMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, monoUpperMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, darkBracketsMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, devlishMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, metalÜmlautsMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, curvyMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, mathSansItalicMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, boxedinMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, arrowsMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, mixedStyle3Map)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, mathItalicMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, bandaidMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, deltaMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, mathStyleMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, windyMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, strikethroughMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, xCrossMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, yataganMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, sovietMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, xeperatedMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, strokedMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, mathBoldMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, linesLinesLinesMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, anchorStyleMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, printStampMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, hookBracketsMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, doubleStrokesMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, shadowMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, fireworksMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, pointingBackMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, pointingForwardMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, airQuotesMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, manuscriptMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, wavyMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, doubleUnderlinesMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, doubleDoubleDotsMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, hourglassMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, crypticMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, doubleLinesMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, censoredMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, musicBarsMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, allTheWayUpMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, cometTailMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, wiseCharactersMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, hotMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, mathSansBoldMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, ancientStyle2Map)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, ancientStyle3Map)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, dottedPatternMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, foodEmojisMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, Code737Map)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, triangleBracketsMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, heavyArrowBracketsMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, jumpyTextMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, tentVillageMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, funkyMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, colonsMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, threeVerticalDotsMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, yodaMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, fahrenheitMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, weirdText1Map)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, fauxCyrillicMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, betweenLinesMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, lenticularLensMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, doubleParenthesesMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, bubblyMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, iceyMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, volumeMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, princessStyleMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, underscoresMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, mysteriousMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, fauxEthiopianMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, umbrellaStyleMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, countryCodesMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, rightDirectionAboveMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, rightDirectionUnderMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, hieroglyphsMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, swimmingInTheSeaMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, curvedTextMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, orthodoxMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, currenciesMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, stackedAboveMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, hebrewMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, dashedMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, zMathMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, drinksEmojisMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, weirdText2Map)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, weirdText3Map)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, weirdText4Map)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, wavedTextMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, bubblyBubblesMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, sweetsEmojisMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, squareBracketsMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, crossItUnderMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, rainOnTopMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, bubblesOnTopMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, allLowercaseMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, allUppercaseMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, sentencecaseMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, titleCaseMap)}
            </p>
            <p
              className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
              onClick={handleSave}
            >
              {convertToFancyText(inputText, alternatingCaseMap)}
            </p>
          </div>
        ) : (
          <div className="py-3 flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-2">
            {nicknames.slice(0, visibleItems).map((item) => (
              <p
                key={item}
                className="not-p text-xl py-4 active:scale-90 transition  bg-white rounded-xl border shadow hover:bg-sky-500 hover:text-white overflow-x-scroll no-scrollbar px-3 cursor-pointer"
                onClick={handleSave}
              >
                {item}
              </p>
            ))}
            {visibleItems < nicknames.length && (
              <button
                onClick={handleLoadMore}
                className="block
                col-span-2
                bg-indigo-500 text-white text-xl px-8 py-2 mt-3 mx-auto rounded-3xl active:scale-90 transition hover:scale-105"
              >
                Load More
              </button>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

let nicknames = [
  "『sʜʀᴋ』•ᴮᴬᴰʙᴏʏツ",
  "꧁༺₦Ї₦ℑ₳༻꧂",
  "༄ᶦᶰᵈ᭄✿Gᴀᴍᴇʀ࿐",
  "꧁༒☬sunny☬༒꧂",
  "×͜×ㅤ𝙰𝙻𝙾𝙽𝙴ㅤ𝙱𝙾𝚈",
  "Sᴋ᭄Sᴀʙɪʀᴮᴼˢˢ",
  "𝓑𝓻𝓸𝓴𝓮𝓷 𝓗𝓮𝓪𝓻𝓽♡",
  "꧁▪ ＲคᎥនтαʀ ࿐",
  "꧁༒☬ᤂℌ໔ℜ؏ৡ☬༒꧂",
  "꧁༺J꙰O꙰K꙰E꙰R꙰༻꧂",
  "░B░O░S░S░",
  "Sᴋ᭄Sᴀʙɪʀᴮᴼˢˢ",
  "✿ • Q U E E N✿ᴳᴵᴿᴸ࿐",
  "꧁༺ ₦Ї₦ℑ₳ ƤℜɆĐ₳₮Øℜ ༻꧂",
  "🅑🅛🅐🅒🅚🅟🅐🅝🅣🅗🅔🅡",
  "꧁ঔৣ☬✞𝓓𝖔𝖓✞☬ঔৣ꧂",
  "꧁☬⋆ТᎻᎬ༒ᏦᎥᏁᏳ⋆☬꧂",
  "༺Leͥgeͣnͫd༻ᴳᵒᵈ",
  "꧁༒Ǥ₳₦ǤֆƬᏋЯ༒꧂",
  "🌻ｓｕｎｆｌｏｗｅｒ🌻",
  "꧁⁣༒𓆩₦ł₦ℑ₳𓆪༒꧂",
  "ᴹᴿメY a h M a t i ☂️",
  "◦♡°Mιℓкѕнαкє°♡◦",
  "Dɪᴏ፝֟sᴀღ᭄",
  "Sᴋ᭄Sᴀʙɪʀᴮᴼˢˢ",
  "𝕯𝖆𝖗𝖐 𝕬𝖓𝖌𝖊𝖑",
  "ＦＺㅤＯＦＩＣＩＡＬ亗",
  "🇦 🇱 🇴 🇳 🇪 🇧 🇴 🇾",
  "Aɴᴋᴜsʜ ᶠᶠ",
  "꧁H҉A҉C҉K҉E҉R҉꧂",
  "𝕯𝖆𝖗𝖐 𝕬𝖓𝖌𝖊𝖑",
  "𖣘ᴰᵃʳᴋ᭄ꮯꮎᏼꭱꭺ🐲࿐",
  "OPㅤㅤVICENZO√",
  "♔〘Ł€Ꮆ€ŇĐ〙♔",
  "➳ᴹᴿメ 𝐋 𝐔 𝐂 𝐈 𝐅 𝐄 𝐑亗",
  "『sᴛʀᴋ』ᴷᴺᴵᴳᴴᵀ༒࿐",
  "Ꭵ°᭄ᶫᵒᵛᵉᵧₒᵤ࿐♥",
  "꧁☠︎₭iℒℒℰℛ☠︎꧂",
  "꧁☯ℙ么ℕⅅ么☯꧂﻿",
  "Ꭺɴᴋᴜꜱʜㅤᶠᶠ",
  "『ƬƘ』 ƬƦΘレ乇メ",
  "꧁༒•TheKing•༒꧂",
  "꧁༺₦Ї₦ℑ₳༻꧂",
  "꧁༒Ɩɛɠɛŋɖʂ༒꧂",
  "Sᴋ᭄Sᴀʙɪʀᴮᴼˢˢ",
  "꧁࿇The༒Killer࿇꧂",
  "꧁࿇ÐɑʀҟƑîʀɛ࿇꧂",
  "🍭ⓢⓦⓔⓔⓣ ⓖⓘⓡⓛ✨",
  "ᴹᴿ乂ｙａｋｕｚａ☂",
  "꧁༺J꙰O꙰K꙰E꙰R꙰༻꧂",
  "༄●⃝ᶫᵒꪜe☯ᴮᴼᵞ࿐",
  "꧁ᶜ͢ᴿ͢ᴬ͢ᶻ͢ᵞ꧂",
  "『sʜʀᴋ』•ᴮᴬᴰʙᴏʏツ",
  "🇦 🇱 🇴 🇳 🇪 🇧 🇴 🇾",
  "모",
  "Ｓㄚ 么 乙 ツ",
  "༺Leͥgeͣnͫd༻ᴳᵒᵈ",
  "ᏞᴇㅤxㅤᏞᴏʀᴅㅤㅤ〆",
  "꧁༺nickname༻꧂",
  "꧁༒☬M̷O̷N̷S̷T̷E̷R̷☬༒꧂",
  "☂",
  "複| ᴋʏᴀᴍɪツ",
  "★ᶦᶰᵈ᭄❂Gᴀᴍᴇʀ࿐",
  "★彡[ᴅᴇᴀᴅ ᴋɪʟʟᴇʀ]彡★",
  "Sᴋ᭄Sᴀʙɪʀᴮᴼˢˢ",
  "━━╬٨ـﮩﮩ❤٨ـﮩﮩـ╬━❤️❥❥═══Aa ══",
  "꧁༺₦Ї₦ℑ₳༻꧂",
  "꧁༺₦Ї₦ℑ₳༻꧂",
  "꧁☆☬κɪɴɢ☬☆꧂",
  "꧁༺J꙰O꙰K꙰E꙰R꙰༻꧂",
  "꧁ঔৣ☬✞𝓓𝖔𝖓✞☬ঔৣ꧂",
  "꧁༒☬☠Ƚ︎ÙçҜყ☠︎☬༒꧂",
  "꧁༒☬ᶜᴿᴬᶻᵞkíllє®™r☬༒꧂",
  "༄●⃝ᶫᵒꪜe☯ᴮᴼᵞ࿐",
  "༺Leͥgeͣnͫd༻ᴳᵒᵈ",
  "Sᴋ᭄Sᴀʙɪʀᴮᴼˢˢ",
  "꧁༒☬₣ℜøźєη•₣ℓα₥єֆ☬༒꧂",
  "▄︻┻═┳一",
  "꧁༒☬ℜ؏αᏞ_ᏦιηGs☬༒꧂",
  "꧁༺₦༏₦ℑ₳༻꧂",
  "☬ᶜᴿᴬᶻᵞkíllєr☬",
  "☆꧁༒ ☬S.H.I.E.L.D ☬༒꧂☆",
  "『ᴹᵛᴸ』•Ҟモれ乙Ö࿐",
  "×͜×ㅤ𝙰𝙻𝙾𝙽𝙴ㅤ𝙱𝙾𝚈 亗",
  "◥꧁དℭ℟Åℤ¥༒₭ÏḼḼ℥℟ཌ꧂◤",
  "★꧁༒☆•฿ŁȺℂ🅺ⲘȺℂ•☆༒꧂★",
  "꧁༒Ǥ₳₦ǤֆƬᏋЯ༒꧂",
  "꧁༒•P£R$£B∆Y∆•༒꧂",
  "乂✰ɢuçí °ɢαͷɢ✰乂",
  "꧁☆☬ ⓋⒾⓇⓊⓈ ⒻⓇⒺⒶⓀ ☬☆꧂",
  "꧁§༺₦Ї₦ℑ₳༻§꧂",
  "꧁༒Sa̶d̶B∆Y༒꧂",
  "ƊᴏㅤσʀㅤƊɪᴇㅤ⓿❸",
  "︻╦̵̵͇̿̿̿̿╤─kïllér",
  "꧁☆•[ҎƦƟ]ҎȽɅȲȄƦ•☆꧂",
  "╰‿╯ㅤϟＴＥＲＲＯＲ†",
  "ᴬᴷ°᭄ʜᴇʀᴏ࿐",
  "꧁☠︎☬༒~VEŇØM~☠︎☬༒꧂",
  "꧁Êž~ᴵᴰLeͥgeͣnͫd☬꧂",
  "༒〖ℳℜ〗ℑᏋғᏒƴ༻",
  "꧁•☬₣ℜøźєη•ᴵᴰ☬•꧂",
  "☬๖ۣۜǤнσsτ༻",
  "꧁H҉A҉C҉K҉E҉R҉꧂L🅴g🅴ήd",
  "★ᶦᶰᵈ᭄❂Gᴀᴍᴇʀ࿐",
  "꧁ ㄎひマ尺乞爪乞 ꧂",
  "꧁༒☬ℜ؏αᏞ_DคℜᏦ☬༒꧂",
  "亗 Ꭲ ɪ ᴛ ᴀ ɴ 亗",
  "︻╦̵̵͇̿̿̿̿╤─",
  "●⃝ᶫᵒꪜe☯ᴳᶹʳᶹ᭄●⁴²⁰",
  "▄︻̷̿┻̿═━一 ʜᴇᴀᴅsʜᴏᴛ",
  "꧁༺Ꭶ₦ЇꝔ€ℜ༻꧂",
  "亗 𝚁 𝙾 𝙻 𝙴 𝚇 ☯︎",
  "꧁༒☬丹ᤢྀᤢྀ刀ᤢྀDᤢྀ尺ᤢྀ乇ᤢྀ丂ᤢྀ☬༒꧂",
  "✿ᎬꪜᎥᏝꦿ☯ᴮᴼᵞ᭄࿐✿",
  "༺ṅȏ༒ɢѧṃє༒ṅȏ༒ʟıғє༻",
  "『 VLT 』°β®Ü¥Π€",
  "Казак болсан + кой",
  "꧁༒ÅŞÄŠŞÏŅŞBŁĂČĶ༒꧂",
  "sv̸iииa ヅ",
  "᚛ᷝ ͣ ͫS℘สrtสŇ ͭ ͪ᚜ͤ",
  "⚡Tekⱥshi⚡",
  "꧁༺çŤрẮχ༻꧂",
  "ᵃᴷᶻ·L̶e̶a̶d̶e̶r̶",
  "♜fιяє♛㉺ℓєgєи∂",
  "◤𝑺 𝑨 𝑻 𝒀 𝑨 𝑴 ◢",
  "╰‿╯ｔｏｘｉｃｏᴳᵒᵈ",
  "꧁ঔৣ☬✞HUNTER BOY✞☬ঔৣ꧂",
  "乂S H I K A R I乂",
  "꧁ঔৣ☠︎ĐÃŘĶ☬H҉A҉C҉K҉E҉R҉☠︎ঔৣ꧂",
  "ś𒆜vinay☄ I dont get this one",
  "〆༆ᎬꪜᎥᏝꦿᴮᴼᵞ᭄〆",
  "ＯＰܔ R e h a n ★࿐",
  "☯ᎡＯᏦ༏★ᴮᴼˢˢ᭄™",
  "꧁༒☬M̷O̷N̷S̷T̷E̷R̷☬༒꧂",
  "༄ᶦᶰᵈ᭄★Dipak⁴³࿐",
  "『ˢᴷ』 • Ҟ モ れ 乙 Ö ࿐",
  "×͜×ㅤ𝙰𝙻𝙾𝙽𝙴ㅤ𝙱𝙾𝚈,ツ",
  "꧁༺Leͥgeͣnͫd༻ᴳᵒᵈ꧂",
  "S〆 / prince ☂((",
  "Казак болсан плюс кой бауырым",
  "🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩",
  "࿐●⃝ᶫᵒꪜe☯『ᴮᴼᵞ』Ɍønɨ᭄●₄₂₀",
  "۝࿐ᎷᎡ✯ⓇⒹⓍ࿐۝",
  "♛N.O.O.B♛",
  "༄ᶦᶰᵈ᭄✿Ibne࿐ᴮᵒˢˢ",
  "꧁ঔৣ☬✞Lēgéñd✞☬ঔৣ꧂",
  "◥꧁དℭ℟Åℤ¥༒₭ÏḼḼ℥℟ཌ",
  "ᴾᴿᴼ꧁Leͥgeͣnͫd꧂ᴳᵒᵈ",
  "ℓєgєи∂",
  "ཧᜰ꙰ꦿ➢₦Ї₦ℑ₳ ༒",
  "ᮙᮟ᮷ᮺ᮲ᮄ",
  "乂ᴵ ᴬᴹ Ƥʸʳᵒ†̶ᵉ̶ᶜ̶ʰ 乂",
  "ϲօɾօղɑ᭄ᵛⁱʳᵘˢ",
  "『VOG』™•☬Ǥнσsτ࿐",
  "₦Ї₦ℑ₳",
  "ཧᜰ꙰ꦿ➢❦︻╦̵̵͇╤─Θ༻",
  "ᴹᴿ°᭄ᴄ͢͢͢ʀɪᴍɪɴᴀʟ࿐™",
  "꧁༒☬ŠCØŔPĨØŊ☬༒꧂",
  "꧁∆Koalaa∆꧂",
  "༄ᶦᶰᵈ᭄❤îben࿐ᴮᵒˢˢ",
  "×͜×",
  "࿇ ͥ ͣ ͫᏕʜɪᴇ༒Ɗσ؏Ḽ•ᴵᴰ࿇",
  "Ꮥᴋ᭄Ꮥᴀʙʙɪʀᴮᵒˢˢ",
  "zєяσ|∆",
  "Y꧁༒☬ℜ؏αᏞ_DคℜᏦ☬༒꧂",
  "꧁𖤍𖤓Ꭾիѻєɳıẋ𖤓𖤍꧂",
  "ᴹᴿ°᭄★ᴋɪɴɢ࿐⓿❼",
  "☠︎𝕯𝖊𝖒𝖔𝖓☠︎",
  "『ꮲꮆ』ㅤＢＡＴＭＡＮㅤ亗",
  "ᴍʀ❖ꜱᴀɴᴋᴇᴛ★࿐",
  "ˣ‿ˣᎠ Ꭼ Ꮩ Ꮖ Ꮮ ˣ‿ˣ",
  "꧁ᴅᴇᴍᴏɴ᭄★ᴀsʜ࿐",
  "么Ꭲ ɪ ᴛ ᴀ ɴㅤ⚓",
  "ᴾʳᵒ ᭄തങ്കു ✰࿐",
  "❖ᴀʀʏᴀɴ_ʏᴛ●࿐",
  "ᏕᎷᎧᎧᏦᏋᏒ.ԿՁՕ™",
  "亗Bꜱ Lᴇɢᴇɴᴅ !!",
  "ঔৣ✞ⓢⓔⓑⓐⓢ✞ঔৣ",
  "꧁𓆩۝₮ĦØɌ۝𓆪꧂",
  "꧁ঔৣ☠︎ᏢᏒᎬᎠᎪᏆᎾᏒᴾᴿᴼシᏦᎥᏞᏞ☠︎ঔৣ꧂™",
  "ª№•乇яŁმИցցﾑ≝",
  "♥ᏒᏦ᭄ᏞꫀꪇꫀꪀᎴ࿐™",
  "●⃝ʀs̸᭄☞ᴳᶹʳᶹ᭄●",
  "ᗫᵃʳk °᭄ᶨ⁰ⁿG࿐",
  "बुलाती हैं मगर जाने का नहीं",
  "●⃝ᶫᵒꪜe☯__û_Báby᭄●⁴³",
  "°꧁༒❦Ⓝⓘⓢⓗⓐ❦༒꧂°",
  "ᴮᴬᴰʙᴏʏ°᭄࿐ӄɨֆɦǟռ࿐ᵒ᭄",
  "꧁千尺乇乇千丨尺乇?꧂",
  "ᴶᴴᴷ᭄साहब जी࿐",
  "ᴰᴿᴷ〲अघौरी࿐❾❾",
  "꧁ঔৣ☬✞King✞☬ঔৣ꧂",
  "꧁ᎬꪜᎥᏝꦿ✿ᴮᴼᵞ᭄࿐❶",
  "░S░a░y░a░n░t░a░n░",
  "㦵ᴳᵒᵈ༒꧁≫ŁlᎥtгᎥχ≪꧂",
  "꧂༒❦☠TERA BAP☠❦༒꧂",
  "°ᴾᴿᴼ°кïʟ̸ʟєя乡",
  "༺🍃☞Žέήό Ŝάмά☪ツ",
  "✞ঔৣ۝ÐâřҟŦﺂℜê۝ঔৣ✞",
  "꧁🇳🇵ᴵᴬᴹArmy_Man™🇳🇵꧂",
  "★VꕯP༄●⃝ᶫᵒꪜe☯ᴮᴼᵞ",
  "✿Ɱའ.ʀᴀʜᴜʟ★࿐",
  "╰‿╯Sᴏʀʀʏ ʙᴀʙʏ★࿐",
  "ᴹᴋ᭄ƁORƝO࿐❹❷⓿",
  "M𝚁᭄•𝙰𝙽𝙰𝙽𝙳......",
  "OƤ. 🅐︎ɴᴋɪᴛ☠︎︎✓",
  "▄︻┻═┳一☬ Kîřăñ ☬",
  "꧁༒•TheKing•༒꧂",
  "Ꮢᴋ᭄Ꮢᴀᴋɪʙ࿐ʏᴛ",
  "░B░O░S░S░ karan",
  "꧁༒☬.ֆɧøø✞êℜ.☬༒꧂",
  "℟ᴋ᭄Aʀɪғᴮᴼˢˢ☆࿐ཽ༵",
  "ᴬᴸᶜ〲❾❾❾+㊊ϡᴶᴿ",
  "ᵛᴵᴾ࿐ⒷⓄⓈⓈ༒",
  "༄ᶦᶰᵈ᭄✿Łëğėňđ࿐",
  "༄ ★°᭄ⁿ™ℑύņάᎥĐ࿐",
  "༄ᶦᶰᵈ᭄ ▄︻┻═┳一ąŋıɱɛʂɧ ࿐",
  "『KING』꧁༒ ☬モザ☬༒꧂",
  "༄ᴮᴳᴹ᭄✿APPU➋",
  "꧁དℭ℟Åℤ¥ ༒ ₭ÏḼḼ℥℟ཌ꧂",
  "ㅤ×͜×〲 ☞ 𝙰𝙻𝙾𝙽𝙴 𝙱𝙾𝚈 🅥",
  "╰‿╯刀Ծᄊ乃尺乇꧂",
  "Fɪɴᴀʟ々Sᴛʀɪᴋᴇ",
  "꧁☬❦ʜᴇ ᏦιηG☬꧂",
  "˙·٠•●༒☬Pꜱʏᴄʜᴏ Kɪʟʟᴇʀ☬༒●•٠·˙",
  "༺✮•°◤ᴰᵉᴬᵈＦḯ❡ｻＴℰℜ◥°•✮༻",
  "༆Ꮢɪᴛɪᴋ᭄Ꮢᴀ͠ᴊ࿐",
  "꧁☬༒𝕻𝖎𝖊𝖗𝖔༒☬꧂",
  "꧁༒☬☠يكوساس☠︎☬༒꧂",
  "ᴴᴵᶻᴷᴵᴬ",
  "ᬊᴘͼκ•ᴰᴿᴬᴳᴼᴺ ꧀ཽ",
  "☬乂J꙰O꙰K꙰E꙰R꙰乂☬",
  "Dᴋ᭄Dipjyotiᴮᴼˢˢ",
  "Rᴅx𒆜ᴅʏɴᴀмo࿐",
  "『 Ｋ丹爪工Ｋ丹乙モ』",
  "Devil ᭄TUSHAR࿐",
  "HF ᭄░P░A░P░U",
  "ΒαβγGΔΝG·ヅ",
  "░M░O░H░A░N░B░O░S░S░",
  "☯ᎡᎾᏦi★ᴮᴼˢˢ᭄℅",
  "༒ᴳᵒᵈɢѧṃє®༒☬¥ï§µ§☬༒",
  "꧁༒☬Kïllér☬༒꧂",
  "꧁༒☬★彡[ᴹᴿ々ʙʀᴏ]彡★☬༒꧂",
  "꧁❀Ꮇ🅐Ꮋ🅐Ꮶ🅐Ꮮ❀࿐",
  "ᴰʷ᭄࿇ எமன்டா࿐",
  "༄ᶠᶠ-ཧ-ＤＥＶＩＬ᭄",
  "ᴹᴋ",
  "ᴹᵏ",
  "么LONEㅤ|ㅤᴹᵏㅤ모",
  "➳ᥫ᭡ᴹᴿ᭄ʙᴇʙᴇsɪᴛᴀ༒♡ᵀღᴀ",
  "XTHA FF",
  "꧁༺J꙰O꙰K꙰E꙰R꙰༻꧂",
  "༄●⃝ᶫᵒꪜe☯ᴮᴼᵞ࿐",
  "『sʜʀᴋ』•ᴮᴬᴰʙᴏʏツ",
  "꧁ᶜ͢ᴿ͢ᴬ͢ᶻ͢ᵞ꧂",
  "🇦 🇱 🇴 🇳 🇪 🇧 🇴 🇾",
  "༺Leͥgeͣnͫd༻ᴳᵒᵈ",
  "Sᴋ᭄Sᴀʙɪʀᴮᴼˢˢ",
  "Ｓㄚ 么 乙 ツ",
  "★ᶦᶰᵈ᭄❂Gᴀᴍᴇʀ࿐",
  "ᏞᴇㅤxㅤᏞᴏʀᴅㅤㅤ〆",
  "ㅤㅤㅤㅤㅤㅤ ㅤㅤㅤㅤ",
  "꧁༺nickname༻꧂",
  "꧁༺₦Ї₦ℑ₳༻꧂",
  "━━╬٨ـﮩﮩ❤٨ـﮩﮩـ╬━❤️❥❥═══Aa ══",
  "☂",
  "複| ᴋʏᴀᴍɪツ",
  "★彡[ᴅᴇᴀᴅ ᴋɪʟʟᴇʀ]彡★",
  "ᴬᴷ°᭄ʜᴇʀᴏ࿐",
  "༄ᶦᶰᵈ᭄✿Gᴀᴍᴇʀ࿐",
  "꧁•ᏒคᎥនтαʀ ࿐",
  "◦♡°Mιℓкѕнαкє°♡◦",
  "ＯＰܔ R e h a n ★࿐",
  "亗",
  "✘",
  "ꫝ",
  "꧁༒☬sunny☬༒꧂",
];
