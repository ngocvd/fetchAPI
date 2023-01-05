"# fetchAPI" 

import http from '@ngocvd/fetchapi'

http.defaults.baseURL = 'http://localhost/api';
http.defaults.token = document.head.querySelector('meta[name="csrf-token"]');

**#Upload file:**

var fileObj = param.file;   //get file content from a form
var form = new FormData();
form.append('logo', fileObj);

**this.$http.upload("/api/api-url", form).subscribe({
    next: (data) => {
        if (data.hasOwnProperty("result")) {
            this.logo = data.result.logo;
            //this.$notify("Upload Ok!");
        } else {
            /*this.$notify({
                message: data.errors[0],
                type: "error",
                showClose: true,
            });
            */
        }
    },
    error: (error) => {
        //this.errorMessage = error;
        this.$notify({
            message: "Error!" + error,
            type: "error",
            showClose: true,
        });
        console.error("There was an error!", error);
    },
});**

#Get data:


**this.$http.get("/api/api-url").subscribe({
    next: (data) => {
        if (data.hasOwnProperty("result")) {
            this.logo = data.result.logo;
            //this.$notify("get Ok!");
        } else {
            /*this.$notify({
                message: data.errors[0],
                type: "error",
                showClose: true,
            });
            */
        }
    },
    error: (error) => {
        //this.errorMessage = error;
        this.$notify({
            message: "Error!" + error,
            type: "error",
            showClose: true,
        });
        console.error("There was an error!", error);
    },
});**

#Post data
**this.$http.post("/api/api-url", {
                lienhe: 'this.lienhe',
    })
    .subscribe({
    next: (data) => {
        if (data.hasOwnProperty("result")) {
            this.logo = data.result.logo;
            //this.$notify("post Ok!");
        } else {
            /*this.$notify({
                message: data.errors[0],
                type: "error",
                showClose: true,
            });
            */
        }
    },
    error: (error) => {
        //this.errorMessage = error;
        this.$notify({
            message: "Error!" + error,
            type: "error",
            showClose: true,
        });
        console.error("There was an error!", error);
    },
});**
