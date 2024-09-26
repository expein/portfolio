import React from 'react';
import articleSection from '@/data/ArticlesSectionData/ArticlesSections';
import Article from './Article';

const DrawerContent = () => (
    <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="px-4 py-2 sm:px-6">
            <div className="flow-root">
                <ul className="-my-5 divide-y divide-gray-200 divide-dotted">
                    {articleSection.map((article, index) => (
                        <Article key={index} title={article.title} id={article.id} url={article.url} />
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

export default DrawerContent;