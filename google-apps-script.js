/**
 * Google Apps Script - 联系表单后端处理脚本
 * 
 * 功能：
 * 1. 接收来自网站联系表单的POST请求。
 * 2. 对请求进行安全检查（Honeypot反垃圾邮件）。
 * 3. 将有效的表单数据（姓名、邮箱、电话、公司、消息）连同时间戳一起存入指定的Google Sheet。
 * 4. 自动创建表头（如果工作表中不存在）。
 * 
 * --- 操作指南 ---
 * 
 * ### 第一步：创建并配置Google Sheet
 * 1. 访问 https://sheets.new 创建一个新的Google Sheet。
 * 2. 给这个Sheet起一个明确的名称，例如“网站联系表单提交记录”。
 * 3. 复制浏览器地址栏中的Sheet ID。ID是URL中 `/d/` 和 `/edit` 之间的那串长字符。
 *    - 例如, 在URL `https://docs.google.com/spreadsheets/d/1aBcDeFgHiJkLmNoPqRsTuVwXyZ.../edit` 中, 
 *      ID就是 `1aBcDeFgHiJkLmNoPqRsTuVwXyZ...`。
 * 4. 将复制的ID粘贴到下面 `const SHEET_ID = 'YOUR_SHEET_ID';` 的 `YOUR_SHEET_ID` 位置。
 *
 * ### 第二步：创建并部署Google Apps Script
 * 1. 访问 https://script.google.com/home/my 创建一个新的Apps Script项目。
 * 2. 给项目命名，例如“网站表单处理脚本”。
 * 3. 删除默认的 `Code.gs` 文件内容，然后将本文件的所有代码粘贴进去。
 * 4. 点击顶部的“保存项目”图标（软盘图标）。
 * 5. 点击右上角的“部署”按钮，然后选择“新建部署”。
 * 6. 在“选择类型”旁边，点击齿轮图标，选择“Web应用”。
 * 7. 在“配置”部分，进行如下设置：
 *    - **说明**: (可选) 添加一个描述，例如“处理官网联系表单”。
 *    - **执行应用的用户**: 选择“我”。
 *    - **谁可以访问**: 选择“任何人”。**（这是必须的，否则您的网站无法调用此脚本）**
 * 8. 点击“部署”按钮。
 * 9. Google会请求授权。点击“授权访问”，选择您的Google账号，并同意所有权限请求（可能会有“不安全”提示，请选择“高级”并继续）。
 * 10. 部署成功后，会弹出一个窗口，其中包含一个“Web应用”的URL。**复制这个URL**。
 *
 * ### 第三步：在您的前端项目中配置环境变量
 * 1. 在您的Next.js项目根目录下，找到或创建一个名为 `.env.local` 的文件。
 * 2. 在 `.env.local` 文件中，添加以下内容，将您上一步复制的URL粘贴进去：
 *    `NEXT_PUBLIC_GOOGLE_SCRIPT_URL=您复制的Web应用URL`
 * 3. **重要**: 保存文件后，需要**重启您的开发服务器** (npm run dev) 以使环境变量生效。
 *
 * --- 完成 ---
 * 现在，您的联系表单应该可以正常工作了。提交的每一条新信息都会自动出现在您创建的Google Sheet中。
 */

// ******************** 在这里粘贴您的Google Sheet ID ********************
const SHEET_ID = 'YOUR_SHEET_ID';
// *************************************************************************

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