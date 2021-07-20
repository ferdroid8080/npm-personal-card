#!/usr/bin/env node

const { 
    white, green, bold, 
    yellow, cyan, bgBlueBright 
} = require('colorette');
const boxen = require('boxen');

const work = white(`${yellow("Ferudinato")} - ${cyan(`Frontend Web Developer`)}`);
const twitter = green("https://twitter.com/ferdr0id8o8o");
const github = green("https://github.com/ferdroid8080");
const site = green("https://ferudinato.com");
const npx = green("npx ferdroid8080");

const newline = "\n";
const headline = `            ${bgBlueBright(bold(`${yellow("   Ferdroid8080")} - ${white("Andres Fernando   ")}`))} 👨🏻‍💻`;
const workLine = `${white(bold("       Work at:"))}         ${work}`;
const twitterLine = `${white(bold("      Tweet me:"))}         ${twitter}`;
const githubLine = `${white(bold("        GitHub:"))}         ${github}`;
const webLine = `${white(bold("       Website:"))}         ${site}`;
const card = `${white(bold("     This card:"))}         ${npx} 👀`;

const output = `${headline}
${newline}
${workLine}
${twitterLine}
${githubLine}
${webLine}
${newline}
${card}
`;


console.log(boxen(output, { 
    padding: 1,
    borderColor: 'green',
    borderStyle: 'round',
    margin: 0.6
}));
