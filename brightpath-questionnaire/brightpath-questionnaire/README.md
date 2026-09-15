# Brightpath Uniforms Limited Questionnaire

## Setup

1. Create a Google Sheet named `Brightpath Website Questionnaire Responses`.
2. Open **Extensions → Apps Script**.
3. Paste the contents of `Code.gs`.
4. Run `setupSheet` once and authorize it.
5. Deploy as **Web app**:
   - Execute as: Me
   - Who has access: Anyone
6. Copy the Web app URL.
7. Open `index.html` and replace:

```js
const GOOGLE_SCRIPT_URL='PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
```

with your deployed URL.

## GitHub Pages

1. Create a GitHub repository, for example `brightpath-questionnaire`.
2. Upload `index.html`.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/root`, then save.
6. Your form will be available at the GitHub Pages URL shown by GitHub.

## Notes

- This version records uploaded file names, not file contents.
- For actual file uploads, connect a separate Google Drive upload workflow or a file-upload service.
- The Google Apps Script deployment must remain accessible to anyone who needs to submit the form.
