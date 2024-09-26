import React from 'react';
import { motion } from 'framer-motion';
import CommentCard from './CommentCard';

interface CommentListProps {
    components: {
        img: string;
        review: string;
        name: string;
    }[];
    showAll: boolean;
}

const CommentList: React.FC<CommentListProps> = ({ components, showAll }) => {
    return (
        <motion.ul 
            className="divide-y divide-gray-200 mt-9 mx-9 overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: showAll ? 'auto' : 0 }}
            transition={{ duration: 0.5 }}
        >
            {
                components.map((item, index) => (
                    <CommentCard
                        key={index}
                        img={item.img}
                        name={item.name}
                        comment={item.review}
                    />
                ))
            }
        </motion.ul>
    );
};

export default CommentList;