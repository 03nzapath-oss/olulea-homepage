import React from 'react';
import SectionTitle from '../components/SectionTitle';

const EnglishMenu: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-12 md:py-24 max-w-3xl">
            <SectionTitle en="FOR VISITORS" ja="English Menu" />

            {/* Intro */}
            <div className="mb-16 text-center space-y-6">
                <h2 className="text-2xl md:text-3xl text-accent font-light">Japanese Grooming & Relaxation</h2>
                <div className="text-text space-y-4 leading-relaxed text-sm md:text-base">
                    <p>This page is for visitors who want to relax and enjoy a Japanese-style experience.</p>
                    <p className="font-medium">Quiet, clean, and calm barber services in Japan.</p>
                </div>
            </div>

            {/* Menu Sections */}
            <div className="space-y-12">

                {/* Menu 1 */}
                <div className="bg-white border border-accent/20 p-6 md:p-8 rounded-sm shadow-sm relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-accent border border-accent px-4 py-1 text-sm rounded-full shadow-sm font-medium whitespace-nowrap">
                        ① Relaxation / No Haircut
                    </div>
                    <div className="mb-6 mt-4">
                        <h3 className="text-xl md:text-2xl font-bold text-text mt-2 mb-1">Head & Face Relaxation</h3>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-accent/20 pb-4 mb-4 gap-2">
                        <div className="text-lg font-medium text-accent">60 min</div>
                        <div className="text-2xl font-bold text-text">¥9,000</div>
                    </div>

                    <ul className="space-y-2 mb-6 text-text list-disc list-inside marker:text-accent text-sm md:text-base">
                        <li>Head massage</li>
                        <li>Facial massage</li>
                        <li>Warm towels</li>
                        <li>No haircut</li>
                    </ul>

                    <p className="text-sm text-subtext bg-secondary/50 p-4 rounded leading-relaxed">
                        Experience the luxury of a Japanese barber without changing your hairstyle.
                    </p>
                </div>

                {/* Menu 2 */}
                <div className="bg-white border-2 border-accent/40 p-6 md:p-8 rounded-sm shadow-lg relative transform md:scale-105 z-10">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 text-sm rounded-full shadow-sm font-medium whitespace-nowrap">
                        ② Main / Most Popular
                    </div>
                    <div className="mb-6 mt-4">
                        <h3 className="text-xl md:text-2xl font-bold text-text mt-2 mb-1">Japanese Grooming Experience</h3>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-accent/20 pb-4 mb-4 gap-2">
                        <div className="text-lg font-medium text-accent">90 min</div>
                        <div className="text-2xl font-bold text-text">¥14,000</div>
                    </div>

                    <ul className="space-y-2 mb-6 text-text list-disc list-inside marker:text-accent text-sm md:text-base">
                        <li>Maintenance Cut (Trimming & Tidy up)</li>
                        <li>Shampoo & styling</li>
                        <li>Japanese wet shaving</li>
                        <li>Head massage</li>
                    </ul>

                    <p className="text-sm text-subtext bg-secondary/50 p-4 rounded leading-relaxed">
                        We focus on grooming and cleanliness to refresh your look.
                    </p>
                </div>

                {/* Menu 3 */}
                <div className="bg-white border border-[#333] p-6 md:p-8 rounded-sm shadow-sm relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#333] text-white px-4 py-1 text-sm rounded-full shadow-sm font-medium whitespace-nowrap">
                        ③ Premium
                    </div>
                    <div className="mb-6 mt-4">
                        <h3 className="text-xl md:text-2xl font-bold text-text mt-2 mb-1">Traditional Barber Ritual</h3>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-accent/20 pb-4 mb-4 gap-2">
                        <div className="text-lg font-medium text-accent">120 min</div>
                        <div className="text-2xl font-bold text-text">¥18,000</div>
                    </div>

                    <ul className="space-y-2 mb-6 text-text list-disc list-inside marker:text-accent text-sm md:text-base">
                        <li>Haircut & styling</li>
                        <li>Japanese wet shaving</li>
                        <li>Facial massage</li>
                        <li>Head massage</li>
                        <li>Ear cleaning</li>
                    </ul>

                    <p className="text-sm text-subtext bg-secondary/50 p-4 rounded leading-relaxed">
                        A full Japanese barber experience.<br />
                        Careful, unhurried, and deeply calming.
                    </p>
                </div>

            </div>

            {/* Important Notes */}
            <div className="mt-16 bg-secondary/30 p-8 rounded-sm">
                <h3 className="text-lg font-bold text-text mb-4 border-b border-accent/30 pb-2 inline-block">Important Notes</h3>
                <ul className="space-y-3 text-text list-disc list-inside marker:text-accent mb-6 text-sm md:text-base">
                    <li>Appointment only</li>
                    <li>English support is limited</li>
                    <li>No coloring or perm services</li>
                    <li>Prices include tax</li>
                    <li>No tipping required</li>
                </ul>
                <p className="text-sm text-subtext italic">Thank you for your understanding.</p>
            </div>

            {/* Reservation */}
            <div className="mt-12 text-center">
                <h3 className="text-xl font-bold text-accent mb-4">Reservation</h3>
                <p className="text-text leading-relaxed">
                    Please contact us in advance for availability.<br />
                    We recommend booking before your visit.
                </p>
            </div>

        </div>
    );
};

export default EnglishMenu;
