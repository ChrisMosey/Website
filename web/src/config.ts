export function ApiUrl() {
    switch(process.env.NODE_ENV) {
        case "development":
            return "http://localhost:5000";
        case "production":
            return "https://api.chrismosey.ca";
        
            default:
                return "http://localhost";
    }
}