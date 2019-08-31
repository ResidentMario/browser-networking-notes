function PollXHR() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/resources');
    xhr.responseType = 'text';
    
    xhr.onload = () => {
        if (this.status == 200) {
            console.log(this.response);
        } else {
            throw Error("Non-200 response code.")
        }
    }
}

window.PollXHR = PollXHR;