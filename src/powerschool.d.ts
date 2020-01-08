
declare module "powerschool-api" {
    /** The main PowerSchool API wrapper, for logging into user accounts and caching of retrieved info. */
    export default class PowerSchoolAPI {
        /**
         * Create an API wrapper.
         * @param {string} url - The main URL of the PowerSchool installation, such as "http://sales.powerschool.com".
         * @param {string} [apiUsername] - The API username to use for logging in, if your installation has a different one. For most installations, the default provided value should work.
         * @param {string} [apiPassword] - The API password to use for logging in, if your installation has a different one. For most installations, the default provided value should work.
         */
        constructor(url: string, apiUsername?: string, apiPassword?: string);

        /**
         * Setup the API wrapper for usage (required for any interaction).
         * @return {Promise.<PowerSchoolAPI, Error>} - A promise that returns the API again if resolved, or an Error if rejected. 
         */
        setup(): Promise<this>;

        /**
         * Log into a user's account and get their user object.
         * @param {string} username - The username of the account to log in to.
         * @param {string} password - The password of the account to log in to.
         * @return {Promise.<PowerSchoolUser, Error>} - A promise that resolves with the user if login was successful, resolves to null if invalid credentials were provided, and rejects with an Error if another error occurred during login.
         */
        login(username: string, password: string): Promise<PowerSchoolUser>;
    }

    /** 
     * A PowerSchool assignment.
     * @hideconstructor
     */
    export class PowerSchoolAssignment {
        /**
         * The ID of this assignment.
         * @member {number}
         */
        public id: number;

        /**
         * The secondary ID of this assignment in the system.
         * @member {number}
         */
        public assignmentID: number;

        /**
         * The name of this assignment.
         * @member {string}
         */
        public name: string;

        /**
         * A shorter name for this assignment.
         * @member {string}
         */
        public abbreviation: string;

        /**
         * The category this assignment belongs to.
         * @member {number}
         */
        public categoryID: number;

        /**
         * The course this assignment belongs to.
         * @member {number}
         */
        public courseID: number;

        /**
         * The description of this assignment, if available.
         * @member {string}
         */
        public description: string;

        /**
         * The due date of this assignment.
         * @member {Date}
         */
        public dueDate: string;

        /**
         * The grade book type for this assignment.
         * @member {number}
         */
        public gradeBookType: number;

        /**
         * The weight this assignment carries on the overall course mark.
         * @member {number}
         */
        public weight: number;

        /**
         * Whether or not this assignment's mark will influence the final grade in this course.
         * @member {string}
         */
        public includeInFinalGrades: string;

        /**
         * Whether scores for this assignment will be published or not.
         * @member {boolean}
         */
        public publishScores: boolean;

        /**
         * The specific date scores for this assignment will be published, if available.
         * @member {Date}
         */
        public scorePublishDate: Date;

        /**
         * Get the score received on this assignment, if available.
         * @return {PowerSchoolAssignmentScore}
         */
        getScore(): PowerSchoolAssignmentScore;

        /**
         * Get the category this assigmment belongs to.
         * @return {PowerSchoolAssignmentCategory}
         */
        getCategory(): PowerSchoolAssignmentCategory;

        /**
         * Get the course this assigmment belongs to.
         * @return {PowerSchoolCourse}
         */
        getCourse(): PowerSchoolCourse;
    }

    /** 
     * A category for a PowerSchool assignment.
     * @hideconstructor
     */
    export class PowerSchoolAssignmentCategory {
        /**
             * The ID of this assignment.
             * @member {number}
             */
        public id: number;

        /**
         * The name of this category.
         * @member {string}
         */
        public name: string;

        /**
         * A shorter name for this category.
         * @member {string}
         */
        public abbreviation: string;

        /**
         * A description of this category, if available.
         * @member {string}
         */
        public description: string;

        /**
         * The grade book type for this assignment.
         * @member {number}
         */
        public gradeBookType: number;

        /**
         * The assignments in this category.
         * @member {Array.<PowerSchoolAssignment>}
         */
        public assignments: PowerSchoolAssignment[];
    }

    /** 
     * The score received for a PowerSchool assignment.
     * @hideconstructor
     */
    export class PowerSchoolAssignmentScore {
        /**
         * The ID of this assignment.
         * @member {number}
         */
        public id: number;

        /**
         * The secondary ID of this assignment in the system.
         * @member {number}
         */
        public assignmentID: number;

        /**
         * Whether or not this assignment has been collected yet.
         * @member {boolean}
         */
        public collected: boolean;

