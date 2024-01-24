import { defineStore } from 'pinia'

export const useBillPaymentStore = defineStore('billsPaymentStore', {
    state: () => ({
        showBillsPaymentModal: false,
        billsPaymentType:null,
    }),

    getters: {
        isPaymentModal: state => state.showBillsPaymentModal,
        getBillsPaymentType: state => state.billsPaymentType
    },

    actions: {
        handleBillsModal(value) {
            this.billsPaymentType = value
            this.showBillsPaymentModal = !this.showBillsPaymentModal
        },
    }
})
