import React, { useState } from 'react';

interface ImageProps {
    src: string;
    srcMobile?: string;
    fallbackSrc?: string;
    alt: string;
    className?: string;
}

/**
 * 画像コンポーネント（フォールバック機能付き）
 * 画像が見つからない場合、自動的にfallbackSrcを表示します
 * srcMobileが指定されている場合、レスポンシブに画像を切り替えます
 */
const Image: React.FC<ImageProps> = ({ src, srcMobile, fallbackSrc, alt, className = '' }) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        if (!hasError && fallbackSrc) {
            setImgSrc(fallbackSrc);
            setHasError(true);
        }
    };

    // srcMobileがある場合はpictureタグを使用
    if (srcMobile) {
        return (
            <picture>
                <source media="(max-width: 767px)" srcSet={srcMobile} />
                <source media="(min-width: 768px)" srcSet={src} />
                <img
                    src={imgSrc}
                    alt={alt}
                    className={className}
                    onError={handleError}
                    loading="lazy"
                    decoding="async"
                    style={{ imageRendering: 'auto' }}
                />
            </picture>
        );
    }

    return (
        <img
            src={imgSrc}
            alt={alt}
            className={className}
            onError={handleError}
            loading="lazy"
            decoding="async"
            style={{ imageRendering: 'auto' }}
        />
    );
};

export default Image;
