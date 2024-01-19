/* import initializeDropdownSelection from "/utils/selection_dd" */
import convInsertion from "./conversion/insertion.js";
// import initializeCreation from "/conversion/creation" 
// import initializeInsertion from "/conversion/insertion" 

// NOTE: the conversion part will be included here..

const csv = `yearlevelcode, feeid, fee_category, fee_name, fee_amount, fee_paymentdate, schoolyeartype
John,13,M,123,,,
Jerome,14,M,124,1-2-2023,,
Girl,12,F,125,1-3-2023,,
Boy,,M,126,1-1-2023,,
`;

const insWithQuotation = "";//user input for valuesIns.withQuotation
const tblName = "";//user input for valuesIns.tblName

// let prompt = ""
export default function initializeSelection(){
    // event listener to drop down
    // if INSERT Values
        let csvFormat = csv.replace(/\n$/gm,""); // removing newline in the last($) 
        const attributeCount = checkAttributeCount(csvFormat)
        const values = convValuesToObj(attributeCount,csvFormat)
        const result = convInsertion(values);

        console.log(result);

    // else if CREATE table
        // const tableCount = checkTableCount(csv) 
        // convert to object depending on table values = convTableToObj
        //
    // else no selection
}
initializeSelection()
function convValuesToObj(attributeCount,csv) {
    let valuesIns = {
        tblName : ["table_1"], // user input
        att : [],
        val : [],
        withQuotation : [true,true,true,false,true,false,false]// user input
    }

    let arrValue = csv.replace("\n","\r\a\z\e\c").split("\r\a\z\e\c");
    let attributes = arrValue[0].split(",");
    let rowValues = arrValue[1].split("\n");
    let values = []
    
    for (let i = 0; i < rowValues.length; i++){ // turning each row into array then pushing them to the values
        values.push(rowValues[i].split(','))
    }
    for (let i = 0; i < attributeCount; i++){ // for attribute
        valuesIns.att.push(attributes[i]);
    }
    for (let i = 0; i < values.length; i++){  // for values
        valuesIns.val.push(values[i]);
    }

    return valuesIns;
}

function checkAttributeCount(convertedCsv){
    let arrayValues= convertedCsv.replace("\n","\r\a\z\e\c").split("\r\a\z\e\c"); // the first \n will only be read, this will be an array with only 2 parts
    return arrayValues[0].split(",").length;// split returns array, so the top attributes which is at index 0, will be an array aswell
}

export {
    convValuesToObj, checkAttributeCount
}