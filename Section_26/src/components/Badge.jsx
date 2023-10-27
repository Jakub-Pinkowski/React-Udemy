import { motion } from 'framer-motion'

export default function Badge({ caption }) {
    return (
        <motion.span
            className="badge"
            animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
                borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                transition: {
                    duration: 1.5,
                    ease: 'easeInOut',
                    times: [0, 0.2, 0.5, 0.8, 1],
                    loop: Infinity,
                    repeatDelay: 1,
                },
            }}
        >
            {caption}
        </motion.span>
    )
}
