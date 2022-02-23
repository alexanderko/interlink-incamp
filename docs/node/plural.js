function plural(count, one, few, many) {
    if (count % 10 == 1 && count % 100 != 11) {
        return count + " " + one;
    } else if (count % 100 == 11 || count % 10 === 0 || 5 <= count % 10 && count % 10 <= 9) {
        return count + " " + many;
    } else {
        return count + " " + few;
    }
}