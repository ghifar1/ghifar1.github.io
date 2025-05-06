import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

type MenuButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    variant?: "active" | "inactive";
}


export default function MenuButton({ children, className, variant = "inactive" }: MenuButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const refTween = useRef<GSAPTween>(null);
    useEffect(() => {
        refTween.current = gsap.to(ref.current, {
            width: "100%",
            backgroundColor: "#fd7e14",
            paused: true,
            duration: 0.5,
            fontSize: "1.25rem",
            marginTop: "15px",
            marginBottom: "15px",
            fontWeight: "600",
            // backdropFilter: "blur(10px)",
            ease: "power4.inOut",
        })

        return () => {
            refTween.current?.kill();
        }
    }, [])
    const onMouseEnterHandler = () => {
        refTween.current?.play();
    };

    const onMouseLeaveHandler = () => {
        refTween.current?.reverse();
    };

    return (
        // <button className="bg-white/30 text-white rounded-lg p-2 hover:bg-jumbo-yellow/90 backdrop-blur-xs transition-colors duration-200 w-full">
        //     {children}
        // </button>
        <button ref={ref} className={clsx("text-white rounded-xl py-2 m-0 w-fit", variant == "inactive" ? "text-sm" : "text-xl", className)} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            {children}
        </button>
    )
}