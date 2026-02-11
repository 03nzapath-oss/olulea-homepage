import React, { useState } from 'react';

interface ImageProps {
    src: string;
    fallbackSrc?: string;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
    loading?: 'eager' | 'lazy';
    fetchPriority?: 'high' | 'low' | 'auto';
    decoding?: 'sync' | 'async' | 'auto';
}

/**
 * 画像コンポーネント（フォールバック機能付き）
 * 画像が見つからない場合、自動的にfallbackSrcを表示します
 */
const Image: React.FC<ImageProps> = ({ src, fallbackSrc, alt, className = '', style, loading, fetchPriority, decoding }) => {
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
            style={style}
            loading={loading}
            fetchPriority={fetchPriority}
            decoding={decoding}
            onError={handleError}
        />
    );
};

export default Image;
