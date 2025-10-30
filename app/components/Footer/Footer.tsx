import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-darkblue -mt-40">
            <div className="mx-auto max-w-2xl pt-48 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="my-24 grid grid-cols-1 gap-y-10 gap-x-16 lg:grid-cols-2 xl:gap-x-8">

                    {/* LOGO & DESCRIPTION */}
                    <div className='col-span-1'>
                        <Link href="/" className="text-2xl font-semibold text-white flex items-center gap-2">
                            justanothermarketing
                        </Link>
                        <p className="text-offwhite text-base mt-4 leading-relaxed">
                        We&apos;re a full-service digital marketing agency dedicated to helping brands grow through impactful advertising campaigns, strategic marketing solutions, and measurable performance results. Our team blends creativity with data-driven insights to deliver targeted ad strategies, engaging content, and long-term SEO growth that drives visibility, traffic, and conversions across all digital channels.
                        </p>
                    </div>

                    {/* CONTACT INFO */}
                    <div className='col-span-1'>
                        <h3 className="text-white text-xl font-semibold mb-2">justanothermarketing Limited</h3>
                        <p className="text-offwhite text-base mb-4">Zekeriya Genc</p>

                        <div className="flex gap-3 items-center mb-4">
                            <Image src={'/assets/footer/email.svg'} alt="email-icon" width={20} height={20} />
                            <div>
                                <span className="text-offwhite text-base font-semibold">E-mail: </span>
                                <Link href="mailto:info@justanothermarketing.com" className="text-offwhite hover:text-white transition-colors duration-300">
                                    info@justanothermarketing.com
                                </Link>
                            </div>
                        </div>

                        <div className="flex gap-3 items-center mb-4">
                            <Image src={'/assets/footer/telephone.svg'} alt="telephone-icon" width={20} height={20} />
                            <div>
                                <span className="text-offwhite text-base font-semibold">Phone: </span>
                                <Link href="tel:+905523568756" className="text-offwhite hover:text-white transition-colors duration-300">
                                    +90 5523568756
                                </Link>
                            </div>
                        </div>

                        <div className="flex gap-3 items-start mb-4">
                            <div className="mt-1 flex-shrink-0">
                                <Image src={'/assets/footer/mask.svg'} alt="address-icon" width={20} height={20} />
                            </div>
                            <div>
                                <p className="text-offwhite text-base font-semibold mb-1">Address (EN):</p>
                                <p className="text-offwhite text-base leading-relaxed">
                                    Room H 11, 1/F, Kaiser Estate Phase 2, No. 51 Man Yue Street, Hung Hom, Hong Kong
                                </p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-offwhite text-base">
                                <span className="font-semibold">Postal/ZIP code:</span> 999077
                            </p>
                        </div>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className='py-8 text-center border-t border-t-bordertop'>
                    <h4 className='text-offwhite text-sm font-normal'>
                        © 2020 justanothermarketing. All right reserved.
                    </h4>
                </div>

            </div>
        </div>
    );
};

export default Footer;