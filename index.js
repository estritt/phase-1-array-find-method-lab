function superbowlWin(record) {
    const didTheyWin = record.find((recordYear) => (recordYear.result === 'W'));
    return didTheyWin === undefined ? didTheyWin : didTheyWin.year; 
}