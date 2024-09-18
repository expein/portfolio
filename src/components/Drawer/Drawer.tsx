import React, { useState } from 'react';

const Drawer = () => {        
    return (
                <div className='fixed inset-0 bg-gray-500'>
            <div className="relative">
                <div className="fixed inset-y-0 right-0 w-full h-full max-w-xs sm:max-w-sm">
                    <div className="h-full overflow-hidden bg-white">
                        <div className="flex flex-col h-full">
                            <div className="flex-shrink-0 px-4 py-5">
                                <div className="flex items-center justify-between">
                                    <p className="text-base font-bold text-gray-900">Shopping Cart</p>
        
                                    <button type="button" className="p-2 -m-2 text-gray-500 transition-all duration-200 bg-transparent rounded-md hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
        
                            <div className="flex-1 overflow-y-auto">
                                <div className="px-4 py-2 sm:px-6">
                                    <div className="flow-root">
                                        <ul className="-my-5 divide-y divide-gray-200 divide-dotted">
                                            <li className="flex py-5">
                                                <div className="flex-shrink-0">
                                                    <img className="object-cover w-16 h-16 rounded-lg" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-popup/2/product-1.png" alt="" />
                                                </div>
        
                                                <div className="flex items-stretch justify-between flex-1 ml-5 space-x-5">
                                                    <div className="flex flex-col justify-between flex-1">
                                                        <p className="text-sm font-bold text-gray-900">Apple Watch Series 7 - Golden Edition</p>
                                                        <p className="mt-1.5 text-sm font-medium text-gray-500">Qty: 1</p>
                                                    </div>
        
                                                    <div className="flex flex-col items-end justify-between">
                                                        <p className="flex-shrink-0 w-20 text-sm font-bold text-right text-gray-600">$259.00</p>
        
                                                        <button type="button" className="inline-flex p-2 -m-2 text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:text-gray-900">
                                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
        
                                            <li className="flex py-5">
                                                <div className="flex-shrink-0">
                                                    <img className="object-cover w-16 h-16 rounded-lg" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-popup/2/product-2.png" alt="" />
                                                </div>
        
                                                <div className="flex items-stretch justify-between flex-1 ml-5 space-x-5">
                                                    <div className="flex flex-col justify-between flex-1">
                                                        <p className="text-sm font-bold text-gray-900">Beoplay M5 Bluetooth Speaker</p>
                                                        <p className="mt-1.5 text-sm font-medium text-gray-500">Qty: 1</p>
                                                    </div>
        
                                                    <div className="flex flex-col items-end justify-between">
                                                        <p className="flex-shrink-0 w-20 text-sm font-bold text-right text-gray-600">$46.50</p>
        
                                                        <button type="button" className="inline-flex p-2 -m-2 text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:text-gray-900">
                                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
        
                                            <li className="flex py-5">
                                                <div className="flex-shrink-0">
                                                    <img className="object-cover w-16 h-16 rounded-lg" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-popup/2/product-3.png" alt="" />
                                                </div>
        
                                                <div className="flex items-stretch justify-between flex-1 ml-5 space-x-5">
                                                    <div className="flex flex-col justify-between flex-1">
                                                        <p className="text-sm font-bold text-gray-900">Beylob 90 Speaker</p>
                                                        <p className="mt-1.5 text-sm font-medium text-gray-500">Qty: 1</p>
                                                    </div>
        
                                                    <div className="flex flex-col items-end justify-between">
                                                        <p className="flex-shrink-0 w-20 text-sm font-bold text-right text-gray-600">$219.00</p>
        
                                                        <button type="button" className="inline-flex p-2 -m-2 text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:text-gray-900">
                                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
        
                                            <li className="flex py-5">
                                                <div className="flex-shrink-0">
                                                    <img className="object-cover w-16 h-16 rounded-lg" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-popup/2/product-2.png" alt="" />
                                                </div>
        
                                                <div className="flex items-stretch justify-between flex-1 ml-5 space-x-5">
                                                    <div className="flex flex-col justify-between flex-1">
                                                        <p className="text-sm font-bold text-gray-900">Beoplay M5 Bluetooth Speaker</p>
                                                        <p className="mt-1.5 text-sm font-medium text-gray-500">Qty: 1</p>
                                                    </div>
        
                                                    <div className="flex flex-col items-end justify-between">
                                                        <p className="flex-shrink-0 w-20 text-sm font-bold text-right text-gray-600">$149.00</p>
        
                                                        <button type="button" className="inline-flex p-2 -m-2 text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:text-gray-900">
                                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
        
                            <div className="px-4 py-5 border-t border-gray-200 sm:p-6">
                                <ul className="space-y-4">
                                    <li className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-600">Sub total</p>
                                        <p className="text-sm font-medium text-gray-600">$399</p>
                                    </li>
        
                                    <li className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-900">Total</p>
                                        <p className="text-sm font-bold text-gray-900">$399</p>
                                    </li>
                                </ul>
        
                                <div className="mt-5 space-y-3">
                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                                    >
                                        Checkout
                                    </button>
        
                                    <button
                                        type="button"
                                        className="
                                            inline-flex
                                            items-center
                                            justify-center
                                            w-full
                                            px-6
                                            py-4
                                            text-sm
                                            font-bold
                                            text-gray-900
                                            transition-all
                                            duration-200
                                            bg-transparent
                                            border-2 border-gray-300
                                            rounded-md
                                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                                            hover:bg-gray-200
                                            focus:bg-gray-200
                                        "
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Drawer;