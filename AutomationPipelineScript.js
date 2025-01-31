function onRowAdded(e) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sourceSheet = ss.getSheetByName("Form responses 1"); // Source sheet
    Logger.log(ss)


    var lastRow = sourceSheet.getLastRow(); // Get the last row number
    var lastColumn = sourceSheet.getLastColumn(); // Get the last column number
    var newRow = sourceSheet.getRange(lastRow, 1, 1, lastColumn).getValues(); // Get the new row data

    var rowData = newRow[0];

    var requestType = rowData[2]
    var targetSheet = ss.getSheetByName(requestType); // Destination sheet
    
    if (!sourceSheet || !targetSheet) {
        Logger.log("Sheet not found!");
        return;
    }
    targetSheet.appendRow(newRow[0]); // Append the new row to 'Marketing'
}
