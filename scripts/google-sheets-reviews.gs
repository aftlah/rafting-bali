/**
 * Wild ATV Bali — Testimoni via Google Sheets
 *
 * SETUP (sekali saja):
 * 1. Buka https://sheets.google.com → buat spreadsheet baru
 *    Nama contoh: "Wild ATV Bali — Reviews"
 * 2. Rename sheet pertama jadi: Reviews
 * 3. Baris 1 (header), isi kolom A–G:
 *    Timestamp | Name | Place | Text | Rating | Status | Lang
 * 4. Extensions → Apps Script → hapus kode default → paste SELURUH file ini
 * 5. Simpan (Ctrl+S)
 * 6. Deploy → New deployment → jenis: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 7. Deploy → salin Web app URL
 * 8. Tempel URL itu di file .env:
 *    VITE_REVIEWS_SCRIPT_URL=https://script.google.com/macros/s/XXXX/exec
 * 9. Restart npm run dev / rebuild & deploy website
 *
 * MODERASI:
 * - Testimoni baru masuk dengan Status = pending (belum tampil di website)
 * - Ubah Status jadi approved agar muncul di website
 * - Bisa juga isi rejected untuk menolak
 */

var SHEET_NAME = 'Reviews'
var HEADERS = ['Timestamp', 'Name', 'Place', 'Text', 'Rating', 'Status', 'Lang']
var STATUS_OPTIONS = ['pending', 'approved', 'rejected']

function doGet() {
  try {
    var sheet = getSheet_()
    ensureStatusDropdown_(sheet)

    var rows = sheet.getDataRange().getValues()
    if (rows.length < 2) {
      return json_({ ok: true, reviews: [] })
    }

    var reviews = []
    for (var i = 1; i < rows.length; i++) {
      var row = rows[i]
      var status = String(row[5] || '').toLowerCase().trim()
      if (status !== 'approved') continue

      var name = String(row[1] || '').trim()
      var text = String(row[3] || '').trim()
      if (!name || !text) continue

      reviews.push({
        name: name,
        place: String(row[2] || '').trim(),
        text: text,
        rating: Number(row[4]) || 5,
      })
    }

    // Terbaru di atas
    reviews.reverse()

    return json_({ ok: true, reviews: reviews })
  } catch (err) {
    return json_({ ok: false, error: String(err) })
  }
}

function doPost(e) {
  try {
    var data = parseBody_(e)
    var name = String(data.name || '').trim()
    var place = String(data.place || '').trim()
    var text = String(data.text || '').trim()
    var rating = Math.min(5, Math.max(1, Number(data.rating) || 5))
    var lang = String(data.lang || 'en').trim().slice(0, 5)

    if (name.length < 2 || text.length < 10) {
      return json_({ ok: false, error: 'Invalid input' })
    }
    if (name.length > 80 || place.length > 80 || text.length > 800) {
      return json_({ ok: false, error: 'Too long' })
    }

    var sheet = getSheet_()
    ensureStatusDropdown_(sheet)

    sheet.appendRow([
      new Date().toISOString(),
      name,
      place,
      text,
      rating,
      'pending',
      lang,
    ])

    return json_({ ok: true })
  } catch (err) {
    return json_({ ok: false, error: String(err) })
  }
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = ss.getSheetByName(SHEET_NAME)
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME)
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS)
  }
  return sheet
}

/** Pasang dropdown Status di F2:F1000 agar baris baru ikut punya dropdown */
function ensureStatusDropdown_(sheet) {
  var range = sheet.getRange('F2:F1000')
  var rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(STATUS_OPTIONS, true)
    .setAllowInvalid(false)
    .setHelpText('Pilih: pending / approved / rejected')
    .build()
  range.setDataValidation(rule)
}

function parseBody_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('Empty body')
  }
  return JSON.parse(e.postData.contents)
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  )
}
