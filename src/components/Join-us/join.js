import React, { useState, useEffect, useRef } from "react";
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
<section class="bg-[#53346a] md:h-full flex items-center text-gray-600">
        <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-12">
                <h1 class="text-center text-2xl md:text-4xl font-bold text-white mb-8">Join the Future of Work</h1>
                <div class="self-center relative flex flex-col items-start">
                    <p class="text-center text-lg md:text-xl text-[#dbabc4] left-0 w-full md:w-2/3 mx-auto"
                    style={LatoReguler.style}>We promote remote work, offering a flexible, supportive environment
                        that empowers our team to thrive in both their careers and personal
                        lives while maintaining work-life harmony.</p>
                </div>
            </div>
            <div class="flex flex-wrap -m-4">
                <div class="p-4 sm:w-1/2 lg:w-1/3 mb-8">
                    <div class="h-full shadow-[3px_4px_4px_0px_#403845] bg-[rgba(66,_66,_70,_0.5)] rounded-lg overflow-hidden">
                        <div class="p-6">
                            <div class="bg-[#e1ab20] flex justify-center w-10 h-10 items-center rounded-full mx-auto mb-4">
                            <img src="https://file.rendit.io/n/b7q9WNoWWvSC3xG0HnIB.svg" id="IconLaptopPhone1" class="w-6" />
                            </div>
                            <h1 class=" text-center text-2xl font-semibold text-white mb-3"
                            style={PoppinsSemiBold.style}>Flexible Remote Work</h1>
                            <p class="leading-relaxed mb-3 text-[#dbabc4]"
                            style={LatoReguler.style}>We recognize the importance of flexibility in today's dynamic work
                            landscape. When you join us, you'll have the opportunity to embrace
                            remote work, allowing you to choose where you work best.</p>
                        </div>
                    </div>
                </div>
                <div class="p-4 sm:w-1/2 lg:w-1/3 mb-8">
                    <div class="h-full shadow-[3px_4px_4px_0px_#403845] bg-[rgba(66,_66,_70,_0.5)] rounded-lg overflow-hidden">
                        <div class="p-6">
                            <div class="bg-[#e1ab20] flex justify-center w-10 h-10 items-center rounded-full mx-auto mb-4">
                            <img src="https://file.rendit.io/n/zdTpfbYUiBfxRBhS8xje.svg" id="EmojiCollaboration" class="w-6" />
                            </div>
                            <h1 class=" text-center text-2xl font-semibold text-white mb-3"
                            style={PoppinsSemiBold.style}>Supportive Work Environment</h1>
                            <p class="leading-relaxed mb-3 text-[#dbabc4]"
                            style={LatoReguler.style}>When you become a part of RX Labs, you enter a welcoming and
                        collaborative work environment. Our team members are not just
                        colleagues; they're partners in your success journey. You'll find
                        mentors, collaborators, and friends who are eager to help you grow.</p>
                        </div>
                    </div>
                </div>
                <div class="p-4 sm:w-1/2 lg:w-1/3 mb-8">
                    <div class="h-full shadow-[3px_4px_4px_0px_#403845] bg-[rgba(66,_66,_70,_0.5)] rounded-lg overflow-hidden">
                        <div class="p-6">
                            <div class="bg-[#e1ab20] flex justify-center w-10 h-10 items-center rounded-full mx-auto mb-4">
                            <img src="https://file.rendit.io/n/uWQIoAXSt0vRRvtQZiBm.svg" id="IconWork" class="w-6" />
                            </div>
                            <h1 class=" text-center text-2xl font-semibold text-white mb-3"
                            style={PoppinsSemiBold.style}>Work Life Harmony</h1>
                            <p class="leading-relaxed mb-3 text-[#dbabc4]"
                            style={LatoReguler.style}>At RX Labs, we value work-life balance. Join us for a workplace that
                        supports your personal life, encourages self-care, and provides the
                        necessary backing to confidently manage your responsibilities. We're
                        committed to your holistic well-being.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    );
};
