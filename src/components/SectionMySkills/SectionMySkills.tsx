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
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/8/product-1.png" alt="" />
                            </div>
                            <h3 className="text-base font-bold text-gray-900">
                                <a href="#" title="">
                                    Arion 30 Smart Light
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                </a>
                            </h3>
                        </div>
                        <p className="mt-2 text-sm font-bold text-gray-500">$79.00</p>
                        <div className="flex items-center justify-center flex-1 my-5 space-x-2">
                            <div className="w-3 h-3 bg-blue-600 border border-blue-800 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 border border-yellow-700 rounded-full"></div>
                            <div className="w-3 h-3 bg-red-500 border border-red-800 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionMySkills;