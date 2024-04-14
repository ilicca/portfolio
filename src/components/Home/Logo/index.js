import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import LogoA from '../../../assets/images/logo-a.png';
import './index.css';

const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        const tl = anime.timeline({ autoplay: false });

        tl.add({
            targets: bgRef.current,
            opacity: 1,
            duration: 1000,
        }).add({
            targets: outlineLogoRef.current,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 20000,
        }, '-=1000').add({
            targets: solidLogoRef.current,
            opacity: 1,
            duration: 4000,
            delay: 4000,
        });

        tl.play();
    }, []);

    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={LogoA} alt="A" />
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="420.000000pt" height="462.000000pt" viewBox="0 0 420.000000 462.000000"
                preserveAspectRatio="xMidYMid meet">

                <g className="svg-container"
                    transform="translate(0.000000,462.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path ref={outlineLogoRef}
                        d="M1300 4519 c-30 -5 -61 -16 -69 -24 -24 -24 -292 -1114 -471 -1920
-76 -345 -125 -580 -272 -1324 l-13 -64 -195 -47 -195 -48 2 -198 c2 -233 17
-430 43 -566 25 -130 30 -138 85 -138 43 0 45 -1 55 -39 5 -21 16 -43 23 -48
15 -13 1757 63 1770 76 5 5 4 89 -2 202 -16 277 -42 652 -46 667 -3 6 -18 12
-34 12 -16 0 -41 4 -55 10 -21 8 -26 16 -26 44 0 19 -4 37 -9 41 -5 3 -65 13
-133 22 -68 9 -124 17 -126 18 -2 2 9 64 24 139 l27 136 266 0 c146 0 302 -3
347 -6 l80 -7 54 -161 c29 -88 55 -166 57 -172 3 -7 -41 -13 -134 -17 -104 -5
-141 -11 -153 -22 -40 -41 12 -726 65 -851 13 -32 27 -40 84 -46 18 -2 27 -11
33 -34 15 -60 13 -59 342 -57 266 2 890 22 1261 41 l130 7 0 455 0 455 -57 3
-57 3 -3 47 -3 47 -134 5 -134 5 -558 1575 c-307 866 -563 1585 -568 1597 -7
16 -22 25 -50 29 -35 6 -41 11 -59 54 l-20 47 -123 12 c-341 34 -456 42 -714
46 -161 2 -303 0 -335 -6z m535 -19 c150 -9 617 -50 622 -54 2 -1 262 -733
578 -1627 317 -893 580 -1636 586 -1651 l11 -28 174 0 174 0 0 -440 c0 -283
-4 -440 -10 -440 -5 0 -159 -7 -342 -15 -778 -34 -1298 -44 -1327 -26 -32 20
-73 292 -90 591 -11 192 -7 256 17 265 8 3 78 8 154 12 94 4 138 10 135 17 -2
6 -39 115 -81 242 l-77 231 -400 8 c-220 4 -403 5 -406 1 -6 -6 -85 -388 -80
-392 1 -1 92 -14 202 -28 109 -15 200 -28 202 -29 10 -11 59 -834 50 -844 -8
-7 -1738 -85 -1745 -79 -9 10 -34 123 -47 221 -16 124 -42 603 -33 626 4 10
66 29 192 59 103 24 190 47 195 50 5 3 30 118 55 255 88 465 238 1165 396
1835 106 449 297 1211 307 1221 26 26 318 36 588 19z" />
                    <path d="M1851 3023 c-17 -59 -69 -238 -115 -398 l-84 -290 37 -3 c52 -3 479
23 487 31 6 6 -272 744 -286 760 -4 4 -21 -41 -39 -100z m214 -412 c47 -123
83 -227 80 -230 -7 -6 -305 -24 -311 -18 -2 2 25 104 61 228 73 250 74 254 80
248 2 -3 42 -105 90 -228z" />
                </g>
            </svg>
        </div>
    );
}

export default Logo;