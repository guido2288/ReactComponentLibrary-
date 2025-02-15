

const CardIcon = () => {
  return (
    <svg width="72" height="72" className="card-icon" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_dd_1_114)">
    <rect x="12" y="2" width="48" height="48" rx="6" fill="#3F75FE"/>
    <path d="M31 30C28.7909 30 27 28.2091 27 26C27 24.0929 28.3346 22.4976 30.1207 22.097C30.0417 21.7439 30 21.3768 30 21C30 18.2386 32.2386 16 35 16C37.4193 16 39.4373 17.7183 39.9002 20.001C39.9334 20.0003 39.9666 20 40 20C42.7614 20 45 22.2386 45 25C45 27.419 43.2822 29.4367 41 29.9M39 27L36 24M36 24L33 27M36 24L36 36" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <filter id="filter0_dd_1_114" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1_114"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="3"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_114"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feMorphology radius="3" operator="erode" in="SourceAlpha" result="effect2_dropShadow_1_114"/>
    <feOffset dy="10"/>
    <feGaussianBlur stdDeviation="7.5"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
    <feBlend mode="normal" in2="effect1_dropShadow_1_114" result="effect2_dropShadow_1_114"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_114" result="shape"/>
    </filter>
        </defs>
    </svg>
  )
}

export default CardIcon