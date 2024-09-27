interface ArticleProps {
    title: string;
    id: number;
    url: string;
}

const Article: React.FC<ArticleProps> = ({title, id}) => {
    return(
        <li className="flex py-5">
            <div className="flex-shrink-0">
                <img className="object-cover w-16 h-16 rounded-lg" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-popup/2/product-1.png" alt="" />
            </div>

            <div className="flex items-stretch justify-between flex-1 ml-5 space-x-5">
                <div className="flex flex-col justify-between flex-1">
                    <p className="text-sm font-bold text-palletTwoQuaternary">{ title }</p>
                    <p className="mt-1.5 text-sm font-medium text-palletTwoQuaternary">Cant: { id }</p>
                </div>

                <div className="flex flex-col items-end justify-between">
                    <p className="flex-shrink-0 w-20 text-sm font-bold text-right text-palletTwoTertiary">$259.00</p>

                    <button type="button" className="inline-flex p-2 -m-2 text-palletTwoQuaternary transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:text-palletTwoTertiary">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </li>
    );
}

export default Article;