export interface IWorkDataItem{
    id:number,
    title: string,
    des: string,
    photos: Array<{alt:string, path:string}>,
    designers: Array<number>,
    index: number,
}

export const WORK_DATA = [
    {
        id: 1,
        index: 1,
        title: 'Work title 1',
        des: 'Work description 1',
        photos: [
            {
                alt: 'photo 1',
                path: 'imgs/img_1.png'
            },
            {
                alt: 'photo 2',
                path: 'imgs/img_2.png'
            },
            {
                alt: 'photo 3',
                path: 'imgs/img_3.png'
            },
            {
                alt: 'photo 4',
                path: 'imgs/img_4.png'
            }
        ],
        designers:[1, 3, 4]
    },
    {
        id: 2,
        index: 4,
        title: 'Work title 2',
        des: 'Work description 2',
        photos: [
            {
                alt: 'photo 2',
                path: 'imgs/img_2.png'
            },
            {
                alt: 'photo 1',
                path: 'imgs/img_1.png'
            },
            {
                alt: 'photo 4',
                path: 'imgs/img_4.png'
            }
        ],
        designers:[1, 2]
    },
    {
        id: 3,
        index: 5,
        title: 'Work title 3',
        des: 'Work description 3',
        photos: [
            {
                alt: 'photo 1',
                path: 'imgs/img_1.png'
            },
            {
                alt: 'photo 2',
                path: 'imgs/img_2.png'
            },
        ],
        designers:[1]
    },
    {
        id: 4,
        index: 3,
        title: 'Work title 4',
        des: 'Work description 4',
        photos: [
            {
                alt: 'photo 1',
                path: 'imgs/img_1.png'
            },
            {
                alt: 'photo 4',
                path: 'imgs/img_4.png'
            }
        ],
        designers:[]
    },
    {
        id: 5,
        index: 2,
        title: 'Work title 5',
        des: 'Work description 5',
        photos: [
            {
                alt: 'photo 3',
                path: 'imgs/img_3.png'
            },
            {
                alt: 'photo 4',
                path: 'imgs/img_4.png'
            },
            {
                alt: 'photo 1',
                path: 'imgs/img_1.png'
            },
            {
                alt: 'photo 2',
                path: 'imgs/img_2.png'
            },
        ],
        designers:[4]
    },
];