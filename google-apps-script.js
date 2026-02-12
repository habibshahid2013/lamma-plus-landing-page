/**
 * Google Apps Script — Lamma+ Waitlist
 *
 * SETUP:
 * 1. Go to https://sheets.google.com and create a new spreadsheet
 * 2. Name it "Lamma+ Waitlist"
 * 3. Add headers in Row 1: Timestamp | Email | Source
 * 4. Click Extensions → Apps Script
 * 5. Paste this entire file into the Code.gs editor (replace any existing code)
 * 6. Click Deploy → New Deployment
 * 7. Choose type: "Web app"
 * 8. Set "Execute as": Me
 * 9. Set "Who has access": Anyone
 * 10. Click Deploy and copy the Web App URL
 * 11. Paste that URL into your .env file as VITE_WAITLIST_URL=<your-url>
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date().toISOString(),  // Timestamp
      data.email,                 // Email address
      data.source || "landing"    // Source (hero or footer CTA)
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Required for CORS preflight
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
