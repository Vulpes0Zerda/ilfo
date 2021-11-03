import { useContext } from 'react'
import { AnimationContext } from '../../GlobalContext'
import { motion } from 'framer-motion'

const MenuLogo = () => {
    const {
        state: { menuState },
        iconFill,
    } = useContext(AnimationContext)
    return (
        <motion.svg
            className="header__menuButton__icon"
            viewBox="0 0 1500 1500"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit={2}
            animate={menuState}
            variants={iconFill}
        >
            <g transform="matrix(1.78571,0,0,1.78571,-589.286,-589.286)">
                <path
                    id="--mid"
                    d="M357.6,690.6L1142.4,690.6C1150.4,690.6 1157,693 1162.2,697.8C1167.4,702.6 1170,709.4 1170,718.2L1170,781.8C1170,790.6 1167.4,797.4 1162.2,802.2C1157,807 1150.4,809.4 1142.4,809.4L357.6,809.4C349.6,809.4 343,807 337.8,802.2C332.6,797.4 330,790.6 330,781.8L330,718.2C330,709.4 332.6,702.6 337.8,697.8C343,693 349.6,690.6 357.6,690.6Z"
                    style={{
                        fillRule: 'nonzero',
                    }}
                />
                <g id="--top" transform="matrix(1,0,0,1,7.72579e-07,-268.999)">
                    <path
                        d="M357.6,690.6L1142.4,690.6C1150.4,690.6 1157,693 1162.2,697.8C1167.4,702.6 1170,709.4 1170,718.2L1170,781.8C1170,790.6 1167.4,797.4 1162.2,802.2C1157,807 1150.4,809.4 1142.4,809.4L357.6,809.4C349.6,809.4 343,807 337.8,802.2C332.6,797.4 330,790.6 330,781.8L330,718.2C330,709.4 332.6,702.6 337.8,697.8C343,693 349.6,690.6 357.6,690.6Z"
                        style={{
                            fillRule: 'nonzero',
                        }}
                    />
                </g>
                <g
                    id="--bottom"
                    transform="matrix(1,0,0,1,-3.41061e-13,268.999)"
                >
                    <path
                        d="M357.6,690.6L1142.4,690.6C1150.4,690.6 1157,693 1162.2,697.8C1167.4,702.6 1170,709.4 1170,718.2L1170,781.8C1170,790.6 1167.4,797.4 1162.2,802.2C1157,807 1150.4,809.4 1142.4,809.4L357.6,809.4C349.6,809.4 343,807 337.8,802.2C332.6,797.4 330,790.6 330,781.8L330,718.2C330,709.4 332.6,702.6 337.8,697.8C343,693 349.6,690.6 357.6,690.6Z"
                        style={{
                            fillRule: 'nonzero',
                        }}
                    />
                </g>
            </g>
        </motion.svg>
    )
}

export default MenuLogo
