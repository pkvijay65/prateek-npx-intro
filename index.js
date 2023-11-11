#!/usr/bin/env node
function logDetails() {
    const message = "Hey there! I'm Prateek, a full-stack developer.";
    const twitterLink = "https://twitter.com/diltobacchahji";
    const githubLink = "https://github.com/pkvijay65";
    const linkedinLink = "https://www.linkedin.com/in/pv98/";
    const peerlistprofile = "https://peerlist.io/pkvjay";
    const portfolioLink = "https://prateekvijay.vercel.app/"


    const longestLine = Math.max(message.length, twitterLink.length, githubLink.length, linkedinLink.length, peerlistprofile.length, portfolioLink.length);
    const boxPadding = 4; 
    const boxWidth = longestLine + boxPadding;

    function createSeparator() {
        return '+-' + '-'.repeat(boxWidth) + '-+';
    }

    function createLine(text) {
        return '| ' + text.padEnd(boxWidth) + ' |';
    }

    const boxTop = createSeparator();
    const boxBottom = createSeparator();
    const messageLine = createLine(message);
    const twitterLine = createLine(`Twitter: ${twitterLink}`);
    const githubLine = createLine(`GitHub: ${githubLink}`);
    const linkedinLine = createLine(`LinkedIn: ${linkedinLink}`);
    const peerlistLine = createLine(`Peerlist: ${peerlistprofile}`);
    const portfolioLine = createLine(`Portfolio: ${portfolioLink}`);


    const colorfulBox = [
        boxTop,
        messageLine,
        twitterLine,
        githubLine,
        linkedinLine,
        peerlistLine,
        portfolioLine,
        boxBottom,
    ].join('\n');

    console.log(`\x1b[38;5;51m${colorfulBox}\x1b[0m`);
}

logDetails();
