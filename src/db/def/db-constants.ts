export class DbConstants {
    static DATE_TYPE = 'DATE';
    static TEXT_TYPE = 'TEXT';
    static INT_TYPE = 'INTEGER';
    static REAL_TYPE = 'REAL';
    static COMMA_SEP = ', ';
    static SPACE = ' ';
    static MAX_NUM_OF_EVENTS = 1000;
    static MAX_NUM_OF_PROCESSED_EVENTS = 1;
    static ERROR = 'DB_ERROR';
    static BLOB_TYPE = 'BLOB';
    static NOT_NULL = 'NOT NULL';
    static NULL = 'NULL';

    static platformAdaptToken(token: string): string {
        if (['browser', 'iOS'].indexOf(window['device']['platform']) > -1) {
            return `\`${token}\``;
        } else {
            return token;
        }
    }

    static platformAdaptInclude(input: string): string {
        if (['browser', 'iOS'].indexOf(window['device']['platform']) > -1) {
            return '';
        } else {
            return input;
        }
    }
}
