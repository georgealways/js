export function rangeExclusive( val, min, max ) {
    return min <= val && val < max;
}

export function rangeInclusive( val, min, max ) {
    return min <= val && val <= max;
}

export function contains( val, arr ) {
    return arr.indexOf( val ) !== -1;
}