import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
    LatoReguler,
    PoppinsMedium,
    PoppinsSemiBold,
    PoppinsBold,
  } from "@/fonts/font";

// Import dependencies
import { useTypewriter } from "react-simple-typewriter";

// import { PoppinsBold, LatoBold, PoppinsSemiBold } from "@/fonts/font";
// import styles from "./hero.module.css";

export const JoinUs = ()=> {
    return(
<div id="NewRootRoot" class="flex flex-col w-full">
    <div class="bg-[#53346a] flex flex-col justify-between min-h-[900px] items-center pt-16 pb-12 px-4 md:pb-64 md:px-32">
    <div class="flex flex-col gap-6 md:gap-10 w-full md:w-2/3 items-center">
        <div class="text-center text-2xl md:text-4xl font-bold text-white">
            Join the Future of Work
        </div>
        <div class="self-stretch relative flex flex-col items-start">
            <div class="text-center text-lg md:text-xl text-[#dbabc4] md:absolute top-0 left-0 w-full z-0">
                We promote remote work, offering a flexible, supportive environment
                that empowers our team to thrive in both their careers and personal
                lives while maintaining work-life harmony.
            </div>
        </div>
    </div>
        <div class="self-stretch flex flex-col gap-6 md:gap-8 md:flex-row justify-center items-start space-y-6 md:space-y-0 space-x-0 md:space-x-4">
            <div class="flex-1 w-full md:w-[calc(33.3333% - 1rem)]">
                <div class="shadow-[3px_4px_4px_0px_#403845] bg-[rgba(66,_66,_70,_0.5)] flex flex-col gap-6 h-[300px] md:h-[313px] items-center pl-4 pr-4 py-6 rounded-lg">
                    <div class="bg-[#e1ab20] flex flex-col justify-center w-10 h-10 shrink-0 items-center rounded-lg">
                        <img src="https://file.rendit.io/n/b7q9WNoWWvSC3xG0HnIB.svg" id="IconLaptopPhone1" class="w-6" />
                    </div>
                    <div class="text-center text-lg md:text-xl font-bold text-white">
                        Flexible Remote Work
                    </div>
                    <div class="text-justify text-[#dbabc4]">
                        We recognize the importance of flexibility in today's dynamic work
                        landscape. When you join us, you'll have the opportunity to embrace
                        remote work, allowing you to choose where you work best.
                    </div>
                </div>
            </div>
            <div class="flex-1 w-full md:w-[calc(33.3333% - 1rem)]">
                <div class="shadow-[3px_4px_4px_0px_#403845] bg-[rgba(66,_66,_70,_0.5)] flex flex-col gap-6 h-[300px] md:h-[313px] items-center pl-4 pr-4 py-6 rounded-lg">
                    <div class="bg-[#e1ab20] flex flex-col w-10 h-10 shrink-0 items-center py-2 rounded-lg">
                        <img src="https://file.rendit.io/n/zdTpfbYUiBfxRBhS8xje.svg" id="EmojiCollaboration" class="w-6" />
                    </div>
                    <div class="text-center text-lg md:text-xl font-bold text-white">
                        Supportive Work Environment
                    </div>
                    <div class="text-justify text-[#dbabc4]">
                        When you become a part of RX Labs, you enter a welcoming and
                        collaborative work environment. Our team members are not just
                        colleagues; they're partners in your success journey. You'll find
                        mentors, collaborators, and friends who are eager to help you grow.
                    </div>
                </div>
            </div>
            <div class="flex-1 w-full md:w-[calc(33.3333% - 1rem)]">
                <div class="shadow-[3px_4px_4px_0px_#403845] bg-[rgba(66,_66,_70,_0.5)] flex flex-col gap-6 h-[300px] md:h-[313px] items-center pl-4 pr-4 py-6 rounded-lg">
                    <div class="bg-[#e1ab20] flex flex-col w-10 h-10 shrink-0 items-center pl-2 py-2 rounded-lg">
                        <img src="https://file.rendit.io/n/uWQIoAXSt0vRRvtQZiBm.svg" id="IconWork" class="w-6 mx-[-1] items-center"/>
                    </div>
                    <div class="text-center text-lg md:text-xl font-bold text-white">
                        Work Life Harmony
                    </div>
                    <div class="text-justify text-[#dbabc4]">
                        At RX Labs, we value work-life balance. Join us for a workplace that
                        supports your personal life, encourages self-care, and provides the
                        necessary backing to confidently manage your responsibilities. We're
                        committed to your holistic well-being.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};