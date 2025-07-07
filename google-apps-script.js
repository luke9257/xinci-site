// Google Apps Script for handling form submissions

// 1. 在Google Drive中创建一个新的Google Sheet，并记下其ID。
//    - 您可以从URL中找到ID: https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit
// 2. 在同一个Google项目中，进入“扩展” > “Apps Script”。
// 3. 将此代码粘贴到脚本编辑器中，替换 `YOUR_SHEET_ID`。
// 4. 保存脚本，然后点击“部署” > “新建部署”。
// 5. 选择类型为“Web应用”，配置访问权限为“任何人”。
// 6. 部署后，复制生成的Web App URL，并将其粘贴到您的React组件中。

const SHEET_ID = 'YOUR_SHEET_ID';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Honeypot check
    if (data.honeypot) {
      // Silently ignore spam submissions
      return ContentService.createTextOutput(JSON.stringify({ result: 'success' })).setMimeType(ContentService.MimeType.JSON);
    }

    // Add a timestamp to the data
    const timestamp = new Date();
    
    // Get headers from the sheet or set default headers
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    if (headers.length === 0 || headers[0] === '') {
        sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Company', 'Message']);
    }

    // Append form data to the sheet
    sheet.appendRow([
      timestamp,
      data.name,
      data.email,
      data.phone || '',
      data.company || '',
      data.message
    ]);

    return ContentService.createTextOutput(JSON.stringify({ result: 'success' })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: error.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}