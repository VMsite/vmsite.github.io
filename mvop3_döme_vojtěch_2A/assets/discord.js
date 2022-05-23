const discord = document.querySelector('#discord');
const userName = "Vojtysek#2870";
const discordText = document.querySelector('#discordText');

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

discord.addEventListener("click", () => {
    navigator.clipboard.writeText(userName);
    discordText.innerHTML = "Copied!";
    delay(1000).then(() => 
        discordText.innerHTML = "Discord"
    );
});