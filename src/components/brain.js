import React from 'react'

const Brain = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
    <defs>
      <path id="brainOutline" d="M240 380
          C160 260, 210 120, 360 120
        C430 110, 520 140, 580 180
        C640 230, 760 220, 840 170
        C920 130, 990 160, 1010 240
        C1040 340, 940 420, 910 460
        C880 520, 760 590, 600 610
        C480 630, 340 600, 260 540
        C220 510, 200 460, 240 380 Z" />

   
    <g id="gear">
      <circle cx="0" cy="0" r="38" fill="none" stroke="#111" stroke-width="3" />
      <circle cx="0" cy="0" r="20" fill="none" stroke="#111" stroke-width="2" />
      <g id="teeth" fill="#111">
        <rect x="-3" y="-46" width="6" height="14" rx="1" />
        <rect x="-3" y="-46" width="6" height="14" rx="1" transform="rotate(30)" />
        <rect x="-3" y="-46" width="6" height="14" rx="1" transform="rotate(60)" />
        <rect x="-3" y="-46" width="6" height="14" rx="1" transform="rotate(90)" />
        <rect x="-3" y="-46" width="6" height="14" rx="1" transform="rotate(120)" />
        <rect x="-3" y="-46" width="6" height="14" rx="1" transform="rotate(150)" />
        <rect x="-3" y="-46" width="6" height="14" rx="1" transform="rotate(180)" />
        <rect x="-3" y="-46" width="6" height="14" rx="1" transform="rotate(210)" />
        <rect x="-3" y="-46" width="6" height="14" rx="1" transform="rotate(240)" />
        <rect x="-3" y="-46" width="6" height="14" rx="1" transform="rotate(270)" />
        <rect x="-3" y="-46" width="6" height="14" rx="1" transform="rotate(300)" />
        <rect x="-3" y="-46" width="6" height="14" rx="1" transform="rotate(330)" />
      </g>
      <g stroke="#111" stroke-width="2" fill="none">
        <line x1="0" y1="0" x2="0" y2="-20" />
        <line x1="0" y1="0" x2="17" y2="-10" transform="rotate(60)" />
        <line x1="0" y1="0" x2="-17" y2="-10" transform="rotate(-60)" />
      </g>
    </g>

 
    <clipPath id="brainClip">
      <use href="#brainOutline" />
    </clipPath>
  </defs>


  <defs>
    <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#e9e9ec" />
      <stop offset="1" stop-color="#d7c6c6" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="1200" height="800" fill="url(#bg)" />

  
  <use href="#brainOutline" fill="none" stroke="#111" stroke-width="4" opacity="0.95" />

\
  <g clip-path="url(#brainClip)">
    <g transform="translate(360,220) scale(1.0)">
      <use href="#gear" />
    </g>

    <g transform="translate(480,170) scale(1.4) rotate(18)">
      <use href="#gear" />
    </g>

    <g transform="translate(580,250) scale(1.6) rotate(-12)">
      <use href="#gear" />
    </g>

    <g transform="translate(720,220) scale(1.1) rotate(6)">
      <use href="#gear" />
    </g>

    <g transform="translate(300,300) scale(0.9) rotate(30)">
      <use href="#gear" />
    </g>

    <g transform="translate(420,360) scale(0.7) rotate(-40)">
      <use href="#gear" />
    </g>

    <g transform="translate(540,420) scale(0.6) rotate(10)">
      <use href="#gear" />
    </g>

    <g transform="translate(680,320) scale(0.5) rotate(70)">
      <use href="#gear" />
    </g>

    <g transform="translate(760,400) scale(0.8) rotate(22)">
      <use href="#gear" />
    </g>

    <g transform="translate(260,430) scale(0.6) rotate(-18)">
      <use href="#gear" />
    </g>

    <g transform="translate(840,260) scale(0.5) rotate(-55)">
      <use href="#gear" />
    </g>

    <g transform="translate(640,480) scale(0.45) rotate(40)">
      <use href="#gear" />
    </g>

    <g transform="translate(520,320) scale(0.35) rotate(120)">
      <use href="#gear" />
    </g>

    <g transform="translate(430,240) scale(0.28) rotate(210)">
      <use href="#gear" />
    </g>

    <g transform="translate(720,160) scale(0.22) rotate(-10)">
      <use href="#gear" />
    </g>

    <g transform="translate(600,200) scale(0.18) rotate(14)">
      <use href="#gear" />
    </g>
    <g transform="translate(660,200) scale(0.12) rotate(80)">
      <use href="#gear" />
    </g>
    <g transform="translate(520,260) scale(0.14) rotate(190)">
      <use href="#gear" />
    </g>

    <g stroke="#111" stroke-width="3" stroke-linecap="round">
      <line x1="360" y1="220" x2="480" y2="170" />
      <line x1="480" y1="170" x2="580" y2="250" />
      <line x1="420" y1="360" x2="540" y2="420" />
      <line x1="640" y1="480" x2="760" y2="400" />
    </g>

    <g transform="translate(320,260) scale(0.28) rotate(10)"><use href="#gear" /></g>
    <g transform="translate(360,320) scale(0.22) rotate(-30)"><use href="#gear" /></g>
    <g transform="translate(420,200) scale(0.24) rotate(40)"><use href="#gear" /></g>
    <g transform="translate(700,280) scale(0.18) rotate(100)"><use href="#gear" /></g>
    <g transform="translate(880,340) scale(0.3) rotate(-20)"><use href="#gear" /></g>
    <g transform="translate(520,500) scale(0.25) rotate(70)"><use href="#gear" /></g>
    <g transform="translate(310,470) scale(0.2) rotate(-10)"><use href="#gear" /></g>

  </g>

  <g fill="none" stroke="#111" stroke-width="2" opacity="0.9">
    <circle cx="480" cy="170" r="54" />
    <circle cx="580" cy="250" r="64" />
    <circle cx="360" cy="220" r="46" />
  </g>

</svg>

)
export default Brain