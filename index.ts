// your logic goes here!
import { load } from "cheerio";

const myHtmlString = '<div class="headline">You are beautiful</div>';

const $ = load(myHtmlString);

const myText = $(".headline").text();

function makeCompliment(name: string): string {
  return `${myText} ${name}`;
}
console.log(makeCompliment("joey"));
