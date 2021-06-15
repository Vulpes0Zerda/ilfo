import React from 'react'

const CloseButton = () => {
    return (
    <button className="nav__bar__close" onClick="toggleBox('nav', 'navSlide', 'navBox', '-130%')">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            clipRule="evenodd"
            viewBox="0 0 657 657"
        >
            <path
            fill="#D4D4D4"
            fillRule="nonzero"
            d="M690.6 690.6v-333c0-8 2.4-14.6 7.2-19.8 4.8-5.2 11.6-7.8 20.4-7.8h63.6c8.8 0 15.6 2.6 20.4 7.8 4.8 5.2 7.2 11.8 7.2 19.8v333h333c8 0 14.6 2.4 19.8 7.2 5.2 4.8 7.8 11.6 7.8 20.4v63.6c0 8.8-2.6 15.6-7.8 20.4-5.2 4.8-11.8 7.2-19.8 7.2h-333v333c0 8-2.4 14.6-7.2 19.8-4.8 5.2-11.6 7.8-20.4 7.8h-63.6c-8.8 0-15.6-2.6-20.4-7.8-4.8-5.2-7.2-11.8-7.2-19.8v-333h-333c-8 0-14.6-2.4-19.8-7.2-5.2-4.8-7.8-11.6-7.8-20.4v-63.6c0-8.8 2.6-15.6 7.8-20.4 5.2-4.8 11.8-7.2 19.8-7.2h333z"
            transform="translate(-421.601 -421.601) rotate(-45 750 750)"
            ></path>
        </svg>
    </button>
    )
}

export default CloseButton

