import React, { useState } from 'react';

interface ImageProps {
    src: string;
    fallbackSrc?: string;
    alt: string;
    className?: string;
}

/**
 * 画像コンポーネント（フォールバック機能付き）
 * 画像が見つからない場合、自動的にfallbackSrcを表示します
 */
const Image: React.FC<ImageProps> = ({ src, fallbackSrc, alt, className = '' }) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        if (!hasError && fallbackSrc) {
            setImgSrc(fallbackSrc);
            setHasError(true);
        }
    };

    return (
        <img
            src={imgSrc}
            alt={alt}
            className={className}
            onError={handleError}
        />
    );
};

export default Image;