        /**
         * Whether or not this assignment is late.
         * @member {boolean}
         */
        public late: boolean;

        /**
         * Whether or not this assignment is missing.
         * @member {boolean}
         */
        public missing: boolean;

        /**
         * Whether or not the student is exempt from completing this assignment.
         * @member {boolean}
         */
        public exempt: boolean;

        /**
         * The grade book type for this assignment.
         * @member {number}
         */
        public gradeBookType: number;

        /**
         * The teacher's comment on this assignment, if available.
         * @member {string}
         */
        public comment: string;

        /**
         * The score received on this assignment.
         * @member {string}
         */
        public score: string;

        /**
         * The score received on this assignment (as a percentage value from 0-1), if able to calculate.
         * @member {number}
         */
        public percentage: number;

        /**
         * The letter grade received on this assignment (can be any string used for display of score).
         * @member {string}
         */
        public letterGrade: string;

        /**
         * The scoring type used on this assignment.
         * @member {number}
         */
        public scoreType: number;

        /**
         * Get the assignment this score was received on.
         * @return {PowerSchoolAssignment}
         */
        getAssignment(): PowerSchoolAssignment;
    }

    /** 
     * A code assigned to a PowerSchool attendance record.
     * @hideconstructor
     */
    export class PowerSchoolAttendanceCode {
        /**
         * The ID of this attendance code.
         * @member {number}
         */
        public id: number;

        /**
         * The string representing this code.
         * @member {string}
         */
        public code: string;

        /**
         * A short description of this code.
         * @member {string}
         */
        public description: string;

        /**
         * The type of this code.
         * @member {number}
         */
        public type: number;

        /**
         * The number of the school this code belongs to.
         * @member {number}
         */
        public schoolNumber: number;

        /**
         * A number representing the order this code should appear in when sorted.
         * @member {number}
         */
        public sortOrder: number;

        /**
         * The year ID this code is valid for.
         * @member {number}
         */
        public yearID: number;

        /**
         * Get the school this code belongs to.
         * @return {PowerSchoolSchool}
         */
        getSchool(): PowerSchoolSchool;
    }

    /** 
     * A PowerSchool attendance record, such as a deviation from normal attendance.
     * @hideconstructor
     */
    export class PowerSchoolAttendanceRecord {
        /**
         * The ID of this attendance code.
         * @member {number}
         */
        public id: number;

        /**
         * The identifier for this attendance record's code.
         * @member {number}
         */
        public codeID: number;

        /**
         * A comment left with this record.
         * @member {string}
         */
        public comment: string;

        /**
         * The date the attendance for this record occurred on.
         * @member {Date}
         */
        public date: Date;

        /**
         * The number of the school this record was created by.
         * @member {number}
         */
        public schoolNumber: number;

        /**
         * The identifier of the period this record covers.
         * @member {number}
         */
        public periodID: number;

        /**
         * The identifier of the student this record involves.
         * @member {number}
         */
        public studentID: number;

        /**
         * The number of minutes this record accounts for, if not all (zero).
         * @member {number}
         */
        public totalMinutes: number;

        /**
         * Get the school this record belongs to.
         * @return {PowerSchoolSchool}
         */
        getSchool(): PowerSchoolSchool;

        /**
         * Get the period this record covers.
         * @return {PowerSchoolPeriod}
         */
        getPeriod(): PowerSchoolPeriod;

        /**
         * Get the code of this record.
         * @return {PowerSchoolAttendanceCode}
         */
        getCode(): PowerSchoolAttendanceCode;
    }

    /** 
     * A PowerSchool course.
     * @hideconstructor
     */
    export class PowerSchoolCourse {
        /**
         * The ID of this course.
         * @member {number}
         */
        public id: number;

        /**
         * The title of this course.
         * @member {string}
         */
        public title: string;

        /**
         * The code of this course.
         * @member {string}
         */
        public code: string;

        /**
         * The number of the school this course is from.
         * @member {number}
         */
        public schoolNumber: number;

        /**
         * The ID of the term this course is a part of.
         * @member {number}
         */
        public termID: number;

        /**
         * A number to use to sort this period among others.
         * @member {number}
         */
        public periodSort: number;

        /**
         * The name of the room this course takes place in.
         * @member {string}
         */
        public roomName: string;

        /**
         * The number of the section this course is in.
         * @member {string}
         */
        public sectionNumber: string;

        /**
         * The ID of the teacher teaching this course.
         * @member {string}
         */
        public teacherID: string;

        /**
         * An expression to use to sort this course's period among others.
         * @member {string}
         */
        public expression: string;

        /**
         * The coursebook type of this course.
         * @member {number}
         */
        public gradeBookType: number;

        /**
         * The description text of this course.
         * @member {string}
         */
        public description: string;

        /**
         * Get the term this course is a part of.
         * @return {PowerSchoolTerm}
         */
        getTerm(): PowerSchoolTerm;

        /**
         * Get the school this course is from.
         * @return {PowerSchoolSchool}
         */
        getSchool(): PowerSchoolSchool;

        /**
         * Get the teacher teaching this course.
         * @return {PowerSchoolTeacher}
         */
        getTeacher(): PowerSchoolTeacher;

        /**
         * Get the final grade received in this course, if available.
         * @return {PowerSchoolFinalGrade}
         */
        getFinalGrade(): PowerSchoolFinalGrade;

        /**
         * Get any assignments associated with this course.
         * **NOTE:** This function filters through all assignments every time it is called, so use it sparingly.
         * @return {Array.<PowerSchoolAssignment>}
         */
        getAssignments(): PowerSchoolAssignment[]
    }

    /** 
     * A PowerSchool event, such as a not in session day.
     * @hideconstructor
     */
    export class PowerSchoolEvent {
        /**
         * The ID of this event.
         * @member {number}
         */
        public id: number;

        /**
         * The type of this event to group together with others.
         * @member {string}
         */
        public type: string;

        /**
         * The date of this event.
         * @member {Date}
         */
        public date: Date;

        /**
         * The description for this event.
         * @member {string}
         */
        public description: string;

        /**
         * The number of the school this event is from.
         * @member {number}
         */
        public schoolNumber: number;

        /**
         * Get the school this event is from.
         * @return {PowerSchoolSchool}
         */
        getSchool(): PowerSchoolSchool;
    }

    /** 
     * An object representing the final grade in a PowerSchool course.
     * @hideconstructor
     */
    export class PowerSchoolFinalGrade {
        /**
         * The ID of this event.
         * @member {number}
         */
        public id: number;

        /**
         * The grade received in this course, to be displayed.
         * @member {string}
         */
        public grade: string;

        /**
         * The grade received in this course as a percentage (value from 0-1), if can be calculated.
         * @member {number}
         */
        public percentage: number;

        /**
         * The date this mark was stored, if available.
         * @member {Date}
         */
        public date: Date;

        /**
         * The teacher's comment for this grade, if available.
         * @member {string}
         */
        public comment: string;

        /**
         * The identifier of the reporting term this grade is from.
         * @member {number}
         */
        public reportingTermID: number;

        /**
         * The identifier of the course this grade is from.
         * @member {number}
         */
        public courseID: number;

        /**
         * Get the reporting term this grade is from.
         * @return {PowerSchoolReportingTerm}
         */
        getReportingTerm(): PowerSchoolReportingTerm;

        /**
         * Get the course this grade is from.
         * @return {PowerSchoolCourse}
         */
        getCourse(): PowerSchoolCourse;
    }

    /** 
     * A PowerSchool period.
     * @hideconstructor
     */
    export class PowerSchoolPeriod {
        /**
         * The ID of this period.
         * @member {number}
         */
        public id: number;

        /**
         * The name of this period.
         * @member {string}
         */
        public name: string;

        /**
         * The number of this period.
         * @member {number}
         */
        public number: number;

        /**
         * The number of the school this period is from.
         * @member {number}
         */
        public schoolNumber: number;

        /**
         * A number to use to sort this period among others.
         * @member {number}
         */
        public sortOrder: number;

        /**
         * The year ID of this period.
         * @member {number}
         */
        public yearID: number;

        /**
         * Get the school this period is from.
         * @return {PowerSchoolSchool}
         */
        getSchool(): PowerSchoolSchool;
    }

    /** 
     * A PowerSchool reporting term. Marks are divided and given out in reporting terms.
     * @hideconstructor
     */
    export class PowerSchoolReportingTerm {

        /**
         * The ID of this reporting term.
         * @member {number}
         */
        public id: number;

        /**
         * The title of this reporting term.
         * @member {string}
         */
        public title: string;

        /**
         * The ID of this reporting term's term.
         * @member {number}
         */
        public termID: number;

        /**
         * A number to use to sort this reporting term among others.
         * @member {number}
         */
        public sortOrder: number;

