/* import initializeInsertion from "/conversion/insertion" */
const attributeCount = 5; // This IS an input, automatically determine the count of att

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

