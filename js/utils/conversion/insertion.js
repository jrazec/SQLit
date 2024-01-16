/* import initializeInsertion from "/conversion/insertion" */


/*            o Information o
    - There are 3 common data types in sql which are
        ::> strings, numbers and dates
        > with quotations & without quatations
          -char,varchars    -decimal,int,double
          -texts,binary     -booleans
          -dates            -bits and bytes
        
        - a -list of objects- can be used to store these info
        which it will be the determiner if ever a certain column 
        is inside squotation or without


*/

/*              ---NEEDS:-----                                                     
    - count of the attribute to be stored in 
            ::> attributeCount [int]
    - data types for each of the attributes to be stored in
            ::> dataTypes [array] - thinking of obj here aswell if more feasible

    - code the logic part which is to convert the strings to insertion
    - initialize a list of objects as determiner
    - there, proceed to the checking--if else, base on the user input, is it
    part of the quotation or is it not quoted - using of for loop
    - trying the filelist on the sheet.csv if it the logic would work 
*/

const csvFormat = `\`yearlevelcode\`, \`feeid\`, \`fee_category\`, \`fee_name\`, \`fee_amount\`, \`fee_paymentdate\`, \`schoolyeartype\`
John,13,M,123,,,
Jerome,14,M,124,1-2-2023,,,
Girl,12,F,125,1-3-2023,,,
Boy,,M,126,1-1-2023,,,
`;


function initializeInsertion() {
    const attributeCount = checkAttributeCount(csvFormat); // checks the attribute count, returns the value then stores to the attribute count variable
    console.log(attributeCount)
}



function checkAttributeCount(convertedCsv){
    let arrAttribute = convertedCsv.replace("\n","\r\a\z\e\c").split("\r\a\z\e\c"); // the first \n will only be read, this will be an array with only 2 parts
    let topAttribute = arrAttribute[0]; // This contains the top attributes, which MUST NOT CONTAIN , since in sql--comma shouldn't be used as naming convention | if there is, a problem would occur in this code.
    let topArrAttribute = topAttribute.split(",");
    return topArrAttribute.length
}

// This would be removed once it is already in selection_dd
initializeInsertion();