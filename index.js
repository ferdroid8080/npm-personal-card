#!usr/bin/env node

const { white, bgGreen, green, bold, blue, yellow } = require('colorette');
const boxen = require('boxen');

const work = white(`${blue("Ferdinania")} - Fullstack Web Developer`);
const twitter = green("https://twitter.com/andresf_mj");
const github = green("https://github.com/andresfmj");
const site = green("https://ferdinania.com");
const npx = green("npx andresfmj");

const newline = "\n";
const headline = `            ${bgGreen(`${bold(white("Andres Fernando --"))} ${bold(yellow("andresfmj"))}`)}`;
const workLine = `${white(bold("       Work at:"))}         ${work}`;
const twitterLine = `${white(bold("      Tweet me:"))}         ${twitter}`;
const githubLine = `${white(bold("GitHub Profile:"))}         ${github}`;
const webLine = `${white(bold("       Website:"))}         ${site}`;
const cardCmd = `${white(bold("Show this card:"))}         ${npx}`;

const output = 
    headline +
    newline +
    newline +
    workLine +
    newline +
    twitterLine +
    newline +
    githubLine +
    newline +
    webLine +
    newline +
    newline +
    cardCmd;

console.log(boxen(output, { 
    padding: 1,
    borderColor: 'green',
    borderStyle: 'round',
    margin: 1
}));
