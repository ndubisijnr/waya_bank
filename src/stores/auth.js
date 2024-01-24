import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        createCAccountFormStage: 'first',
        createPAccountFormStage: 'first',
        forgotPasswordFormStage: 'first',
        formType: 'CA',
    }),

    getters: {
        caFormStage: state => state.createCAccountFormStage,
        paFormStage: state => state.createPAccountFormStage,
        fpFormStage: state => state.forgotPasswordFormStage,
        getFormType: state => state.formType,
    },

    actions: {
        handleNext(formStage) {
            switch (formStage){
                case 'pa':
                    this.createPAccountFormStage = 'second'
                    break
                case 'ca':
                    this.createCAccountFormStage = 'second'
                    break
                case 'fp':
                    this.forgotPasswordFormStage = 'second'
                    break
                case 'ca-form-2':
                    this.createCAccountFormStage = 'third'
            }
        },

        handleFormType(formType){
            switch (formType){
                case 'PA':
                    this.formType = 'PA'
                    break
                case 'CA':
                    this.formType = 'CA'
                    break
            }
        },
    }
})
