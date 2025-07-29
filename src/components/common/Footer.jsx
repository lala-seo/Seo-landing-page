import React, { useState } from 'react';
import Logo from "../../assets/images/logo2.png";

export default function Footer() {

    return (
        <div>
            <div className="bg-gray-100 py-16 pb-10 px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="lg:col-span-1">
                            <div className="mb-6">
                                <img
                                    src={Logo}
                                    alt="Barton Heyman Logo"
                                    className="h-16 w-auto"
                                />
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed font-secondary md:mr-30">
                                Barton Heyman Is A Boutique Financial And Advisory Services Firm, Founded In 2011, Delivering Strategic Solutions To Clients Across The EMEA Region, The UK, And The US.
                            </p>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div>
                                <h3 className="text-gray-900 font-semibold text-sm font-secondary mb-6">Quick Link</h3>
                                <ul className="space-y-3  text-sm font-secondary">
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Sectors</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Insights</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-gray-900 font-semibold  text-sm font-secondary mb-6">Help Center</h3>
                                <ul className="space-y-3  text-sm font-secondary">
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact Us</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms & Conditions</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Support Policy</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-gray-900 font-semibold mb-6  text-sm font-secondary">Socials</h3>
                                <ul className="space-y-3  text-sm font-secondary">
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Facebook</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Instagram</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Twitter</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Linkedin</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-300">
                        <p className="text-gray-600  text-sm font-secondary">
                            ©2021 Bartonheyman Copyright All Right Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}