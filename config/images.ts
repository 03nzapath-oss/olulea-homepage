// 画像パス設定ファイル
// 画像を追加・変更する場合は、public/imagesフォルダに画像を配置し、
// このファイルのパスを更新してください。

export const IMAGES = {
    // ヒーロー画像
    hero: {
        main: `${import.meta.env.BASE_URL}images/hero/main.jpg`,
        store: `${import.meta.env.BASE_URL}images/hero/store.jpg`,
    },

    // コンセプト画像
    concept: {
        intro: `${import.meta.env.BASE_URL}images/salon_interior_concept_v3.jpg`,
    },

    // ヘッドスパ画像
    headspa: {
        intro: `${import.meta.env.BASE_URL}images/headspa_intro_v3.jpg`,
    },

    // ギャラリー画像
    gallery: [
        { id: 1, path: `${import.meta.env.BASE_URL}images/gallery/1.jpg`, alt: 'サロン内観1' },
        { id: 2, path: `${import.meta.env.BASE_URL}images/gallery/2.jpg`, alt: 'サロン内観2' },
        { id: 3, path: `${import.meta.env.BASE_URL}images/gallery/3.jpg`, alt: 'カットスタイル1' },
        { id: 4, path: `${import.meta.env.BASE_URL}images/gallery/4.jpg`, alt: 'カットスタイル2' },
        { id: 5, path: `${import.meta.env.BASE_URL}images/gallery/5.jpg`, alt: 'シャンプー台' },
        { id: 6, path: `${import.meta.env.BASE_URL}images/gallery/6.jpg`, alt: '商品・設備' },
    ],
};

// 画像が見つからない場合のフォールバック画像
export const FALLBACK_IMAGES = {
    hero: 'https://picsum.photos/seed/olulea_hero/1920/1080',
    concept: 'https://picsum.photos/seed/olulea_concept/1920/1080',
    headspa: 'https://picsum.photos/seed/olulea_headspa/1920/1080',
    store: 'https://picsum.photos/seed/olulea_store/800/800',
    gallery: (id: number) => `https://picsum.photos/seed/olulea_${id}/800/800`,
};
