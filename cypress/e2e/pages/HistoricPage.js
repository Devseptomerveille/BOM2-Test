//from historicpage
export class HistoricPage{
    click_historic_field ='[data-testid="agent_payments_history-menu-item"]'
    click_service_ident=".column-serviceTitle > .MuiButtonBase-root > span"
    destination_ident =".MuiTableHead-root > .MuiTableRow-root > :nth-child(2) > span"
    click_collected_amount_ident=".column-totalAmount > .MuiButtonBase-root > span"
    click_paid_at_ident =".column-timestamp > .MuiButtonBase-root > span"
    ptn_ident=" .MuiTableHead-root > .MuiTableRow-root > :nth-child(5)"
    click_processed_at_ident =".MuiTableHead-root > .MuiTableRow-root > .column-clearingDate"
    click_payment_status_ident=".column-status > .MuiButtonBase-root > span"
    actions_ident=".MuiTableHead-root > .MuiTableRow-root > :nth-child(8) > span"
    rows_per_page_ident="#mui-21"
    select_rows_per_page_ident='#menu- > .MuiPaper-root > .MuiList-root > .Mui-selected'
    click_pagination_1_ident=".MuiPagination-ul1"
}