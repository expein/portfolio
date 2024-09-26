'use client';

import React from 'react';
import Image from "next/image";
import useToggleDisplay from '@/hooks/Reviews/Reviews';
import CommentList from './CommentList';
import ToggleButton from './ToggleButton';

import SvgIcon, { IconList } from "@/components/SvgIcon/SvgIcon";

interface ReviewCardProps {
    img: string;
    stars: number;
    review: string;
    name: string;
    startDate: string;
    endDate: string;
    components: {
        img: string;
        review: string;
        name: string;
    }[];
};

const ReviewCard: React.FC<ReviewCardProps> = ({ 
    img,
    stars,
    review,
    name,
    startDate,
    endDate,
    components
 }) => {

    const { showAll, handleShowMore, handleShowLess } = useToggleDisplay(1);
    const displayedComponents = showAll ? components : components.slice(0, 1);

    return (
        <li className="py-8">
            <div className="flex items-start">
                <div className="w-11 h-11 min-w-11 min-h-11 bg-palletTwoQuaternary rounded-full flex justify-center items-center">
                    <Image
                        className="flex-shrink-0 rounded-full" 
                        src={img}
                        alt={name} 
                        width={64}
                        height={64}
                    />
                </div>
                <div className="ml-6">
                    <div className="flex items-center space-x-px">
                        {
                            Array(5).fill(0).map((_, index) => (
                                <SvgIcon 
                                    key={index} 
                                    name={IconList.IconStart} 
                                    size={20} 
                                    color={index < stars ? "var(--yellow-primary)" : "var(--pallet-two-quaternary)"}
                                />
                            ))
                        }
                    </div>
                    <p className="mt-5 text-base font-normal leading-7 text-palletTwoQuaternary">{ review }</p>
                    <p className="mt-5 text-sm font-bold text-palletTwoQuaternary">{ name }</p>
                    <p className="mt-1 text-sm font-normal text-palletTwoQuaternary">{ startDate } - { endDate }</p>
                </div>
            </div>

            <CommentList components={displayedComponents} showAll={showAll} />

            <ToggleButton
                showAll={showAll} 
                handleShowMore={handleShowMore} 
                handleShowLess={handleShowLess} 
                componentsLength={components.length} 
            />
        </li>
    );
};

export default ReviewCard;