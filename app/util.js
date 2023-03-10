import { getCurrencyFormat } from "./includes/currency_format";

export const APP_STATUS_ERROR = 'error';
export const APP_STATUS_LOADING = 'loading';
export const APP_STATUS_REFRESHING_TOKEN = 'refreshing token';
export const APP_STATUS_SUCCESS = 'success';

export const KYC_STATUS_NO_ATTEMPT = 'NO_ATTEMPT';
export const KYC_STATUS_FAILED = 'FAILED';
export const KYC_STATUS_PASSED = 'PASSED';

export const BIOMETRY_TYPE_FACE_ID = 'FaceID';
export const BIOMETRY_TYPE_TOUCH_ID = 'TouchID';
export const BIOMETRY_TYPE_ANDROID_BIOMETRICS = true;

export const TRANSACTION_TYPE_DEPOSIT = 'DEPOSIT';
export const TRANSACTION_TYPE_WITHDRAWAL = 'WITHDRAWAL';
export const TRANSACTION_TYPE_INTEREST_PAID = 'INTEREST_PAID';
export const TRANSACTION_TYPE_CARBON_CREDIT_PAID = 'CARBON_CREDIT_PAID';
export const TRANSACTION_TYPE_INTEREST_ACCRUED = 'INTEREST_ACCRUED';
export const TRANSACTION_TYPE_TRANSFER = 'TRANSFER';
export const TRANSACTION_TYPE_SALARY = 'SALARY';

export const SALARY_MONDAY = 'Monday';
export const SALARY_TUESDAY = 'Tuesday';
export const SALARY_WEDNESDAY = 'Wednesday';
export const SALARY_THURSDAY = 'Thursday';
export const SALARY_FRIDAY = 'Friday';
export const SALARY_SATURDAY = 'Saturday';
export const SALARY_SUNDAY = 'Sunday';



export const DEPOSIT_TYPE_MANUAL = 'Manual';
export const DEPOSIT_TYPE_AUTOMATED = 'Automated';

export const DIRECT_DEBIT_FREQUENCY_DAILY = 'Daily';
export const DIRECT_DEBIT_FREQUENCY_WEEKLY = 'Weekly';
export const DIRECT_DEBIT_FREQUENCY_FORTNIGHTLY = 'Fortnightly';
export const DIRECT_DEBIT_FREQUENCY_MONTHLY = 'Monthly';

export const DIRECT_DEBIT_PERIOD_DAY = 'DAY';
export const DIRECT_DEBIT_PERIOD_WEEK = 'WEEK';
export const DIRECT_DEBIT_PERIOD_MONTH = 'MONTH';
export const DIRECT_DEBIT_PERIOD_YEAR = 'YEAR';

export const FEATURE_FLAG_LIVE_BALANCE = 'live-balance';

export const TESTS_RUNNING = process.env.JEST_WORKER_ID !== undefined;

export const APP_VALID_STATUSES = [
    APP_STATUS_ERROR,
    APP_STATUS_LOADING,
    APP_STATUS_REFRESHING_TOKEN,
    APP_STATUS_SUCCESS,
];

export const KYC_STATUS_TYPES = [
    KYC_STATUS_NO_ATTEMPT,
    KYC_STATUS_FAILED,
    KYC_STATUS_PASSED,
];

export const SUPPORTED_BIOMETRY_TYPES = [
    BIOMETRY_TYPE_FACE_ID,
    BIOMETRY_TYPE_TOUCH_ID,
    BIOMETRY_TYPE_ANDROID_BIOMETRICS,
];

export const TRANSACTION_TYPES = [
    TRANSACTION_TYPE_DEPOSIT,
    TRANSACTION_TYPE_WITHDRAWAL,
    TRANSACTION_TYPE_INTEREST_PAID,
    TRANSACTION_TYPE_CARBON_CREDIT_PAID,
    TRANSACTION_TYPE_INTEREST_ACCRUED,
    TRANSACTION_TYPE_TRANSFER,
    TRANSACTION_TYPE_SALARY,
];

export const DIRECT_DEBIT_FREQUENCIES = [
    // DIRECT_DEBIT_FREQUENCY_DAILY,
    DIRECT_DEBIT_FREQUENCY_WEEKLY,
    DIRECT_DEBIT_FREQUENCY_FORTNIGHTLY,
    DIRECT_DEBIT_FREQUENCY_MONTHLY,
];

export const SALARY_FREQUENCIES = [
    DIRECT_DEBIT_FREQUENCY_MONTHLY,
    DIRECT_DEBIT_FREQUENCY_FORTNIGHTLY,
];

export const SALARY_DAYS = [
    SALARY_MONDAY,
    SALARY_TUESDAY,
    SALARY_WEDNESDAY,
    SALARY_THURSDAY,
    SALARY_FRIDAY,
];


export const DIRECT_DEBIT_PERIODS = [
    DIRECT_DEBIT_PERIOD_DAY,
    DIRECT_DEBIT_PERIOD_WEEK,
    DIRECT_DEBIT_PERIOD_MONTH,
    DIRECT_DEBIT_PERIOD_YEAR,
];

export const DIRECT_DEBIT_PERIOD_FOR_FREQUENCY = {
    [DIRECT_DEBIT_FREQUENCY_DAILY]: DIRECT_DEBIT_PERIOD_DAY,
    [DIRECT_DEBIT_FREQUENCY_WEEKLY]: DIRECT_DEBIT_PERIOD_WEEK,
    [DIRECT_DEBIT_FREQUENCY_FORTNIGHTLY]: DIRECT_DEBIT_PERIOD_WEEK,
    [DIRECT_DEBIT_FREQUENCY_MONTHLY]: DIRECT_DEBIT_PERIOD_MONTH,
};

export const getFrequencyLabelForUnitPeriod = (unit, period) => {
    let result = '';
    if (unit === 1) {
        if (period === DIRECT_DEBIT_PERIOD_WEEK) {
            result = DIRECT_DEBIT_FREQUENCY_WEEKLY;
        }
        else if (period === DIRECT_DEBIT_PERIOD_MONTH) {
            result = DIRECT_DEBIT_FREQUENCY_MONTHLY;
        }
        else if (period === DIRECT_DEBIT_PERIOD_DAY) {
            result = DIRECT_DEBIT_FREQUENCY_DAILY;
        }
    } else if (unit === 2 && period === DIRECT_DEBIT_PERIOD_WEEK) {
        result = DIRECT_DEBIT_FREQUENCY_FORTNIGHTLY;
    }

    return result;
}

export const FEATURE_FLAGS = [
    FEATURE_FLAG_LIVE_BALANCE,
];

export const PLATFORM_TYPE_FAMILY_FRIENDS = 'FAMILY_FRIENDS';
export const PLATFORM_TYPE_INSTAGRAM = 'INSTAGRAM';
export const PLATFORM_TYPE_FACEBOOK = 'FACEBOOK';
export const PLATFORM_TYPE_TIKTOK = 'TIKTOK';
export const PLATFORM_TYPE_GOOGLE = 'GOOGLE';
export const PLATFORM_TYPE_OTHER = 'OTHER';

export const REFERRAL_PLATFORM_TYPES = {
    [PLATFORM_TYPE_FAMILY_FRIENDS]: 'Friends/Family',
    [PLATFORM_TYPE_INSTAGRAM]: 'Instagram',
    [PLATFORM_TYPE_FACEBOOK]: 'Facebook',
    [PLATFORM_TYPE_TIKTOK]: 'TikTok',
    [PLATFORM_TYPE_GOOGLE]: 'Google',
    [PLATFORM_TYPE_OTHER]: 'Other',
};

export const SPENDING_ITEM_COFFEE = 'COFFEE';
export const SPENDING_ITEM_MEAL = 'MEAL';
export const SPENDING_ITEM_DRINK = 'DRINK';
export const SPENDING_ITEM_TRIP = 'TRIP';
export const SPENDING_ITEM_TAXI = 'TAXI';
export const SPENDING_ITEM_CLOTHES = 'CLOTHES';

export const SPENDING_ITEM_COFFEE_COST = 4.5;
export const SPENDING_ITEM_MEAL_COST = 20;
export const SPENDING_ITEM_DRINK_COST = 10;
export const SPENDING_ITEM_TRIP_COST = 6.5;
export const SPENDING_ITEM_TAXI_COST = 20;
export const SPENDING_ITEM_CLOTHES_AMOUNT = 0;

export const SPENDING_ITEMS = {
    [SPENDING_ITEM_COFFEE]: {
        title: '☕ Coffees',
        amount: SPENDING_ITEM_COFFEE_COST,
        description: `Assuming ${getCurrencyFormat('AUD', SPENDING_ITEM_COFFEE_COST)} a coffee`,
        usualPrefix: 'You usually drink',
        actualSuffix: 'coffee(s) not sipped',
    },
    [SPENDING_ITEM_MEAL]: {
        title: '🍟 Meals out (or delivered)',
        amount: SPENDING_ITEM_MEAL_COST,
        description: `Assuming ${getCurrencyFormat('AUD', SPENDING_ITEM_MEAL_COST)} a meal`,
        usualPrefix: 'You usually eat',
        actualSuffix: 'meal(s) not eaten',
    },
    [SPENDING_ITEM_DRINK]: {
        title: '🍷 Drinks',
        amount: SPENDING_ITEM_DRINK_COST,
        description: `Assuming ${getCurrencyFormat('AUD', SPENDING_ITEM_DRINK_COST)} a drink`,
        usualPrefix: 'You usually drink',
        actualSuffix: 'drink(s) not drunk',
    },
    [SPENDING_ITEM_TRIP]: {
        title: '🚃 Public transport trips',
        amount: SPENDING_ITEM_TRIP_COST,
        description: `Assuming ${getCurrencyFormat('AUD', SPENDING_ITEM_TRIP_COST)} a day`,
        usualPrefix: 'You usually take',
        actualSuffix: 'time(s) not taken',
    },
    [SPENDING_ITEM_TAXI]: {
        title: '🚕 Taxis',
        amount: SPENDING_ITEM_TAXI_COST,
        description: `Assuming ${getCurrencyFormat('AUD', SPENDING_ITEM_TAXI_COST)} a ride`,
        usualPrefix: 'You usually take',
        actualSuffix: 'time(s) not taken',
    },
    [SPENDING_ITEM_CLOTHES]: {
        title: '👖 Clothes',
        amount: SPENDING_ITEM_CLOTHES_AMOUNT,
        description: 'Amount spent on clothes',
        usualPrefix: 'You usually spend',
        actualSuffix: 'not spent',
    },
};

export const SPENDING_ITEM_EMPTY_COUNT = 0;

export const SPENDING_ITEM_DEFAULT_COUNTS = {
    [SPENDING_ITEM_COFFEE]: SPENDING_ITEM_EMPTY_COUNT,
    [SPENDING_ITEM_MEAL]: SPENDING_ITEM_EMPTY_COUNT,
    [SPENDING_ITEM_DRINK]: SPENDING_ITEM_EMPTY_COUNT,
    [SPENDING_ITEM_TRIP]: SPENDING_ITEM_EMPTY_COUNT,
    [SPENDING_ITEM_TAXI]: SPENDING_ITEM_EMPTY_COUNT,
    [SPENDING_ITEM_CLOTHES]: SPENDING_ITEM_EMPTY_COUNT,
};

export const SWYDS_MODE_CREATE = 'SWYDS_MODE_CREATE';
export const SWYDS_MODE_EDIT = 'SWYDS_MODE_EDIT';


export const EMAIL_TYPE_NEWSLETTER = 'newsletter';
export const EMAIL_TYPE_PROMOTIONS = 'promotions';
export const EMAIL_TYPE_SALARY_REMINDER = 'salaryReminder';
export const EMAIL_TYPE_PRODUCT_FEATURES = 'productFeatures';
export const EMAIL_TYPE_INTEREST_NOTIFY = 'interestNotify';

export const EMAIL_TYPE_SETTINGS = {
    [EMAIL_TYPE_NEWSLETTER]: 'isNewsletterEmailsSubscribed',
    [EMAIL_TYPE_PROMOTIONS]: 'isPromotionEmailsSubscribed',
    // [EMAIL_TYPE_SALARY_REMINDER]: 'isSalaryEmailsSubscribed',
    [EMAIL_TYPE_PRODUCT_FEATURES]: 'isProductFeatureEmailsSubscribed',
    // [EMAIL_TYPE_INTEREST_NOTIFY]: 'isNotifyInterestEmailsSubscribed',
};

export const PN_TYPE_BREAKING_NEWS = 'breakingNews';
export const PN_TYPE_SALARY_REMINDER = 'salaryReminder';
export const PN_TYPE_INTEREST_NOTIFY = 'interestNotify';

export const PN_TYPE_SETTINGS = {
    [PN_TYPE_BREAKING_NEWS]: 'isNewsPNSubscribed',
    [PN_TYPE_SALARY_REMINDER]: 'isSalaryPNSubscribed',
    // [PN_TYPE_INTEREST_NOTIFY]: 'isNotifyInterestPNSubscribed',
};

export const SALARY_VIA_EMPLOYER = 'VIA_EMPLOYER';
export const SALARY_VIA_EMPLOYER_UPDATE = 'VIA_EMPLOYER_UPDATE';
export const SALARY_DIRECT_DEBIT = 'DIRECT_DEBIT';

export const SALARY_AMOUNT_TYPE_PERCENTAGE = 'PERCENTAGE';
export const SALARY_AMOUNT_TYPE_FIXED = 'FIXED';
