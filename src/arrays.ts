/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are
 * no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newArray = [...numbers];
    if (numbers.length === 0) {
        return [];
    }

    if (numbers.length === 1) {
        //use normal

        newArray.push(numbers[0]);
        return newArray;
    }

    newArray.splice(1, numbers.length - 2);
    return newArray;
    //returning splice gives the deleted elements if u save it to a new array
    //make sure to return the original array u removed
    //const firstLast = numbers.filter((num: number): boolean => num[i] === 0 || num[i]===-1 );

    // const lowPrices = prices.filter((price: number): boolean => price < 10);
    //const doubled = prices.map((price: number): number => price * 2);
    //console.log(doubled);
}

/**
 * Consume an array of numbers, and return a new array
 *  where each
 * number has been tripled (multiplied by 3).
 * const tripled = numbers.map((num: number): number => num*3);
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
    //const doubled = prices.map((price: number): number => price * 2);
}

/**
 * Consume an array of strings and convert them to integers.
 * If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    // If the price is less than 10, double the price,
    //  otherwise use the price unchanged
    //if price <10 double it otherwise (?) keep iot
    //  (price: number): number => (price < 10 ? 2 * price : price),
    const toInt = numbers.map((num: string): number =>
        Number.isNaN(parseInt(num)) ? Number("0") : Number(num),
    );
    //? means else if statement.
    // it executes the code before the : if true, and the code
    //  after the : if falsey. so condition if true do this: else do this
    //  or just //Number(num)
    return toInt;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning,
 * in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noCash = amounts.map((amount: string): string =>
        amount[0] === "$" ? amount.slice(1) : amount,
    );
    const removeD = noCash.map((amount: string): number =>
        Number.isNaN(parseInt(amount)) ? Number("0") : Number(amount),
    );

    return removeD;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return [];
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return 0;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    return "";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}
