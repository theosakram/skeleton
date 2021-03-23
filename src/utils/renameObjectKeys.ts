interface anyObj {
    [key: string]: any;
}

interface Param {
    changer: any[];
    target: Object[];
}

export const renameObjectKeys = ({ target, changer }: Param): anyObj[] => {
    const newChanged = target.map((x: anyObj, _) => {
        const obj: anyObj = {};

        Object.keys(x).forEach((a, b) => {
            obj[changer[b]] = x[a];
        });

        return obj;
    });

    return newChanged;
};
