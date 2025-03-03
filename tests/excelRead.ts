import * as XLSX from 'xlsx';
export function excelReadfromexcel (filePath: string):any[]{
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // Get the first sheet
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    return jsonData;
    
}

export function writeExcelFile(filePath: string, data: any[]) {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Login');
    XLSX.writeFile(wb, filePath);
}