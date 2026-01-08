function reverse_a_String(input) {
    if (typeof input !== "string") {
        return "Invalid input. Please provide a string.";
    }

    const n = input.length;
    let newString = "";

    for (let i = 0; i < n; i++) {
        newString = input[i] + newString;
    }

    return newString;
}

function count_vowels_in_a_string(input) {
    if (typeof input !== "string") {
        return "Invalid input. Please provide a string.";
    }
    const n = input.length;
    let count = 0;

    // const lc = input.toLowerCase();

    for (let i = 0; i < n; i++) {

        if (input[i] === "a" ||
            input[i] === "e" ||
            input[i] === "i" ||
            input[i] === "o" ||
            input[i] === "u" ||
            input[i] === "A" ||
            input[i] === "E" ||
            input[i] === "I" ||
            input[i] === "O" ||
            input[i] === "U") {
            count++;
        }

    }

    return count;
}

function check_for_palindrome(input) {
    if (typeof input !== "string") {
        return "Invalid input. Please provide a string.";
    }
    const reversed = reverse_a_String(input);

    if (input === reversed) {
        return true
    };

    return false;
}

function find_the_maximum_number(input) {

    const n = input.length;

    if (!Array.isArray(input)) {
        return "Invalid input. Please provide an array.";
    }

    if (n === 0) {
        return "Array is empty.";
    }

    for (let i = 0; i < n; i++) {
        if (typeof input[i] !== "number") {
            return "Array contains non-number values.";
        }
    }

    let max = 0;

    for (let i = 0; i < n; i++) {

        if (input[i] > max) {
            max = input[i];
        }

    }

    return max;
}

function remove_duplicates_from_an_array(input) {
    const n = input.length;

    if (!Array.isArray(input)) {
        return "Invalid input. Please provide an array.";
    }

    if (n === 0) {
        return "Array is empty.";
    }

    for (let i = 0; i < n; i++) {
        if (typeof input[i] !== "number") {
            return "Array contains non-number values.";
        }
    }

    let newArray = [];

    for (let i = 0; i < n; i++) {
        let isDuplicate = false;

        for (let j = 0; j < newArray.length; j++) {
            if (input[i] === newArray[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            newArray.push(input[i]);
        }
    }

    return newArray;
}

function sum_of_all_numbers_in_an_array(input) {
    const n = input.length;
    let sum = input[0];
    for (let i = 1; i < n; i++) {
        sum = input[i] + sum;
    }
    return sum;
}

function find_even_numbers_in_an_array(input) {
    const n = input.length;

    if (!Array.isArray(input)) {
        return "Invalid input. Please provide an array.";
    }

    if (n === 0) {
        return "Array is empty.";
    }

    for (let i = 0; i < n; i++) {
        if (typeof input[i] !== "number") {
            return "Array contains non-number values.";
        }
    }

    let even = [];
    for (let i = 0; i < n; i++) {
        if (input[i] % 2 === 0) {
            even.push(input[i]);
        }
    }
    return even;
}

function capitalize_first_letter_of_each_word(input) {
    if (typeof input !== "string") {
        return "Invalid input. Please provide a string.";
    }
    const arrayOfInput = input.split(" ");
    const n = arrayOfInput.length;
    for (let i = 0; i < n; i++) {
        arrayOfInput[i] = arrayOfInput[i][0].toUpperCase() + arrayOfInput[i].slice(1);
    }
    return arrayOfInput.join(" ");
}

function find_the_factorial_of_a_number(input) {
    if (typeof input !== "number") {
        return "Invalid input. Please provide a number.";
    }
    if (input < 0) {
        return "Factorial is not defined for negative numbers.";
    }

    if (input === 0 || input === 1) {

        return 1;
    }

    return input * find_the_factorial_of_a_number(input - 1);;
}

function pingPong_challenge() {
    const n = 20;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("PingPong,");
        }
        else if (i % 3 === 0) {
            console.log("Ping,");
        }
        else if (i % 5 === 0) {
            console.log("Pong,");
        } else {
            console.log(`${i},`);
        }
    }
}