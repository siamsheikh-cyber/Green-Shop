import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { ChevronRight, Mail, SearchIcon } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa6";

function PublicFooter() {
    return (
        <div className="bg-white pt-15 pb-6 shadow-2xl mt-5">
            <div className="my-container ">
                <div className="flex gap-6 pb-10">
                    <div className="basis-[33%]">
                        <div className="mb-6">
                            <h3 className="font-medium mb-1.5">Get In Touch</h3>
                            <span className="block h-0.5 bg-gray-300">
                                <span className="w-26 bg-primary h-0.5 block"></span>
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2 text-gray-600 text-[15px]">
                            <span><span className="text-black">Address</span>: 514 S. Magnolia St. Orlando, FL 32806, USA</span>
                            <span><span className="text-black">Phone</span>: 453876234</span>
                            <span><span className="text-black">Email</span>: demoemail123@gmail.com</span>
                            <span>Saturday-Sunday :: 9:27 PM - 9:27 PM</span>
                            <div className="flex gap-1 mt-2">
                                <a href={"/"} className="btn-animate py-3 px-2 rounded-[6px]  block bg-primary">
                                    <FaFacebookF className="w-8 text-white" />
                                </a>
                                <a href={"/"} className="btn-animate py-3 px-2 rounded-[6px] block bg-primary">
                                    <FaTwitter className="w-8 text-white" />
                                </a>
                                <a href={"/"} className="btn-animate py-3 px-2 rounded-[6px] block bg-primary">
                                    <FaYoutube className="w-8 text-white" />
                                </a>
                                <a href={"/"} className="btn-animate py-3 px-2 rounded-[6px] block bg-primary">
                                    <FaLinkedinIn className="w-8 text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="basis-[33%]">
                        <div className="mb-6">
                            <h3 className="font-medium mb-1.5">Usefull as</h3>
                            <span className="block h-0.5 bg-gray-300">
                                <span className="w-26 bg-primary h-0.5 block"></span>
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <ul className="flex flex-col gap-2 text-gray-500">
                                <li className="flex"><ChevronRight className="w-4" /><a href={"/"} className="hover:text-primary">Faq</a></li>
                                <li className="flex"><ChevronRight className="w-4" /><a href={"/"} className="hover:text-primary">About Us</a></li>
                                <li className="flex"><ChevronRight className="w-4" /><a href={"/"} className="hover:text-primary">Privacy Policy</a></li>
                                <li className="flex"><ChevronRight className="w-4" /><a href={"/"} className="hover:text-primary">Terms & Service</a></li>
                                <li className="flex"><ChevronRight className="w-4" /><a href={"/"} className="hover:text-primary">Return Policy</a></li>
                                <li className="flex "><ChevronRight className="w-4" /><a href={"/"} className="hover:text-primary">How It Works</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="basis-[34%]">
                        <div className="mb-6">
                            <h3 className="font-medium mb-1.5">Newsletter</h3>
                            <span className="block h-0.5 bg-gray-300">
                                <span className="w-26 bg-primary h-0.5 block"></span>
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <form>
                                <InputGroup className="rounded-none py-5">
                                    <InputGroupInput className="" placeholder="Your Email" />
                                    <InputGroupAddon>
                                        <Mail />
                                    </InputGroupAddon>
                                </InputGroup>
                                <Button className="btn-animate rounded-none w-full my-2.5 cursor-pointer">Subscribe</Button>
                            </form>
                            <p className="text-[13px] text-gray-500 mb-4">Subscribe to our Newsletter to receive early discount offers, latest news, sales and promo information.</p>
                            <img className="w-[90%]" src="/images/paymentCard.png" alt="Payment Cards" />
                        </div>
                    </div>
                </div>
                <span className="block bg-gray-200 h-px mt-6"></span>
                <p className="pt-3 text-center">Logoipsum © All rights reserved.</p>
            </div>
        </div>
    );
}

export default PublicFooter;