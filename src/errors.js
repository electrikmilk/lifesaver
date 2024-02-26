export const TRY = func => {
    try {
        return [func(), null];
    } catch (e) {
        return [null, e];
    }
};
