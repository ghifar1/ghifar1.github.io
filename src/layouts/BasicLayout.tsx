// import { Outlet } from "react-router";
import MenuButton from "../component/MenuButton";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import gsap from "gsap";

export default function BasicLayout() {

    useGSAP(() => {
        const split = new SplitText(".button-menu", {
            type: "lines, words, chars",
            linesClass: "line",
            wordsClass: "word",
            charsClass: "char",
        })
        const tl = gsap.timeline({
            defaults: {
                duration: 0.5,
                ease: "power4.inOut",
            },
            paused: true,
        })
        tl.from(".background-menu", {
            y: -100,
            opacity: 0,
            duration: 0.7,
            ease: "back",
        }, 0)
        tl.from(split.words, {
            y: -100,
            opacity: 0,
            rotation: "random(-80, 80)",
            duration: 0.7,
            ease: "back",
            stagger: 0.15
        }, 0)
        tl.play()
        return () => {
            tl.kill();
            split.revert();
        }
    }, [])

    return (
        <div className="relative">
            <div className="fixed h-svh w-svw bg-blue-500/40 bg-[url('/images/bgtest2.png')] bg-size-[auto_500px] z-0">
            </div>
            <div className="absolute h-full w-full z-[10]">
                <div className="grid grid-cols-12">
                    <div className="relative col-span-12 md:col-span-3 lg:col-span-4 h-svh flex flex-col justify-end md:justify-center items-center gap-2 px-5 py-5">
                        <div className="flex flex-col gap-2 w-full items-center bg-white/20 backdrop-blur-xs rounded-xl p-2 background-menu">
                            <MenuButton className="button-menu">
                                <p>Home</p>
                            </MenuButton>
                            <MenuButton className="button-menu">
                                <p> My Journey</p>
                            </MenuButton>
                            <MenuButton className="button-menu text-nowrap">
                                Experience
                            </MenuButton>
                            <MenuButton className="button-menu">
                                Portfolio
                            </MenuButton>
                        </div>
                    </div>
                    <div className="col-span-1">
                        gg
                    </div>
                </div>
                {/* <Outlet /> */}
            </div>
        </div>
    )
}