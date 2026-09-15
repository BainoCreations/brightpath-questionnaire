const SHEET_NAME = 'Responses';

function setupSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);

  const headers = [
    'Timestamp', 'Company’s official registered name', 'Year the company was established',
    'Brief history of Brightpath Uniforms Limited', 'Company mission and vision',
    'Physical business address', 'Official business phone number(s)',
    'Official business email address', 'Website contact person and designation',
    'Company tagline or slogan, if any', 'Which types of uniforms do you supply?',
    'Does the company manufacture uniforms, supply ready-made uniforms, or both?',
    'Do you offer custom design, embroidery, printing, or branding?',
    'What other supplies does the company deal in apart from uniforms?',
    'List your main product categories and products under each category.',
    'Which products or services are your main priorities for the website?',
    'Which services do you offer?', 'Do you offer delivery services? If yes, which locations do you cover?',
    'Who are your primary customers?', 'Which geographical areas do you serve?',
    'Who are your main competitors, if known?',
    'What makes Brightpath Uniforms Limited different from other suppliers?',
    'What are the three main reasons customers should choose your company?',
    'Do you have client testimonials, references, or previous projects to showcase?',
    'Please provide your company logo.', 'Do you have established brand colors? If yes, provide color codes or examples.',
    'Do you have preferred fonts or typography styles?', 'What overall website design style do you prefer?',
    'Share links to websites whose designs you admire and explain what you like about them.',
    'Are there any website styles or colors you do not like?',
    'Please provide existing brochures, company profiles, catalogues, or marketing materials.',
    'Which pages should the website include?',
    'Should uniforms and other supplies have separate sections or pages?',
    'Should customers view individual products with images, descriptions, sizes, colors, and specifications?',
    'Should product prices be displayed publicly?', 'Do you have a complete product list or catalogue ready?',
    'Who will provide the website text and product descriptions?',
    'Please provide your product catalogue, product list, or product images.',
    'Which features would you like included?',
    'Should customers be able to submit quotation requests directly through the website?',
    'Where should website enquiries be sent?',
    'Provide the email address and WhatsApp number for receiving enquiries.',
    'Do you require an administrative dashboard to manage products and enquiries?',
    'Do you require online ordering or online payments? If yes, describe your requirements.',
    'Do you require search engine optimization (SEO) and Google visibility?',
    'Do you already own a domain name? If yes, provide it.',
    'Do you already have website hosting? If yes, provide the hosting provider.',
    'Do you have an existing business email linked to your domain?',
    'Who will purchase and manage the domain and hosting?',
    'Do you require professional email addresses such as info@brightpathuniforms.co.ke?',
    'Please provide links to your official social media accounts.',
    'Do you require website maintenance, backups, and regular updates?',
    'What are the main goals you want to achieve through the website?',
    'What is your preferred website launch date?',
    'Do you have any upcoming events, tenders, or deadlines the website should support?',
    'What is your estimated budget range for the website project?',
    'Who will approve the website design and content?',
    'What is the preferred method of communication during the project?',
    'Is there anything else you would like us to know?'
  ];
  sheet.clear();
  sheet.getRange(1,1,1,headers.length).setValues([headers]);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1,headers.length);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}');
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error('Responses sheet not found. Run setupSheet first.');
    const headers = sheet.getRange(1,1,1,sheet.getLastColumn()).getValues()[0];
    sheet.appendRow(headers.map(h => data[h] || ''));
    return json({success:true});
  } catch (error) {
    return json({success:false,error:error.message});
  }
}
function json(obj){return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);}
