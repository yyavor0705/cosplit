const useHttp = (path: string, method: "GET", body: null, onSuccess: () => {}, onError: () => {}) => {
    const async sendRequest = () => {
        let result: null;
        result = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBA5P61AT2iXKI8657cyhwG-7G9iSwIySM",
            {
                method: method,
                body: body
            }
        );
        if(!result.ok) {
            console.log("Error occurred")
        }
        const body = await result.body;



    }
}

export default useHttp;