        /**
         * Whether or not to supress showing grades from this reporting term.
         * @member {boolean}
         */
        public suppressGrades: boolean;

        /**
         * Whether or not to supress showing grade percentages from this reporting term.
         * @member {boolean}
         */
        public suppressPercents: boolean;

        /**
         * The abbreviated title of this reporting term, for use in smaller spaces.
         * @member {string}
         */
        public abbreviatedTitle: string;

        /**
         * Get the term this reporting term is from.
         * @return {PowerSchoolTerm}
         */
        getTerm(): PowerSchoolTerm;

        /**
         * Get the final grades returned from this reporting term.
         * @return {Array.<PowerSchoolFinalGrade>}
         */
        getFinalGrades(): PowerSchoolFinalGrade[];
    }

    /** 
     * A PowerSchool school information object.
     * @hideconstructor
     */
    export class PowerSchoolSchool {

        /**
         * The ID of this school.
         * @member {number}
         */
        public id: number;

        /**
         * The name of this school.
         * @member {string}
         */
        public name: string;

        /**
         * The number of this school.
         * @member {number}
         */
        public schoolNumber: number;

        /**
         * The school's address, formatted for display.
         * @member {string}
         */
        public formattedAddress: string;

        /**
         * The part's making up the school's address (such as street address, city, state/province, country, ZIP/postal code).
         * @member {object}
         */
        public addressParts: object;

        /**
         * The school's phone number, formatted for display.
         * @member {string}
         */
        public phone: string;

        /**
         * The school's fax number, formatted for display.
         * @member {string}
         */
        public fax: string;

        /**
         * The lowest grade this school has.
         * @member {number}
         */
        public lowGrade: number;

        /**
         * The highest grade this school has.
         * @member {number}
         */
        public highGrade: number;

        /**
         * Whether or not the school is currently disabled.
         * @member {boolean}
         */
        public disabled: boolean;

        /**
         * Optional messages to display for the school if it is disabled (title and message keys in the object).
         * @member {object}
         */
        public disabledMessage: object;

        /**
         * Features that are disabled on the school (object with true or false, on disabled status of each key).
         * @member {object}
         */
        public disabledFeatures: object;

        /**
         * The abbreviation for the school.
         * @member {object}
         */
        public abbreviation: object;

        /**
         * Get the attendance codes that belong to this school.
         * @return {PowerSchoolAttendanceCode}
         */
        getAttendanceCodes(): PowerSchoolAttendanceCode;
    }

    /**
     * A object meant for holding basic information about a student.
     * @hideconstructor
     */
    export class PowerSchoolStudent {
        /**
         * The student's ID.
         * @member {number}
         */
        public id: number;

        /**
         * The student's first/given name.
         * @member {string}
         */
        public firstName: string;

        /**
         * The student's middle name.
         * @member {string}
         */
        public middleName: string;

        /**
         * The student's last name/surname.
         * @member {string}
         */
        public lastName: string;

        /**
         * The student's date of birth.
         * @member {Date}
         */
        public dateOfBirth: Date;

        /**
         * The student's ethnicity (can be one of many things determined by the school itself).
         * @member {string}
         */
        public ethnicity: string;

        /**
         * The student's gender (can be one of many things determined by the school itself).
         * @member {string}
         */
        public gender: string;

        /**
         * The grade the student is currently in.
         * @member {number}
         */
        public gradeLevel: number;

        /**
         * The student's current GPA, if grades are available (null if not).
         * @member {number}
         */
        public currentGPA: number;

        /**
         * The student's current term, if available (null if not).
         * @member {number}
         */
        public currentTerm: number;

        /**
         * The date the student's photo was taken on.
         * @member {Date}
         */
        public photoDate: Date;

        /**
         * The student's current meal balance, if supported.
         * @member {number}
         */
        public currentMealBalance: number;

        /**
         * The student's starting meal balance, if supported.
         * @member {number}
         */
        public startingMealBalance: number;

        /**
         * Get the parts making up a student's name.
         * @param {boolean} [includeMiddleName] - Whether or not to include the student's middle name.
         * @return {Array.<string>}
         */
        getNameParts(includeMiddleName?: boolean): string[];

        /**
         * Get student's name formatted for display.
         * @param {boolean} [includeMiddleName] - Whether or not to include the student's middle name.
         * @return {string}
         */
        getFormattedName(includeMiddleName?: boolean): string;

        /**
         * Get the current reporting term the student is in.
         * @return {PowerSchoolReportingTerm}
         */
        getCurrentReportingTerm(): PowerSchoolReportingTerm;
    }

    /**
     * Holds information about the student.
     * @hideconstructor
     */
    export class PowerSchoolStudentInfo {
        /**
         * The student's school.
         * @member {PowerSchoolSchool}
         */
        public schools: PowerSchoolSchool;

        /**
         * The student's available periods.
         * @member {Array.<PowerSchoolPeriod>}
         */
        public periods: PowerSchoolPeriod[];

        /**
         * The student's current courses.
         * @member {Array.<PowerSchoolCourse>}
         */
        public courses: PowerSchoolCourse[];

        /**
         * The student's available terms.
         * @member {Array.<PowerSchoolTerm>}
         */
        public terms: PowerSchoolTerm[];

        /**
         * The student's reporting terms.
         * @member {Array.<PowerSchoolReportingTerm>}
         */
        public reportingTerms: PowerSchoolReportingTerm[];

        /**
         * The student's days where school isn't in session.
         * @member {Array.<PowerSchoolEvent>}
         */
        public notInSessionDays: PowerSchoolEvent[];

        /**
         * An object holding basic information about this student.
         * @member {PowerSchoolStudent}
         */
        public student: PowerSchoolStudent;

        /**
         * The student's teachers.
         * @member {Array.<PowerSchoolTeacher>}
         */
        public teachers: PowerSchoolTeacher[];

        /**
         * The student's current year ID.
         * @member {number}
         */
        public yearID: number;

        /**
         * The student's assignments, sorted into categories
         * @member {Array.<PowerSchoolAssignmentCategory>}
         */
        public assignmentCategories: PowerSchoolAssignmentCategory[];

        /**
         * The student's attendance records (deviations from normal attendance).
         * @member {Array.<PowerSchoolAttendanceRecord>}
         */
        public attendanceRecords: PowerSchoolAttendanceRecord;

        /**
         * The student's available attendance codes.
         * @member {Array.<PowerSchoolAttendanceCode>}
         */
        public attendanceCodes: PowerSchoolAttendanceCode[];

        /**
         * The student's final grades.
         * @member {Array.<PowerSchoolFinalGrade>}
         */
        public finalGrades: PowerSchoolFinalGrade[];
    }

    /** 
     * A PowerSchool teacher object.
     * @hideconstructor
     */
    export class PowerSchoolTeacher {
        /**
         * The ID of this teacher.
         * @member {number}
         */
        public id: number;

        /**
         * The first name of this teacher.
         * @member {string}
         */
        public firstName: string;

        /**
         * The last name of this teacher.
         * @member {string}
         */
        public lastName: string;

        /**
         * The email of this teacher, if provided.
         * @member {string}
         */
        public email: string;

        /**
         * The phone of this teacher's school, if provided.
         * @member {string}
         */
        public schoolPhone: string;

        /**
         * Get the parts making up a teacher's name.
         * @return {Array.<string>}
         */
        getNameParts(): string[];

        /**
         * Get teacher's name formatted for display.
         * @return {string}
         */
        getFormattedName(): string;
    }

    /** 
     * A PowerSchool term, for which courses can be a part of.
     * @hideconstructor
     */
    export class PowerSchoolTerm {
        /**
         * The ID of this term.
         * @member {number}
         */
        public id: number;

        /**
         * The title of this term.
         * @member {string}
         */
        public title: string;

        /**
         * The start date of this term.
         * @member {Date}
         */
        public startDate: Date;

        /**
         * The end date of this term.
         * @member {Date}
         */
        public endDate: Date;

        /**
         * The ID of this term's parent (0 if none).
         * @member {number}
         */
        public parentTermID: number;

        /**
         * The number of the school this term is from.
         * @member {number}
         */
        public schoolNumber: number;

        /**
         * The abbreviated title of this term, for use in smaller spaces.
         * @member {string}
         */
        public abbreviatedTitle: string;

        /**
         * Get the school this term is from.
         * @return {PowerSchoolSchool}
         */
        getSchool(): PowerSchoolSchool;
    }

    /** 
     * A PowerSchool API user, which holds information about the user and methods to interact with them.
     * @hideconstructor
     */
    export class PowerSchoolUser {
        /**
         * Get information about this account's student.
         * @return {Promise.<PowerSchoolStudentInfo[], Error>} A promise that resolves with the account's students information, and rejects with an Error if one occurred.
         */
        getStudentInfo(): Promise<PowerSchoolStudentInfo[]>;
    }
}
