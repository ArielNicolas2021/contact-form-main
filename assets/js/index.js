const app = Vue.createApp({
    data() {
        return {
            nameValid: false,
            lastNameValid: false,
            emailValid: false,
            queryValid: false,
            msgValid: false,
            checkValid: false,
            success: false,
            generalChecked: false,
            supportChecked: false,
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            if (this.$refs.name.value == '') {
                this.nameValid = true
            } else {
                this.nameValid = false
            }

            if (this.$refs.lastName.value == '') {
                this.lastNameValid = true
            } else {
                this.lastNameValid = false
            }

            if (this.$refs.email.value == '') {
                this.emailValid = true
            } else {
                this.emailValid = false
            }

            if (this.$refs.general.checked == true || this.$refs.support.checked == true) {
                this.queryValid = false
            } else {
                this.queryValid = true
            }

            if (this.$refs.msg.value == '') {
                this.msgValid = true
            } else {
                this.msgValid = false
            }

            if (this.$refs.check.checked == false) {
                this.checkValid = true
            } else {
                this.checkValid =  false
            }

            if (this.nameValid == false &&
            this.lastNameValid == false &&
            this.emailValid == false &&
            this.queryValid == false &&
            this.msgValid == false &&
            this.checkValid == false &&
            this.success == false) {
                this.success = true
            }
        },
        handleCheck() {
            if (this.$refs.general.checked) {
                this.generalChecked = true
            } else {
                this.generalChecked = false
            }

            if (this.$refs.support.checked) {
                this.supportChecked = true
            } else {
                this.supportChecked = false
            }
        }
    }
})
app.mount('body')