import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    duration?: number;
    variant?: "fade-up" | "fade-in" | "zoom-in" | "elastic-text";
}

export const Reveal = ({
    children,
    width = "fit-content",
    className = "",
    delay = 0,
    duration = 0.5,
    variant = "fade-up",
}: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const variants: Record<string, Variants> = {
        "fade-up": {
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
        },
        "fade-in": {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        "zoom-in": {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
        },
        "elastic-text": {
            hidden: { opacity: 0, y: 20 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                },
            },
        },
    };

    return (
        <div ref={ref} style={{ width }} className={className}>
            <motion.div
                variants={variants[variant]}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay }}
                style={{ height: "100%" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
