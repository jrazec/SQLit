/* import convInsertion from "/conversion/insertion" */

export default function convInsertion(obj) {
    const table = obj.table.toString();
    const att = obj.att.toString();
    const val = obj.val;
    const withQuote = obj.withQuotation;

    const attribute = `INSERT INTO \n\t${table}( ${att} )\n`;
    const value = convToValuesStatement(val,withQuote);

    const insertStatement = attribute + value; // Added this just for formality/readability
    return insertStatement;
}




function convToValuesStatement(val,withQuote){
    let value = "VALUES \n\t";

    for(let row = 0; row < val.length; row++){ 
        value += "( ";

        for (let col = 0; col < val[row].length;col++){
            if(withQuote[col]){
                value += (val[row][col] !== "") ? `'${val[row][col]}'` : "null";  // If the csv file dont have a value, it will be null
            }else{
                value += (val[row][col] !== "") ? val[row][col] : "null";
            }

            (col !== val[row].length-1) ? value += ", " : value += " ";  // the last col will have whitespace instead of ,     
        }

        (row === val.length-1) ? value += ");" : value += "),\n\t"; // the last row will have ); instead of ),
    }
    return value;
}

// This would be removed once it is already in selection_dd
