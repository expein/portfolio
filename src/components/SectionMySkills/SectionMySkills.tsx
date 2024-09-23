'use client'

import SvgIcon, { IconList } from "../SvgIcon/SvgIcon";

const SectionMySkills = () => {
    return (
        <section className="py-12 bg-palletTwoPrimary sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-2xl font-bold text-palletTwoQuaternary sm:text-3xl">Featured Items</h2>
                    <p className="mt-4 text-base font-normal leading-7 text-palletTwoQuaternary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-12 text-center sm:grid-cols-2 lg:gap-5 lg:grid-cols-4 sm:mt-16">
                    <div className="relative bg-[#F5F5F5] overflow-hidden flex flex-col rounded-md">
                        <div className="absolute top-3 right-3">
                            <p className="inline-flex items-center justify-center px-2 py-1.5 text-xs font-bold tracking-wide text-white uppercase bg-gray-600 rounded">Sale</p>
                        </div>
                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <SvgIcon color={'#000000'} size={25} name={ IconList.IconJs } />
                            </div>
                            <h3 className="text-base font-bold text-gray-900">
                                <a href="#" title="">
                                    Arion 30 Smart Light
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                </a>
                            </h3>
                        </div>
                        <p className="mt-2 text-sm font-bold text-gray-500">$79.00</p>
                        <div className="m-5">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Social Media</p>
                                <p className="text-sm font-medium text-gray-900">45,211</p>
                            </div>
                            <div className="mt-2 bg-gray-200 h-1.5 rounded-full relative">
                                <div className="absolute inset-y-0 left-0 bg-indigo-600 rounded-full w-[30%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionMySkills;