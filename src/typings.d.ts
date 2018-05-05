/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
    id: string;
}


type FilingType = 'Q1' | 'Q2' | 'Q3' | 'K';

interface CompanySchema {
    cik: string;
    company_name: string;
    data: [{
        year: number;
        type: FilingType;
        prob_known: number;
        prob_uknown: number;
        current_ratio: number;
        debt_ratio: number;
        industry_avg: number;
    }];
    schema_version: string;
}
