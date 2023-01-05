import { fromFetch } from "rxjs/fetch";
//import { switchMap, of, catchError } from "rxjs";
/*
const token = document.head.querySelector('meta[name="csrf-token"]');
if (!token)
    console.error(
        "CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token"
    );
    */
const http = {
    defaults: {
        baseURL: "",
        token: {
            type: Object,
            default() {
              return { content: '' }
            },
    },
    get: function (url) {
        return fromFetch(this.defaults.baseURL + url, {
            headers: {
                "X-CSRF-TOKEN": this.defaults.token.content,
            },
            credentials: "include",
            selector: async (response) => await response.json(),
        });
    },
    post: function (url, body) {
        return fromFetch(this.defaults.baseURL + url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": this.defaults.token.content,
            },
            body: JSON.stringify(body),
            credentials: "include",
            selector: async (response) => await response.json(),
        });
    },
    upload: function (url, form) {
        return fromFetch(this.defaults.baseURL + url, {
            method: "POST",
            headers: {
                "X-CSRF-TOKEN": this.defaults.token.content,
                "X-Requested-With": "XMLHttpRequest",
            },
            credentials: "include",
            body: form,
            selector: async (response) => await response.json(),
        });
    },
}
export default http

/*
this.$http.upload("/api/thongtin-store-file", form).subscribe({
    next: (data) => {
        if (data.hasOwnProperty("result")) {
            this.logo = data.result.logo;
            this.$notify("Upload Ok!");
        } else {
            this.$notify({
                message: data.errors[0],
                type: "error",
                showClose: true,
            });
        }
    },
    error: (error) => {
        //this.errorMessage = error;
        this.$notify({
            message: "Có lỗi!" + error,
            type: "error",
            showClose: true,
        });
        console.error("There was an error!", error);
    },
});
*/
