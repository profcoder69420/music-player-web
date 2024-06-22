// Reference to elements
const img = document.getElementById("m-img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const lyrics = document.getElementById("lyrics");
// Global var
let isPlaying = false;

// Array music info
const songs = [
  {
    name: "dont-start-now",
    displayName: "Don't Start Now",
    artist: "Dua Lipa",
    lyrics: `
    If you don't wanna see me<br><br>
Did a full 180, crazy<br><br>
Thinking 'bout the way I was<br><br>
Did the heartbreak change me? Maybe<br><br>
But look at where I ended up<br><br>
I'm all good already<br><br>
So moved on, it's scary<br><br>
I'm not where you left me at all, so<br><br>
If you don't wanna see me dancing with somebody<br><br>
If you wanna believe that anything could stop me<br><br>
Don't show up, don't come out<br><br>
Don't start caring about me now<br><br>
Walk away, you know how<br><br>
Don't start caring about me now<br><br>
Aren't you the guy who tried to<br><br>
Hurt me with the word "goodbye"?<br><br>
Though it took some time to survive you<br><br>
I'm better on the other side<br><br>
I'm all good already<br><br>
So moved on, it's scary<br><br>
I'm not where you left me at all, so<br><br>
If you don't wanna see me dancing with somebody<br><br>
If you wanna believe that anything could stop me<br><br>
Don't show up, don't come out<br><br>
Don't start caring about me now<br><br>
Walk away, you know how<br><br>
Don't start caring about me now ('bout me now, 'bout me)<br><br>
Oh, oh<br><br>
Don't come out, out, out<br><br>
Don't show up, up, up<br><br>
Don't start now (oh)<br><br>
Oh, oh<br><br>
Don't come out, out<br><br>
I'm not where you left me at all, so<br><br>
If you don't wanna see me dancing with somebody<br><br>
If you wanna believe that anything could stop me<br><br>
Don't show up (don't show up), don't come out (don't come out)<br><br>
Don't start caring about me now ('bout me now)<br><br>
Walk away (walk away), you know how (you know how)<br><br>
Don't start caring about me now (so)<br><br>
Oh, oh<br><br>
Don't come out, out, out<br><br>
Don't show up, up, up<br><br>
Walk away, walk away (so)<br><br>
Oh, oh<br><br>
Don't come out, out, out<br><br>
Don't show up, up, up<br><br>
Walk away, walk away, oh<br><br>
    `,
  },
  {
    name: "double-take",
    displayName: "double take",
    artist: "Dhruv",
    lyrics: `
I could say I never dare<br><br>
To think about you in that way, but<br><br>
I would be lyin'<br><br>
And I pretend I'm happy for you<br><br>
When you find some dude to take home<br><br>
But I won't deny that<br><br>
In the midst of the crowds<br><br>
In the shapes in the clouds<br><br>
I don't see nobody but you<br><br>
In my rose-tinted dreams<br><br>
Wrinkled silk on my sheets<br><br>
I don't see nobody but you<br><br>
Boy, you got me hooked onto something<br><br>
Who could say that they saw us coming?<br><br>
Tell me<br><br>
Do you feel the love?<br><br>
Spend a summer or a lifetime with me<br><br>
Let me take you to the place of your dreams<br><br>
Tell me<br><br>
Do you feel the love?<br><br>
And I could say I never unzipped<br><br>
Those blue Levi's inside my head<br><br>
But that's far from the truth<br><br>
Don't know what's come over me<br><br>
It seems like yesterday when I said<br><br>
"We'll be friends forever"<br><br>
Constellations of stars<br><br>
Murals on city walls<br><br>
I don't see nobody but you<br><br>
You're my vice, you're my muse<br><br>
You're a nineteenth floor view<br><br>
I don't see nobody but you<br><br>
Boy, you got me hooked onto something<br><br>
Who could say that they saw us coming?<br><br>
Tell me<br><br>
Do you feel the love?<br><br>
Spend a summer or a lifetime with me<br><br>
Let me take you to the place of your dreams<br><br>
Tell me<br><br>
Do you feel the love?<br><br>
Boy, you got me hooked onto something<br><br>
Who could say that they saw us coming?<br><br>
Tell me<br><br>
Do you feel the love?<br><br>
Spend a summer or a lifetime with me<br><br>
Let me take you to the place of your dreams<br><br>
Tell me<br><br>
Do you feel the love?<br><br>
Boy, you got me hooked onto something<br><br>
Who could say that they saw us coming?<br><br>
Tell me<br><br>
Do you feel the love?<br><br>
Spend a summer or a lifetime with me<br><br>
Let me take you to the place of your dreams<br><br>
Tell me<br><br>
Do you feel the love?<br><br>
Do you feel the love?<br><br>
Do you feel the love?<br><br>
Do you feel the love?<br><br>
Do you feel the love?<br><br>
Feel the love<br><br>
Do you feel the love?<br><br>
    `,
  },
  {
    name: "espresso",
    displayName: "Espresso",
    artist: "Sabrina Carpenter",
    lyrics: `
    Now he's thinkin' 'bout me every night, oh<br><br>
Is it that sweet? I guess so<br><br>
Say you can't sleep, baby, I know<br><br>
That's that me, espresso<br><br>
Move it up, down, left, right, oh<br><br>
Switch it up like Nintendo<br><br>
Say you can't sleep, baby, I know<br><br>
That's that me, espresso<br><br>
I can't relate to desperation<br><br>
My 'give a fucks' are on vacation<br><br>
And I got this one boy<br><br>
And he won't stop calling<br><br>
When they act this way<br><br>
I know I got 'em<br><br>
Too bad your ex don't do it for ya<br><br>
Walked in and dream came trued it for ya<br><br>
Soft skin and I perfumed it for ya<br><br>
I know I Mountain Dew it for ya<br><br>
That morning coffee, brewed it for ya<br><br>
One touch and I brand newed it for ya<br><br>
Now he's thinkin' 'bout me every night, oh<br><br>
Is it that sweet? I guess so<br><br>
Say you can't sleep, baby, I know<br><br>
That's that me, espresso<br><br>
Move it up, down, left, right, oh<br><br>
Switch it up like Nintendo<br><br>
Say you can't sleep, baby, I know<br><br>
That's that me, espresso<br><br>
Is it that sweet? I guess so<br><br>
I'm working late 'cause I'm a singer<br><br>
Oh, he looks so cute wrapped around my finger<br><br>
My twisted humor, make him laugh so often<br><br>
My honey bee, come and get this pollen<br><br>
Too bad your ex don't do it for ya<br><br>
Walked in and dream came trued it for ya<br><br>
Soft skin and I perfumed it for ya<br><br>
I know I Mountain Dew it for ya<br><br>
That morning coffee, brewed it for ya<br><br>
One touch and I brand newed it for ya<br><br>
Now he's thinkin' 'bout me every night, oh<br><br>
Is it that sweet? I guess so<br><br>
Say you can't sleep, baby, I know<br><br>
That's that me, espresso<br><br>
Move it up, down, left, right, oh<br><br>
Switch it up like Nintendo<br><br>
Say you can't sleep, baby, I know<br><br>
That's that me, espresso<br><br>
He's thinkin' 'bout me every night, oh<br><br>
Is it that sweet? I guess so<br><br>
Say you can't sleep, baby, I know<br><br>
That's that me, espresso<br><br>
Move it up, down, left, right, oh<br><br>
Switch it up like Nintendo<br><br>
Say you can't sleep, baby, I know<br><br>
That's that me, espresso<br><br>
Is it that sweet? I guess so<br><br>
That's that me, espresso<br><br>
    `,
  },
  {
    name: "lay-all-your-love-on-me",
    displayName: "Lay All Your Love On Me",
    artist: "ABBA",
    lyrics: `
    I wasn't jealous before we met<br><br>
Now every man that I see is a potential threat<br><br>
And I'm possessive, it isn't nice<br><br>
You've heard me saying that smoking was my only vice<br><br>
But now it isn't true<br><br>
Now everything is new<br><br>
And all I've learned<br><br>
Has overturned<br><br>
I beg of you<br><br>
Don't go wasting your emotion<br><br>
Lay all your love on me<br><br>
It was like shooting a sitting duck<br><br>
A little small talk, a smile, and baby, I was stuck<br><br>
I still don't know what you've done with me<br><br>
A grown-up woman should never fall so easily<br><br>
I feel a kind of fear<br><br>
When I don't have you near<br><br>
Unsatisfied<br><br>
I skip my pride<br><br>
I beg you dear<br><br>
Don't go wasting your emotion<br><br>
Lay all your love on me<br><br>
Don't go sharing your devotion<br><br>
Lay all your love on me<br><br>
I've had a few little love affairs<br><br>
They didn't last very long and they've been pretty scarce<br><br>
I used to think that was sensible<br><br>
It makes the truth even more incomprehensible<br><br>
'Cause everything is new<br><br>
And everything is you<br><br>
And all I've learned<br><br>
Has overturned<br><br>
What can I do?<br><br>
Don't go wasting your emotion<br><br>
Lay all your love on me<br><br>
Don't go sharing your devotion<br><br>
Lay all your love on me<br><br>
Don't go wasting your emotion<br><br>
Lay all your love on me<br><br>
Don't go sharing your devotion<br><br>
Lay all your love on me<br><br> 
    `,
  },
  {
    name: "rather-be",
    displayName: "Rather Be",
    artist: "Clean Bandit, Jess Glyne",
    lyrics: `
We're a thousand miles from comfort, <br><br>
We have travelled land and sea, <br><br>
But as long as you are with me, <br><br>
There's no place Ɩ'd rather be. <br><br>
I would wait forever, <br><br>
Exalted in the scene, <br><br>
As long as Ɩ am with you, <br><br>
My heart continues to beat. <br><br>
With every step we take, <br><br>
Kyoto to the bay, <br><br>
Strolling so casually, <br><br>
We're different and the same <br><br>
Get you another name <br><br>
Switch up the battery <br><br>
If you gave me a chance <br><br>
I would take it <br><br>
It's a shot in the dark <br><br>
But Ɩ'll make it <br><br>
Know with all of your heart <br><br>
You can't shake me <br><br>
When Ɩ am with you <br><br>
There's no place Ɩ'd rather be. <br><br>
No no no no <br><br>
No place Ɩ'd rather be <br><br>
We set out on a mission to find our inner peace <br><br>
Make it everlasting <br><br>
So nothing's incomplete <br><br>
It's easy being with you, sacred simplicity. <br><br>
As long as we're together, there's no place Ɩ'd rather be <br><br>
With every step we take, <br><br>
Kyoto to the bay, <br><br>
Strolling so casually, <br><br>
We're different and the same <br><br>
Get you another name <br><br>
Switch up the battery <br><br>
If you gave me a chance <br><br>
I would take it <br><br>
It's a shot in the dark <br><br>
But Ɩ'll make it <br><br>
Know with all of your heart <br><br>
You can't shake me <br><br>
When Ɩ am with you <br><br>
There's no place Ɩ'd rather be. <br><br>
No no no no <br><br>
No place Ɩ'd rather be <br><br>
When Ɩ am with you <br><br>
There's no place Ɩ'd rather be <br><br>
    `,
  },
];

// spin thing
document
  .getElementById(`m-img`)
  .animate([{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }], {
    duration: 10000,
    easing: "linear",
    iterations: Infinity,
  });

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// Load songs
let iSong = 0;

function loadSong() {
  title.textContent = songs[iSong].displayName;
  artist.textContent = songs[iSong].artist;
  lyrics.innerHTML = songs[iSong].lyrics;
  music.src = `music/${songs[iSong].name}.mp3`;
  img.src = `img/${songs[iSong].name}.png`;
  if (document.readyState === "complete") playSong();
}

// Next
nextBtn.addEventListener("click", () => {
  iSong++;
  if (iSong >= songs.length) iSong = 0;
  loadSong();
});

// Next
prevBtn.addEventListener("click", () => {
  iSong--;
  if (iSong < 0) iSong = songs.length - 1;
  loadSong();
});

// Audio event handler
function timeToStr(time) {
  const min = Math.floor(time / 60);
  const sec = Math.floor(time - min * 60);
  return `${min}:${sec < 10 ? `0${sec}` : sec}`;
}

//time tracker
function timeTracker() {
  currentTime.textContent = timeToStr(music.currentTime);
  const width = (100 * music.currentTime) / music.duration;
  progress.style.width = `${width}%`;
}

// Get duration after loaded
music.addEventListener("canplay", () => {
  duration.textContent = timeToStr(music.duration);
  timeTracker();
});

// Update current time
music.addEventListener("timeupdate", () => {
  if (isPlaying) timeTracker();
});

// Auto next
music.addEventListener("ended", () => {
  nextBtn.click();
});

// Handle Click on Progress bar
progressContainer.addEventListener("click", (event) => {
  const percentage = event.offsetX / progressContainer.offsetWidth;
  const time = music.duration * percentage;
  console.log(event.offsetX);
  music.currentTime = time;
  timeTracker();
});

